import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Setting up config file
dotenv.config();

const MONGODB_URI = process.env.DB_MONGO_URI_LOCAL;
mongoose.set('strictQuery', true);

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            family: 4
        });
        console.log(`MongoDB Connected: ${conn.connection.host} - ${conn.connection.name}`);
    } catch (error) {
        console.log(error);
        throw new Error('Error while connecting to database');
    }
};

export default connectDB;