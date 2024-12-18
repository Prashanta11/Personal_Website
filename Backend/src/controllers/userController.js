import { v2 as Cloudinary } from "cloudinary";
import { catchAsyncError } from "../middlewares/catchAsyncError.js";

import { User } from "../models/userSchema.js";

export const register = catchAsyncError(async(req ,res , next)=>{
    if ( Object.keys(req.files).length=== 0){
        return next (new ErrorHandler("Avatar and  Resume Are Required",400));
    }
    const {avatar} = req.files;
    const cloudinaryResponseForAvatar= await Cloudinary.uploader.upload(
    avatar.tempFilePath,
    {folder: "AVATARS"}
    );
if(!cloudinaryResponseForAvatar||cloudinaryResponseForAvatar.error){
    console.error(
        "cloudinary error:",
        cloudinaryResponseForAvatar.error|| "unknown cloudinary error"
        );
    }
    const {resume} = req.files;
    const cloudinaryResponseForResume = Cloudinary.uploader.upload(
        resume.tempFilePath,
        {folder: "RESUME"}
        );
    if(!cloudinaryResponseForResume||cloudinaryResponseForResume.error){
        console.error(
            "cloudinary error:",
            cloudinaryResponseForResume.error|| "unknown cloudinary error"
            );
        }
const{ 
    fullName,
    email,
    phone,
    aboutMe,
    password,
    portfolioURL,
    githubURL,
    facebookURL,
    linkedinURL,
    instagramURL} = req.body;

    console.log(req.body);
    try {
        const user = await User.create({
            fullName,
            email,
            phone,
            aboutMe,
            password,
            portfolioURL,
            githubURL,
            facebookURL,
            linkedinURL,
            instagramURL,   
            avatar:{
                public_id:cloudinaryResponseForAvatar.public_id,
                
                url:cloudinaryResponseForAvatar.secure_url,
            },
            resume:{
                public_id:cloudinaryResponseForAvatar.public_id,
                
                url:cloudinaryResponseForAvatar.secure_url,
            },
        });
        res.status(200).json({
            data:user,
            success:true,
            message:"user registered",
        });
    } catch (error) {
        console.log("Error while creating user", error);
    }

});