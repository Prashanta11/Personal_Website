import { v2 as Cloudinary } from "cloudinary";
import crypto from "crypto";
import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { User } from "../models/userSchema.js";
import { generateToken } from "../utils/jwtToken.js";
import { sendEmail } from "../utils/sendEmail.js";

export const register = catchAsyncError(async (req, res, next) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return next(new ErrorHandler("Avatar and  Resume Are Required", 400));
  }
  const { avatar } = req.files;
  const cloudinaryResponseForAvatar = await Cloudinary.uploader.upload(
    avatar.tempFilePath,
    { folder: "AVATARS" }
  );
  if (!cloudinaryResponseForAvatar || cloudinaryResponseForAvatar.error) {
    console.error(
      "cloudinary error:",
      cloudinaryResponseForAvatar.error || "unknown cloudinary error"
    );
  }
  const { resume } = req.files;

  const cloudinaryResponseForResume = Cloudinary.uploader.upload(
    resume.tempFilePath,
    { folder: "RESUME" }
  );
  if (!cloudinaryResponseForResume || cloudinaryResponseForResume.error) {
    console.error(
      "cloudinary error:",
      cloudinaryResponseForResume.error || "unknown cloudinary error"
    );
  }
  const {
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
  } = req.body;

  console.log(req.body);
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
    avatar: {
      public_id: cloudinaryResponseForAvatar.public_id,

      url: cloudinaryResponseForAvatar.secure_url,
    },
    resume: {
      public_id: cloudinaryResponseForAvatar.public_id,

      url: cloudinaryResponseForAvatar.secure_url,
    },
  });
  generateToken(user, "User Registered", 201, res);
});


export const login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    console.log("Email or password not provided");
    return next(new ErrorHandler("Email and password Are Required"));
  }
  console.log("Attempting to find user with email:", email);
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    console.log("User not found with email:", email);
    return next(new ErrorHandler("Invalid Email or password ", 400));
  }
  console.log("User found:", user);
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    console.log("Password does not match for user:", email);
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }
  console.log("Password matched for user:", email);
  generateToken(user, "Login Successfully!", 200, res);
});


export const logout = catchAsyncError(async(req, res, next)=>
{
  res.status(200).cookie("token", "",{
    expires: new Date(Date.now()),
    httpOnly: true,
  }).json({
    success : true,
    message: "Logged Out",
  });
});
 
export const getUser= catchAsyncError(async(req,res,next)=>{
  const user = await User.findById(req.user.id);
  res.status(200).json({
    success: true,
    user,
  });
});

export  const updateProfile = catchAsyncError(async(req,res,next)=>{
  const newUserdata = {
    fullName : req.body.fullName,
    email : req.body.email,
    phone : req.body.phone,
    aboutMe : req.body.aboutMe,
    portfolioURL : req.body.portfolioURL,
    githubURL : req.body.githubURL,
    facebookURL : req.body.facebookURL,
    linkedinURL : req.body.linkedinURL,
    instagramURL : req.body.instagramURL,
  };
  if (req.files && req.files.avatar){
    const avatar = req.files.avatar;
    const user = await User.findById(req.user.id);
    const profileImageId= user.avatar.public_id;
    await Cloudinary.uploader.destroy(profileImageId);
    const cloudinaryResponse = Cloudinary.uploader.upload(
      avatar.tempFilePath,
      { folder: "AVATARS" }
    );
    newUserdata.avatar = {
      public_id: (await cloudinaryResponse).public_id,
      url: (await cloudinaryResponse).secure_url,
    };
  }
  if (req.files && req.files.resume){
    const resume = req.files.resume;
    const user = await User.findById(req.user.id);
    const resumeId= user.resume.public_id;
    await Cloudinary.uploader.destroy(resumeId);
    const cloudinaryResponse = Cloudinary.uploader.upload(
      resume.tempFilePath,
      { folder: "RESUME" }
    );
    newUserdata.resume = {
      public_id: (await cloudinaryResponse).public_id,
      url: (await cloudinaryResponse).secure_url,
    };
  }
  const user = await User.findByIdAndUpdate(req.user.id,newUserdata,{
    new:true,
    runValidators: true,
    userFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    message: "Profile Updated",
    user,
  });
});
export const updatePassword = catchAsyncError(async(req,res,next)=>{
  const { currentPassword, newPassword , confirmNewPassword}= req.body;
  if(! currentPassword||!newPassword || !confirmNewPassword){
    return next( new ErrorHandler("Please Fill All Fields",400));
  }
  const user = await User.findById(req.user.id).select("+password");
const isPasswordMatched = await user.comparePassword(currentPassword);
if (!isPasswordMatched){
  return next(new ErrorHandler(" Incorrect Current Password",400));
}
if(newPassword !== confirmNewPassword){
  return next(new ErrorHandler(" New Password didn't matched",400));

}
user.password = newPassword;
await user.save();
res.status(200).json({
  success : true,
  message : " Password Updated",
});
});
export const getUserForPortfolio = catchAsyncError(async(req,res,next)=>{
const id = "6762b86b45e250fd9568cd43";
const user = await User.findById(id);
if (!user) {
  return res.status(404).json({
      success: false,
      message: "User not found",
  });}
res.status(200).json({
  success : true,
  user,
});
});
 export const forgetPassword = catchAsyncError(async(req,res,next)=>{
  const user = await User.findOne({
    email: req.body.email
  });
  if (!user){
    return next(new ErrorHandler("User not Found",404));
  }

  const resetToken = user.getResetPasswordToken();
  
  await user.save({ validateBeforeSave: false});
 const resetPasswordurl = `${process.env. DASHBOARD_URL}/password/reset/${resetToken}`
 const message = `Your Reset Password Token is:- \n\n ${resetPasswordurl} If you haven't requested this please ignore  it`;
 try {
  await sendEmail({
    email: user.email,
    subject: "Personal Portfolio Dashboard recovery Password",
    message,
  });
  res.status(200).json({
    success: true,
    message: `Email sent to ${user.email} successfully!`,
  });
 } catch (error) {
  user.resetPasswordExpire = undefined;
  user.resetPasswordToken = undefined;
  await user.save();
  return next (new ErrorHandler(error.message,500));
 }
 });

 export const resetPassword = catchAsyncError(async(req,res,next)=>{
  const {token} = req.params;
  const resetPasswordToken = crypto.createHash("sha256").update(token).digest("hex");

  const existingUser = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: {$gt: Date.now() },
  });
  if (!existingUser){
    return next ( new  ErrorHandler("Reset password token is invalid or expired",400));
  
  }
  if(req.body.password !== req.body.confirmPassword){
    return next( new ErrorHandler(" Password and  Confirm Password do not match"));
  }

existingUser.password = await req.body.password;
existingUser.resetPasswordExpire  = undefined;
existingUser.resetPasswordToken = undefined;
await existingUser.save();
generateToken(existingUser, "Reset Password Successfully",200,res);  
 });