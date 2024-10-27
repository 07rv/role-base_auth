import UserModel from "../models/user.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existUser = await UserModel.findOne({ email });

    if (existUser) {
      return res
        .status(401)
        .json({ sucess: false, message: "User Already exit" });
    }
    const hasspassword = await bcryptjs.hashSync(password, process.env.SALT);
    const newuser = new UserModel({
      name: name,
      email: email,
      password: hasspassword,
    });

    await newuser.save();

    res.status(200).json({ sucess: true, user: newuser });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ sucess: false, message: "Interval Server error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExists = await UserModel.findOne({ email });

    if (!userExists) {
      return res.status(400).json({ sucess: false, message: "User not exit" });
    }

    const isPassword = bcryptjs.compare(password, userExists.password);

    if (!isPassword) {
      return res
        .status(404)
        .json({ sucess: false, message: "Invalid credentails" });
    }
    const token = jwt.sign(
      { userId: userExists._id },
      process.env.SECRET_KEY,
      {
        expiresIn: 60 * 60,
      },
      { algorithm: "HS256" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      maxAge: 36000000,
    });
    res.status(200).json({ sucess: true, user: userExists, token: token });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ sucess: false, message: "Interval Server error" });
  }
};

export { register, login };
