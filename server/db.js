import mongoose from "mongoose";
import { MONGODB_URL } from "./config.js";

export const connectDB = async() => {
    try {
        mongoose.set('strictQuery', false)
        const conn = await mongoose.connect(MONGODB_URL)
        console.log(`Mongo Connected: ${conn.connection.name}`);
    } catch (error) {
        console.error(`error: ${error.message}`)
        process.exit(1)
    }
}