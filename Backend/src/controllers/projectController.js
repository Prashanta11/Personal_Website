import { v2 as cloudinary } from "cloudinary";
import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/error.js";
import { Project } from "../models/projectSchema.js";

export const addNewProject = catchAsyncError(async(req, res ,next)=>{
    if (!req.files || Object.keys(req.files).length === 0) {
        return next(
          new ErrorHandler("Project Banner Image Required", 404)
        );
    }
    const {projectBanner} = req.files;
    const{
        title,
        description,
        gitRepoLink,
        projectLink,
        technologies,
        stack,
        deployed,
    } = req.body;

    if(! title||
        !description||
        !gitRepoLink||
        !projectLink||
        !technologies||
        !stack||
        !deployed)
        {
        return next(new ErrorHandler("Please Provide All Details",400));
        }
        const cloudinaryResponse = await cloudinary.uploader.upload(projectBanner.tempFilePath,{
            folder: "PROJECT_IMAGES",
        }
    );
        if (!cloudinaryResponse || cloudinaryResponse.error) {
            console.error(
              "cloudinary error:",
              cloudinaryResponse.error || "unknown cloudinary error"
            );
        return next (new ErrorHandler("Failed to upload Project Banner to cloudinary",500));
        }
        const project = await Project.create({
            title,
            description,
            gitRepoLink,
            projectLink,
            technologies,
            stack,
            deployed,
            projectBanner: {
                public_id: cloudinaryResponse.public_id,
                url: cloudinaryResponse.secure_url,
            },
        });
        res.status(200).json({
            success: true,
            message:"New Project Added",
            project,
        });
});

export const deleteProject = catchAsyncError(async(req, res ,next)=>{
    const { id } = req.params;
  const project = await Project.findById(id);
  if (!project) {
    return next(new ErrorHandler("Project not Found!", 404));
  }
  
  await project.deleteOne();
  res.status(200).json({
    success: true,
    message: "Project Deleted!",
  });

});

export const updateProject = catchAsyncError(async (req, res, next) => {
    const newProjectData = {
        title: req.body.title,
        description: req.body.description,
        gitRepoLink: req.body.gitRepoLink,
        projectLink: req.body.projectLink,
        technologies: req.body.technologies,
        stack: req.body.stack,
        deployed: req.body.deployed,
    };

    if (req.files && req.files.projectBanner) {
        const projectBanner = req.files.projectBanner;

        // Find the project by ID
        const project = await Project.findById(req.params.id);

        if (!project) {
            return next(new ErrorHandler("Project not found", 404));
        }

        // Delete the old banner from Cloudinary
        const projectBannerId = project.projectBanner.public_id;
        await cloudinary.uploader.destroy(projectBannerId);

        // Upload the new banner to Cloudinary
        const cloudinaryResponse = await cloudinary.uploader.upload(
            projectBanner.tempFilePath,
            { folder: "PROJECT_IMAGES" }
        );

        // Update banner information in the new project data
        newProjectData.projectBanner = {
            public_id: cloudinaryResponse.public_id,
            url: cloudinaryResponse.secure_url,
        };
    }

    // Update the project in the database
    const project = await Project.findByIdAndUpdate(req.params.id, newProjectData, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
    });

    if (!project) {
        return next(new ErrorHandler("Project not found", 404));
    }

    res.status(200).json({
        success: true,
        message: "Project Updated!",
        project,
    });
});


export const getAllProject= catchAsyncError(async(req, res ,next)=>{
    const projects = await Project.find();
    res.status(200).json({
      success: true,
      projects,
    });
});

export const getSingleProject = catchAsyncError(async(req, res ,next)=>{
    const { id } = req.params;
    try {
      const project = await Project.findById(id);
      res.status(200).json({
        success: true,
        project,
      });
    } catch (error) {
      res.status(400).json({
        error,
      });
    }
});

