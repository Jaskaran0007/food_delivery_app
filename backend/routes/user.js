import express from "express";
import createController from "../Controller/createUser.js";
import fetch from "../middlewares/fetchDetails.js";

const userRouter = express.Router();

userRouter.post("/create/user", createController.validateUser,createController.createUser);
userRouter.post("/login/user", createController.validateUser,createController.loginUser);

export default userRouter;