// import cookieParser from "cookie-parser";
// import cors from "cors";
// import dotenv from "dotenv";
// import express from "express";
// import fileUpload from "express-fileupload";
// import { errorMiddleware } from "./middlewares/error.js";
// import experienceRouter from "./routes/experienceRoutes.js";
// import messageRoutes from "./routes/messageRoutes.js";
// import projectRouter from "./routes/projectRoutes.js";
// import skillRouter from "./routes/skillRoutes.js";
// import applicationRouter from "./routes/softwareApplicationRoutes.js";
// import timelineRouter from "./routes/timelineRoutes.js";
// import userRouter from "./routes/userRoutes.js";
// const app = express();
// dotenv.config({ path: "../.env" });

// app.use(
//   cors({
//     origin: "https://personal-website-na5z.vercel.app/",
//     methods: ["GET", "POST", "DELETE", "PUT"],
//     credentials: true,
//   })
// );

// app.use(cookieParser());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(
//   fileUpload({
//     useTempFiles: true,
//     tempFileDir: "/tmp/",
//   })
// );

// app.use("/api/v1/message", messageRoutes);
// app.use("/api/v1/user", userRouter);
// app.use("/api/v1/timeline", timelineRouter);
// app.use("/api/v1/experience", experienceRouter);
// app.use("/api/v1/softwareApplication", applicationRouter);
// app.use("/api/v1/skill", skillRouter);
// app.use("/api/v1/project", projectRouter);

// app.use(errorMiddleware);

// export default app;
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

// List of allowed origins
const allowedOrigins = [
  "https://personal-website-na5z.vercel.app/",
  "https://personal-website-nine-theta.vercel.app/",
];

// CORS Configuration
app.use(
  cors({
    origin: (origin, callback) => {
      // If no origin (for example, when the request is from the server-side)
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"), false);
    },
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

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
