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
        cloudinaryResponseForAvatar.error|| "unknmown cloudinary error"
        );
    }

    const cloudinaryResponseForResume = Cloudinary.uploader.upload(
        avatar.tempFilePath,
        {folder: "AVATARS"}
        );
    if(!cloudinaryResponseForAvatar||cloudinaryResponseForAvatar.error){
        console.error(
            "cloudinary error:",
            cloudinaryResponseForAvatar.error|| "unknmown cloudinary error"
            );
        }

});