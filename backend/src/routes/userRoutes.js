import express from "express";
import {
  register_user,
  login_user,
  getUserDetails,
} from "../controllers/userController.js";
import { upload } from "../middlewares/multer.middleware.js";
import authMiddleware from "../middlewares/authentication.js";

const userRouter = express.Router();

userRouter.post("/signup", upload.single("profilePicture"), register_user);
userRouter.post("/signin", login_user);
userRouter.get("/userInfo", authMiddleware, getUserDetails); 

export default userRouter;
