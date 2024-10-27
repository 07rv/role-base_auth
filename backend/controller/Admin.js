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

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const checkRole = await UserModel.findById(userId, role);

    if (checkRole === "admin") {
      return res
        .status(409)
        .json({ sucess: false, message: "cannot delete user" });
    }
    const user = await UserModel.findByIdAndDelete(userId);

    if (!user) {
      return res.status(404).json({ sucess: false, message: "user not found" });
    }

    res
      .status(200)
      .json({ sucess: true, message: "users deleted", user: user });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ sucess: false, message: "Interval Server error" });
  }
};

export { Getuser, deleteUser };
