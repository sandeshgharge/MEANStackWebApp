import { Date, Document, Schema, Model, model } from "mongoose";

export interface IAccomodation extends Document {
    name : string;
    discription : string;
    dormLink : string;
    navLink : string;
}

export const accomodationSchema : Schema = new Schema ({

    name : {type : String, required : true, trim: true},
    dormLink : { type : String, required : false, trim : true},
    discription : {type : String, required : true, trim : true},
    navLink : { type : String, required : true, trim : true}
});

//export const Accomodation : Model<IAccomodation> = model <IAccomodation> ("accomodation_details", accomodationSchema);