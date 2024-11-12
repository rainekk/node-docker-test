import express from "express";

const app = express();
const PORT = 10000;

app.get("/", async function (req, res) {
  res.send("Hello!");
});

app.listen(PORT, async function () {
  console.log("App running on ${PORT}");
});
