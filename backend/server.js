import express from "express";

const PORT = 4000;
const app = express();

app.get("/", (req, res) => {
  res.send("test");
});

app.listen(PORT, () => {
  console.log(`server running at ${PORT}`);
});
