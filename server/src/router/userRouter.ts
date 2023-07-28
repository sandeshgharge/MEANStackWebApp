import { MainController } from "../controller/MainController";
import { Router } from "express";
import { UserController } from "../controller/UserController";

export class UserRouter{
    router : Router;
    mainController : MainController = new MainController;
    userComtroller : UserController = new UserController;

    constructor(){
        this.router = Router();
        this.routes();
    }

    routes(){
        
        this.router.post("/login", this.userComtroller.authenticateUser);
        this.router.post("/fetch", this.mainController.fetch);
        this.router.post("/insert", this.mainController.insert);
        this.router.post("/update", this.mainController.update);
        this.router.post("/delete", this.mainController.delete);
        this.router.get("/getAll", this.mainController.fetch);
        
        this.router.post("/fetchUsrRq", this.userComtroller.fetchPendingUser);

    }
}