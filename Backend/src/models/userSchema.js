import bcrypt from "bcrypt";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required:[true, "Name Required"],
    },
    email: {
        type: String,
        required:[true, "Email Required"],
    },
    phone: {
        type: String,
        required:[true, "Phone Number Required"],
    },
    aboutMe: {
        type: String,
        required:[true, "About Me is Required"],
    },
    password: {
        type: String,
        required:[true, "Password is Required"],
        minLength:[true," Password must contain 8 characters"],
        select: false,
    },
    resume: {
        public_id:{
            type: String,
            required: true,
        },
        url:{
            type: String,
            required: true,
        },
    },
    avatar: {
        public_id:{
            type: String,
            required: true,
        },
        url:{
            type: String,
            required: true,
        },
    },
    portfolioURL:{
     type: String,
     required:["Portfolio URL is Required"] ,
    },

    githubURL: String,
    facebookURL: String,
    linkedinURL: String,
    instagramURL: String,
   resetPasswordToken: String,
   resetPasswordexpire: Date,
});

// For Hashing Password

userSchema.pre("save", async function (next) {
    if(!this.isModified("password")){
        next();
    }
    this.password= await bcrypt.hash(this.password,10);
});

// Compare Password with hashed Password

userSchema.methods.comparePassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password);
};

// Generation JSON Web Token
userSchema.methods.generateJsonWebToken =  function(){
    return jwt.sign({id: this._id}, process.env.JWT_SECRET_KEY,{
        expiresIn: process.env.JWT_EXPIRES || "7d"
    });
};
userSchema.methods.getResetPasswordToken = function(){
const resetToken = crypto.randomBytes(20).toString("hex");

this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
this.resetPasswordExpire = Date.now() + 15*60*1000;
return resetToken;
}
export const User = mongoose.model("User", userSchema);
