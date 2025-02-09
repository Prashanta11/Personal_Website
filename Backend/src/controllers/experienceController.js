import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { Experience } from "../models/experienceSchema.js";

export const postExperience= catchAsyncError(async(req, res, next)=>{
    const{title, description, from , to} = req.body;
    const newExperience = await Experience.create({
        title,
        description, 
        date:{from , to}, 
     });
        res.status(200).json({
            success: true,
            message: "Experience Added",
            newExperience,
        });
});

export const deleteExperience= catchAsyncError(async(req, res, next)=>{
    const {id} = req.params;
    const experience = await Experience.findById(id);
    if (!experience){
        return next (new ErrorHandler("Experience not found!",404));
    }
    await experience.deleteOne();
    res.status(200).json({
        success:" true",
        message:" Experience Deleted!",
    });
});
export const getAllExperience= catchAsyncError(async(req, res, next)=>{
    const experience = await Experience.find();
    res.status(200).json({
        success: true,
        experience,
    });
});