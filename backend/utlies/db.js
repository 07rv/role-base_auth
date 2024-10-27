import mongoose from "mongoose";

const DbCon = async () => {
  if (mongoose.connection.readyState === 1) {
    console.log("Using existing MongoDB connection");
    return mongoose.connection;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected");
  } catch (err) {
    console.log("DB connection error:", err);
    throw err;
  }
};

export default DbCon;
