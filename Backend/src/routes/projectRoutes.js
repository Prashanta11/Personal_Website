import express from "express";
import {
  addNewProject,
  deleteProject,
  getAllProject,
  getSingleProject,
  updateProject,
} from "../controllers/projectController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/add", isAuthenticated, addNewProject);
router.delete("/delete/:id", isAuthenticated, deleteProject);
router.put("/update/:id", isAuthenticated, updateProject);
router.get("/getall", getAllProject);
router.get("/get/:id", getSingleProject);

export default router;
