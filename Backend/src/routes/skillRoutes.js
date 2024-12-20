import express from "express";
import { addNewSkill, deleteSkill, getAllSkill, updateSkill } from "../controllers/skillController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/add",  isAuthenticated,addNewSkill);
router.delete("/delete/:id",  isAuthenticated,deleteSkill);
router.put("/update/",  isAuthenticated,updateSkill);
router.get("/getall/:id",  isAuthenticated,getAllSkill);



export default router;