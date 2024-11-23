import mongoose, { Document, Schema } from "mongoose";

export type SpecialtieData = {
    _id: string;
    name: string;
}

export type Specialtie = Document & SpecialtieData;

const SpecialtieSchema = new Schema<Specialtie>({
    name: {
        type: String,
        required: true
    }
});

export default mongoose.model<Specialtie>("Specialtie", SpecialtieSchema);