import mongoose, { Document, Schema } from "mongoose";

export type ConsultationData = {
    _id: string;
    user_id: string;
    clinic_id: string;
    doctor_id: string;
    date_consultation: Date;
    status: "scheduled" | "canceled"  | "realized"; // agendado | cancelado | realizado
    date_created: Date;
}

export type Consultation = Document & ConsultationData;

const ConsultationSchema = new Schema<Consultation>({
    user_id: {
        type: String,
        required: true
    },
    clinic_id: {
        type: String,
        required: true
    },
    doctor_id: {
        type: String,
        required: true
    },
    date_consultation: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    date_created: {
        type: Date,
        required: true
    },
});

export default mongoose.model<Consultation>("Consultation", ConsultationSchema);