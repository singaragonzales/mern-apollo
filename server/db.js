import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()
export const connectDB = async() => {
    try {
        mongoose.set('strictQuery', false)
        const conn = await mongoose.connect(process.env.URL_BD)
        console.log(`Mongo Connected: ${conn.connection.name}`);
    } catch (error) {
        console.error(`error: ${error.message}`)
        process.exit(1)
    }
}