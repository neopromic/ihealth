import mongoose, { Document, Schema } from "mongoose";

export type UserData = {
    _id: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    type: "patient" | "doctor";
    clinic_id?: string;
    created_date: Date;
}

export type User = Document & UserData;

const UserSchema = new Schema<User>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    clinic_id: {
        type: String,
        required: false
    },
    created_date: {
        type: Date,
        required: true
    }
});

export default mongoose.model<User>("User", UserSchema);