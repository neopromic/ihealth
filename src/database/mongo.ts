import mongoose from "mongoose";

export async function connectionDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI || "");
        console.log("database connected 🚀");
    } catch(err) {
        console.log("error connecting.....");
    }
}