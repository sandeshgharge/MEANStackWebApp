import { Document, Schema, Model, model } from "mongoose";

export interface IPartnerUnis extends Document {
    name : string;
    location: string;
    link : string;
}

export const partnerUnisSchema : Schema = new Schema ({

    name : {type : String, required : true, trim: true},
    location : {type : String, required : true, trim : true},
    link : {type : String, required : true, trim : true}
});

// namespace ModelList{
//     export const PartnerUnis : Model<IPartnerUnis> = model <IPartnerUnis> ("partnerUnis_details", partnerUnisSchema);

// };