import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config()

const MONGO_URI = process.env.MONGO_URI;

const dbConnection = async () =>{
    try {
     await mongoose.connect(`${MONGO_URI}`);
     console.log("MongoDB Connected Successfully");
} catch (error) {
    console.log("Error connecting to Database", error);
    process.exit(1);
}
}

export default dbConnection ;
