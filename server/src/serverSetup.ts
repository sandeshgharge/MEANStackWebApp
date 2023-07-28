import * as express from "express";
import { createServer, Server } from "http";
import { Server as ioServer, Socket } from 'socket.io';
import { UserRouter } from "./router/userRouter";
import * as mongoose from "mongoose";
import { debug, MONGODB_URI } from "./util/mongodb";

import * as compression from "compression";
import * as cors from "cors";
import { ChatEvent } from "./constants";
import { ChatMessage } from "./message";

export class ServerSetup{
    public serv : Server;
    public app : express.Application;
    private  io: ioServer;
    private ioccounter = 0; // counter for Socket IO connections
    
    constructor(){
        this.app = express();
        this.serv = createServer(this.app);
        this.config();
        this.routes();
        this.initSocket(this.serv);
        this.mongo();
    }

    public config() : void{
        this.app.set("port", process.env.PORT || 3000);
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        this.app.use(compression());
        this.app.use(express.json()); // instead of bodyParser.json()
        this.app.use(express.urlencoded({ extended: true })); // instead of bodyParser.urlencoded({ extended: true })
        this.app.use(cors());
        this.app.options('*', cors());
    }

    public routes() : void {

        this.app.get("/", (req, res) => { res.send("Server is Up..!")})
        this.app.get('/chat', (req, res) => {
            res.sendFile(__dirname + '/index.html');
          });
        this.app.use("/user", new UserRouter().router);
        this.app.use("/api", new UserRouter().router)
    }

    public start (s: any, p: number){
        s.listen(p, () => {
            console.log("Api is running at http://localhost:%d",p)
        })
    }

    private mongo() {
        const connection = mongoose.connection;
        connection.on("connected", () => {
            console.log("Mongo Connection Established");
        });
        connection.on("reconnected", () => {
            console.log("Mongo Connection Reestablished");
        });
        connection.on("disconnected", () => {
            console.log("Mongo Connection Disconnected");
            console.log("Trying to reconnect to Mongo ...");
            setTimeout(() => {
                mongoose.connect(MONGODB_URI, {
                   /** Set to false to [disable buffering](http://mongoosejs.com/docs/faq.html#callback_never_executes) on all models associated with this connection. */
                //bufferCommands?: boolean;
                /** The name of the database you want to use. If not provided, Mongoose uses the database name from connection string. */
                //dbName?: string;
                /** username for authentication, equivalent to `options.auth.user`. Maintained for backwards compatibility. */
                //user?: string;
                /** password for authentication, equivalent to `options.auth.password`. Maintained for backwards compatibility. */
                //pass?: string;
                /** Set to false to disable automatic index creation for all models associated with this connection. */
                autoIndex: true,
                /** Set to `true` to make Mongoose automatically call `createCollection()` on every model created on this connection. */
                autoCreate: true
                });
            }, 3000);
        });
        connection.on("close", () => {
            console.log("Mongo Connection Closed");
        });
        connection.on("error", (error: Error) => {
            console.log("Mongo Connection ERROR: " + error);
        });

        const run = async () => {
            await mongoose.connect(MONGODB_URI, {
                /** Set to false to [disable buffering](http://mongoosejs.com/docs/faq.html#callback_never_executes) on all models associated with this connection. */
                //bufferCommands?: boolean;
                /** The name of the database you want to use. If not provided, Mongoose uses the database name from connection string. */
                //dbName?: string;
                /** username for authentication, equivalent to `options.auth.user`. Maintained for backwards compatibility. */
                //user?: string;
                /** password for authentication, equivalent to `options.auth.password`. Maintained for backwards compatibility. */
                //pass?: string;
                /** Set to false to disable automatic index creation for all models associated with this connection. */
                autoIndex: true,
                /** Set to `true` to make Mongoose automatically call `createCollection()` on every model created on this connection. */
                autoCreate: true
            });
        };
        run().catch(error => console.error(error));
    }

    public initSocket(s: any) { // s assigned this.server later
        debug("initSocket");
        console.log('init')
        // debug("initSocket para s - httpServer: ", s);
        this.io = new ioServer(s, {
            // options object 
            // path: '/international'
            cors: {
                origin: "http://localhost:3000",
                methods: ["GET", "POST"]
              }  
        });
        // debug("initSocket this.io: ", this.io);
        this.io.on(ChatEvent.CONNECT, (socket: Socket) => {
            console.log('Connected Websocekt IO client on port %s.', this.app.get("port"));
            this.ioccounter++;
            debug("Number of websocket connections: ", this.ioccounter);
            
            socket.on(ChatEvent.MESSAGE, (m: ChatMessage) => {
                debug('[server](message):', JSON.stringify(m));
                this.io.emit('message', m);
            });

            socket.on(ChatEvent.DISCONNECT, () => {
                this.ioccounter--;
                console.log('Client disconnected');
            });

            
            socket.on(ChatEvent.MESSAGE, (msg) => {
                console.log('Received message: ' + msg);
                socket.broadcast.emit("PMMessage", {
                    message : msg
                  });
            });

           
            
            
        });
    }
}

const runServer : ServerSetup = new ServerSetup();
runServer.start(runServer.serv, 3000);