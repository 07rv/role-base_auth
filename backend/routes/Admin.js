import express from "express";
import { Getuser } from "../controller/Admin.js";
import { isAdmin } from "../middleware/verifyToken.js";

const AdminRoutes = express.Router();

AdminRoutes.get("/getuser", isAdmin, Getuser);

export default AdminRoutes;
