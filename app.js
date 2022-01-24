require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const { productRouter } = require("./routers/productRouter");
const userRouter = require("./routers/userRouter");
const authRouter = require("./routers/authRouter");
const uiRouter = require("./routers/uiRouter");
const cors = require("cors");
app.use(cors());

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use("/api/v1/products", productRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);
app.use("/ui", uiRouter);

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL, {});
    app.listen(process.env.PORT || 8080, () => {
      console.log(`Server started listing on ${process.env.PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
