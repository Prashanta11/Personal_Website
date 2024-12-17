import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";

export const register = catchAsyncError(async(req ,res , next)=>{
    if (!req.files || Object.keys(req.files).length=== 0){
        return next (new ErrorHandler("Avatar and  Resume Are Required",400));
    }
    const {avatar, resume } = req.files;

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

    const user = await user.create({
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
        sucess:true,
        message:"user registered",
    });

});