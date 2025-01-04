const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
// const users = require("./models/users.model");
const userRouter=require("./routes/users.route")

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
module.exports = app;
