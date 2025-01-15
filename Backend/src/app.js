import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import fileUpload from "express-fileupload";
import { errorMiddleware } from "./middlewares/error.js";
import experienceRouter from "./routes/experienceRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import projectRouter from "./routes/projectRoutes.js";
import skillRouter from "./routes/skillRoutes.js";
import applicationRouter from "./routes/softwareApplicationRoutes.js";
import timelineRouter from "./routes/timelineRoutes.js";
import userRouter from "./routes/userRoutes.js";
const app = express();
dotenv.config({ path: "../.env" });
const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = [
      "*",
      "https://portfolio-frontend-498rnwtww-prashants-projects-eab9b563.vercel.app",
      "https://dashboard-zeta-sable.vercel.app",
      "http://localhost:5173",
    ];
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      // !origin check allows requests from non-browser clients like Postman
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200, // For legacy browser support
};
app.use(cors(corsOptions));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.use("/api/v1/message", messageRoutes);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/timeline", timelineRouter);
app.use("/api/v1/experience", experienceRouter);
app.use("/api/v1/softwareApplication", applicationRouter);
app.use("/api/v1/skill", skillRouter);
app.use("/api/v1/project", projectRouter);

app.use(errorMiddleware);

export default app;
