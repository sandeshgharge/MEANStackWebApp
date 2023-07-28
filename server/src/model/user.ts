import { Document, Schema, Model, model, Error, trusted } from "mongoose";

export interface IUser extends Document{
    name : string;
    email : string;
    password : string;
    role_id : string;
    status : string;
}

export const userSchema : Schema = new Schema ({
    name :{type: String,unique: true,required: true,trim: true},

    email :{type: String,unique: true,required: true,trim: true},

    password :{type: String,unique: false,required: true,trim: true},

    role_id : {type : Number,required : true,trim: true},

    status : String

});


//export const User : Model<IUser> = model <IUser> ("user_details", userSchema);