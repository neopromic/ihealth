import mongoose, { Document, Schema } from "mongoose";

export type ClinicData = {
    _id: string;
    name: string;
    specialty_id: string;
    address: object;
    phone: string;
    created_date: Date;
}

export type Clinic = Document & ClinicData;

const ClinicSchema = new Schema<Clinic>({
    name: {
        type: String,
        required: true
    },
    specialty_id: {
        type: String,
        required: true
    },
    address: {
        type: Object,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    created_date: {
        type: Date,
        required: true
    }
});

export default mongoose.model<Clinic>("Clinic", ClinicSchema);