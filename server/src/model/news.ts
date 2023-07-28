import { timeStamp } from "console";
import { Date, Document, Schema, Model, model } from "mongoose";

export interface INews extends Document {
    headlines : string;
    date : Date;
    description : string;
}

export const newsSchema : Schema = new Schema ({

    headlines : {type : String, required : true, trim: true},
    date : { type : String, required : true, trim : true},
    description : {type : String, required : true, trim : true}
});

//export const News : Model<INews> = model <INews> ("news_details", newsSchema);