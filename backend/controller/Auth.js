import UserModel from "../models/user.js";

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existUser = await UserModel.findOne({ email });

    if (existUser) {
      return res
        .status(401)
        .json({ sucess: false, message: "User Already exit" });
    }

    const newuser = new UserModel({
      name,
      email,
      password,
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

export { register };
