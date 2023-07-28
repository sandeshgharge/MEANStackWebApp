import { Request, Response } from "express";
import { ModelList } from "../model/modelListNS";

export class UserController{

    /**
     * Controller created for User operation
     * 
     * As a requirement, a new user can start accessing the website
     * directly but on the approval of Admin
     * 
     * This functionality helps proper authentication.
     */
    constructor(){

    }

    public authenticateUser(req : Request, res: Response){
        let ip = req.body;
        let schema  = ModelList[ip.modelName];
        schema.findOne({ name : ip.userName}, function(err: any, r:any){
            if(err){

            }
            else{
                console.log(r);
                return res.json({success : true, data : r});
            }
        });
        
    }

    public approveUser(req : Request, res: Response){
        let ip = req.body;
        let schema  = ModelList[ip.modelName];
        schema.findOneAndUpdate({ name : ip.userName}, ip, function(err: any, r:any){
            if(err){

            }
            else{
                console.log(r);
                return res.json({success : true, data : r});
            }
        });
    }

    public fetchPendingUser(req : Request, res: Response){
        let ip = req.body;
        let schema  = ModelList[ip.modelName];
        let all = schema.find({ status : ip.status}, function(err: any, r:any){
            if(err){

            }
            else{
                console.log(r);
                res.status(200).send(r);
            }
        });
    }

    public fetchUsrRq(req : Request, res: Response){
        let ip = req.body;
        let schema  = ModelList[ip.modelName];
        let all = schema.find({ status : ip.status}, function(err: any, r:any){
            if(err){

            }
            else{
                console.log(r);
                res.status(200).send(r);
            }
        });
    }
}