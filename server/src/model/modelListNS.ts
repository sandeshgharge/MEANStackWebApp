import { model, Model } from "mongoose";
import { IAccomodation, accomodationSchema } from "./accomodation";
import { IAppointment, appointmentSchema } from "./appointment";
import { ICourse, courseSchema } from "./course";
import { IEvents, eventsSchema } from "./events";
import { INews, newsSchema } from "./news";
import { IPartnerUnis, partnerUnisSchema } from "./partnerUniversities";
import { IScholarships, scholarshipsSchema } from "./scholarships";
import { IUser, userSchema } from "./user";

export namespace ModelList {

    /**
     * All the model objects are created in namespace ModelList
     * to be used later for CRUD operations with the database
     */
    export const User : Model<IUser> = model <IUser> ("user_details", userSchema);

    export const Scholarships : Model<IScholarships> = model <IScholarships> ("scholarships_details", scholarshipsSchema);

    export const News : Model<INews> = model <INews> ("news_details", newsSchema);

    export const Accomodation : Model<IAccomodation> = model <IAccomodation> ("accomodation_details", accomodationSchema);

    export const Appointment : Model<IAppointment> = model <IAppointment> ("appointment_details", appointmentSchema);

    export const Course : Model<ICourse> = model <ICourse> ("course_details", courseSchema);

    export const Events : Model<IEvents> = model <IEvents> ("events_details", eventsSchema);

    export const PartnerUnis : Model<IPartnerUnis> = model <IPartnerUnis> ("partnerUnis_details", partnerUnisSchema);

}