import express from "express";
import { Getuser, deleteUser } from "../controller/Admin.js";
import { isAdmin } from "../middleware/verifyToken.js";

const AdminRoutes = express.Router();

AdminRoutes.get("/getuser", isAdmin, Getuser);
AdminRoutes.get("/delete:/:id", isAdmin, deleteUser);

export default AdminRoutes;
