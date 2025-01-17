import dotenv from "dotenv";
import mongoose from "mongoose";

mongoose.set("strictQuery", true); // Set strict query option

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const dbConnection = async () => {
  try {
    // Connect to MongoDB using the correct syntax
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log("Error connecting to Database:", error.message);
    process.exit(1); // Exit process with failure
  }
};

export default dbConnection;
