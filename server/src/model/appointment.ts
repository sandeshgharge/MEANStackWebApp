import { Date, Document, Schema, Model, model } from "mongoose";

export interface IAppointment extends Document {
    studName : string;
    reason : string;
    personName : string;
    date : Date;
}

export const appointmentSchema : Schema = new Schema ({

    studName : {type : String, required : true, trim: true},
    reason : { type : String, required : true, trim : true},
    personName : {type : String, required : true, trim : true},
    date : {type : String, required : true, trim : true}
});

//export const Appointment : Model<IAppointment> = model <IAppointment> ("appointment_details", appointmentSchema);