import { Date, Document, Schema, Model, model } from "mongoose";

export interface IEvents extends Document {
    name : string;
    date : Date;
    description : string;
    purpose : string;
    specialGuests : string;
}

export const eventsSchema : Schema = new Schema ({

    name : {type : String, required : true, trim: true},
    date : { type : String, required : true, trim : true},
    description : {type : String, required : true, trim : true},
    purpose : {type : String, trim : true},
    specialGuests : {type : String, trim : true}
});

//export const Events : Model<IEvents> = model <IEvents> ("events_details", eventsSchema);