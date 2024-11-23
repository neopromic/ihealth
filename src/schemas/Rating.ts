import mongoose, { Document, Schema } from "mongoose";

export type RatingData = {
    _id: string;
    user_id: string;
    note: string;
    comment: string;
    createdDate: Date;
}

export type Rating = Document & RatingData;

const RatingSchema = new Schema<Rating>({
    user_id: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        required: true
    }
});

export default mongoose.model<Rating>("Rating", RatingSchema);