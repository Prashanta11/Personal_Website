import { v2 as Cloudinary } from "cloudinary";
import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { Skill } from "../models/skillSchema.js";

export const addNewSkill = catchAsyncError(async(req, res, next)=>{
    if (!req.files || Object.keys(req.files).length === 0) {
        return next(
          new ErrorHandler("Skill Svg Required", 400)
        );
      }
      const { svg } = req.files;
      const { title, Proficiency } = req.body;
      if (!title || !Proficiency){
        return next(new ErrorHandler("Please fill full form"));
    }
   
      const cloudinaryResponse = await Cloudinary.uploader.upload(
        svg.tempFilePath,
        { folder: "PORTFOLIO_SKILL_SVG" }
      );
      if (!cloudinaryResponse || cloudinaryResponse.error) {
        console.error(
          "cloudinary error:",
          cloudinaryResponse.error || "unknown cloudinary error"
        );
      }
      const skill = await Skill.create({
        title,
        Proficiency,
        svg: {
            public_id: cloudinaryResponse.public_id,
            url: cloudinaryResponse.secure_url,
          },
      });
      res.status(200).json({
        success: true,
        message: "New skill added",
        skill,
      });
});

export const deleteSkill = catchAsyncError(async(req, res, next)=>{});
export const  updateSkill = catchAsyncError(async(req, res, next)=>{});
export const getAllSkill= catchAsyncError(async(req, res, next)=>{});