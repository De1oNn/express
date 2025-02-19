import express from "express";
import { logInUsers } from "../resolvers/login-users.js";
import { signUpUsers } from "../resolvers/signup-users.js";

export const userRouter = express.Router();

userRouter.post("/log-in", logInUsers);
userRouter.post("/sign-up", signUpUsers);

