import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()
var options = {
    logger: console.log,
    loggerLevel: 'info'
} 
export const connectDB = async() => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.set('debug', true)
        console.log(`Mongo Connected:debe entrar`);
        const conn = await mongoose.connect('mongodb://127.0.0.1:27017/merndb')
        console.log(`Mongo Connected: ${conn.connection.name}`);
    } catch (error) {
        console.error(`error: ${error.message}`)
        process.exit(1)
    }
}