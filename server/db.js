import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()
var options = {
    logger: console.log,
    loggerLevel: 'info',
    poolSize: 10
} 
export const connectDB = async() => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.set('debug', true)
        console.log(`Mongo Connected:debe entrar`);
        const conn = await mongoose.connect(process.env.URL_BD, options)
        console.log(`Mongo Connected: ${conn.connection.name}`);
    } catch (error) {
        console.error(`error: ${error.message}`)
        process.exit(1)
    }
}