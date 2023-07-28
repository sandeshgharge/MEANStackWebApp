import { Date, Document, Schema, Model, model } from "mongoose";
export interface ICourse extends Document {
    name : string;
    startSem : string;
    level : string;
}

export const courseSchema : Schema = new Schema ({

    headlnameines : {type : String, required : true, trim: true},
    startSem : { type : String, required : true, trim : true},
    level : {type : String, required : true, trim : true}
});

//export const Course : Model<ICourse> = model <ICourse> ("course_details", courseSchema);