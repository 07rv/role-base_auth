import jwt from "jsonwebtoken";
import UserModel from "../models/user.js";

const isAdmin = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ sucess: false, message: "no token found" });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    const user = await UserModel.findById(decoded.userId);

    if (!user) {
      return res.status(404).json({ sucess: false, message: "user not found" });
    }

    if (user.role != "admin") {
      return res
        .status(403)
        .json({ sucess: false, message: "user is not an admin" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ sucess: false, message: "Interval Server error" });
  }
};

export { isAdmin };
