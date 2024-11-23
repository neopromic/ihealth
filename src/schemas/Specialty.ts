import mongoose, { Document, Schema } from "mongoose";

export type SpecialtyData = {
  _id: string;
  name: string;
};

export type Specialty = Document & SpecialtyData;

const SpecialtySchema = new Schema<Specialty>({
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.model<Specialty>("Specialty", SpecialtySchema);
