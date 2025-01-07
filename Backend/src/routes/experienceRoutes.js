import express from "express";
import { deleteExperience, getAllExperience, postExperience } from "../controllers/experienceController.js";
import { isAuthenticated } from "../middlewares/auth.js";
 
const router = express.Router();
router.post("/add",isAuthenticated,postExperience);
router.delete("/delete/:id",isAuthenticated,deleteExperience);
router.get("/getall",getAllExperience);

export default router;