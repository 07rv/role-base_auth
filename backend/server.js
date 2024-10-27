import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import AuthRoutes from "./routes/Auth.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("test");
});

app.use("/api/auth", AuthRoutes);

app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
