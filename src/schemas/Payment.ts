import mongoose, { Document, Schema } from "mongoose";

export type PaymentData = {
    _id: string;
    consultation_id: string;
    value: number;
    status: "pendent" | "paid" | "canceled";
    created_date: Date;
    edited_date: Date;
}

export type Payment = Document & PaymentData;

const PaymentSchema = new Schema<Payment>({
    consultation_id: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    created_date: {
        type: Date,
        required: true
    },
    edited_date: {
        type: Date,
        required: true
    }
});

export default mongoose.model<Payment>("Payment", PaymentSchema);