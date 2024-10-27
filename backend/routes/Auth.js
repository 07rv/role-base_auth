import express from "express";
import { register } from "../controller/Auth.js";

const AuthRoutes = express.Router();

AuthRoutes.post("/register", register);

export default AuthRoutes;
