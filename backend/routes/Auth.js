import express from "express";
import { register, login } from "../controller/Auth.js";

const AuthRoutes = express.Router();

AuthRoutes.post("/register", register);

AuthRoutes.post("/login", login);

export default AuthRoutes;
