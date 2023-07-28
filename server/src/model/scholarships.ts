import { Date, Document, Schema, Model, model } from "mongoose";

export interface IScholarships extends Document {
    name : string;
    deadline : Date;
    requirement : string;
    amount : number;
    institution : string;
}

export const scholarshipsSchema : Schema = new Schema ({

    name : {type : String, required : true, trim: true},
    deadline : { type : String, required : true, trim : true},
    requirement : {type : String, required : true, trim : true},
    amount : {type : Number, trim : true},
    institution : {type : String, trim : true},
});

//export const Scholarships : Model<IScholarships> = model <IScholarships> ("scholarships_details", scholarshipsSchema);