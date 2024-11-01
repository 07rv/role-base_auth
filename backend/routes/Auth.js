import express from "express";
import { register, login, logout } from "../controller/Auth.js";

const AuthRoutes = express.Router();

AuthRoutes.post("/register", register);

AuthRoutes.post("/login", login);

AuthRoutes.post("/logout", logout);

export default AuthRoutes;
