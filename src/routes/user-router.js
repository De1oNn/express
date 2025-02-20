import express from "express";
import { logInUsers } from "../resolvers/users/login-users.js";
import { signUpUsers } from "../resolvers/users/signup-users.js";
import { deleteUser } from "../resolvers/users/delete-users.js";
import { updateUser } from "../resolvers/users/update-users.js";
import { authorizationMiddleware } from "../middleware/authorization.js";

export const userRouter = express.Router();

userRouter.post("/log-in", logInUsers);
userRouter.post("/sign-up", signUpUsers);
userRouter.delete("/", authorizationMiddleware, deleteUser);
userRouter.put("/", authorizationMiddleware, updateUser);
