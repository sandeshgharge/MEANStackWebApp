import { NextFunction, Request, Response } from "express";
import { ModelList } from "../model/modelListNS";
import { debug } from "../util/mongodb";

export class MainController{

    /**
     * Controller is designed in a generalised way
     * Concept of namespace is used which helps creating model
     * objects dynamically.
     * 
     * This helps CRUD operations on different collections but
     * with the same method
     */
    constructor(){

    }

    public async fetch(req: Request, res: Response, next: NextFunction) {

        let transactionData = req.body;
        let schema  = ModelList[transactionData.modelName];
        let all = await schema.find({}); // wait for results
        debug(" Get Data ", all);
        res.status(200).send(all);
      }

    public async insert(req: Request, res: Response, next: NextFunction){
        let transactionData = req.body;
        let schema  = ModelList[transactionData.modelName];
        try{
            await schema.insertMany(
                [transactionData]
                );
        }
        catch (error){
            res.status(200).send({error: "D"});
        }
        if(schema == "User"){
            res.status(200).send({error : "S"});
        }
        else{
            let all = await schema.find({}); // wait for results
            res.status(200).send(all);
        }
    }

    public async update(req: Request, res: Response, next: NextFunction){
        let transactionData = req.body;
        let schema  = ModelList[transactionData.modelName];
        await schema.findOneAndUpdate({name : transactionData.name},
            transactionData
            );
        let all = await schema.find({}); // wait for results
        debug("Get Data after save: ", all);
        res.status(200).send(all);
    }

    public async delete(req: Request, res: Response, next: NextFunction){
        let transactionData = req.body;
        let schema  = ModelList[transactionData.modelName];
        await schema.findOneAndDelete({name : transactionData.name},
            transactionData
            );
        let all = await schema.find({}); // wait for results
        debug("Get Data after save: ", all);
        res.status(200).send(all);
    }

}
