import mongoose from "mongoose";
import { mongoose_uri } from "./config.js";

export const connectionDb = async () => {
    try{
        mongoose.set('strictQuery', false);
        await mongoose.connect(mongoose_uri, {useNewUrlParser: true});
    }catch{
        console.log("No se pudo conectar a la base de datos");
    }
}