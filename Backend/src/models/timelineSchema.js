import mongoose from "mongoose";

const timelineSchema = new mongoose.Schema({
    timeline: {
        type:String,
        required: [true, " Title Required!"],
    },

    description: {
        type:String,
        required: [true, " Description Required!"],
    },
    
    timeline: {
        from:{
            type:String,
            required:[true,"Timeline starting Date  is required"],
        },
        to: String,
    },
});

export const Timeline = mongoose.model("Timeline",timelineSchema); 