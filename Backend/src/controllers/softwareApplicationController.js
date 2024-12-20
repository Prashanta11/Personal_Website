import { v2 as Cloudinary } from "cloudinary";
import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { softwareApplication } from "../models/softwareApplicationSchema.js";

export const addNewApplication = catchAsyncError(async (req, res, next) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return next(
      new ErrorHandler("Software Application Icons/Svg Required", 400)
    );
  }
  const { svg } = req.files;
  const { name } = req.body;

  if (!name) {
    return next(new ErrorHandler("software Name is Required"));
  }
  const cloudinaryResponse = await Cloudinary.uploader.upload(
    svg.tempFilePath,
    { folder: "PORTFOLIO_SOFTWARE_APPLICATION" }
  );
  if (!cloudinaryResponse || cloudinaryResponse.error) {
    console.error(
      "cloudinary error:",
      cloudinaryResponse.error || "unknown cloudinary error"
    );
  }
  const SoftwareApplication = await softwareApplication.create({
    name,
    svg: {
      public_id: cloudinaryResponse.public_id,
      url: cloudinaryResponse.secure_url,
    },
  });
  res.status(200).json({
    success: true,
    message: "New Software Application Added!",
    SoftwareApplication,
  });
});

export const deleteApplication = catchAsyncError(async (req, res, next) => {
  const {id} =req.params;
  const SoftwareApplication = await softwareApplication.findById(id);
  if(!SoftwareApplication){
    return next(new ErrorHandler("software Application not Found",404));
  }
    const softwareApplicationSvgId = SoftwareApplication.svg.public_id;
    await Cloudinary.uploader.destroy (softwareApplicationSvgId);
    await softwareApplication.deleteOne();
    res.status(200).json({
      success: true,
      message: "software application deleted",
    });
});
export const getAllApplication = catchAsyncError(async (req, res, next) => {
      const SoftwareApplication = await softwareApplication.find();
      res.status(200).json({
          success: true,
          softwareApplication,
      });
});
