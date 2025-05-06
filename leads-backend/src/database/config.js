import mongoose from "mongoose";
import dontev from 'dotenv';

dontev.config();
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.URL_DATABASE);
        console.log('MongoDB conectado com sucesso!')
    } catch(err){
        console.error('Erro ao conectar com MongoDB: ', err);
    }
}

export default connectDB;