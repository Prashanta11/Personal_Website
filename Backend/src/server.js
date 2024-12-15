
import cloudinary from "cloudinary";
import dotenv from "dotenv";
import app from "./app.js";
import dbConnection from "./database/dbConnection.js";

dotenv.config();

cloudinary.v2.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
});

const PORT = process.env.PORT;

dbConnection();

app.listen(PORT, ()=>{
    console.log(`server listening at port ${PORT}`);
});