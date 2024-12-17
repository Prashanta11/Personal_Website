import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import fileUpload from "express-fileupload";
import { errorMiddleware } from "./middlewares/error.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRouter from "./routes/userRoutes.js";

const app=express();


app.use(cors({
    origin:[process.env.PORTFOLIO_URL, process.env.DASHBOARD_URL],
    methods:["GET", "POST", "DELETE", "PUT"],
    credentials:true,
})
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
})
);
app.use("/api/v1/message", messageRoutes);
 
app.use("/api/v1/user", userRouter);
 
app.use(errorMiddleware);

export default app;


