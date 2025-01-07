import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
    title: {
        type:String,
        required: [true, " Title Required!"],
    },

    description: {
        type:String,
        required: [true, " Description Required!"],
    },
    
    date: {
        from:{
            type:String,
            required:[true,"Experience starting Date  is required"],
        },
        to: String,
    },
});

export const Experience = mongoose.model("Experience",experienceSchema); 