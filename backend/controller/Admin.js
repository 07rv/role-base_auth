import UserModel from "../models/user.js";

const Getuser = async (req, res) => {
  try {
    const users = await UserModel.find();

    res.status(200).json({ sucess: true, users: users });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ sucess: false, message: "Interval Server error" });
  }
};

export { Getuser };
