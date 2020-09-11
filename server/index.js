require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const { MONGOURI } = require("./config/keys");
const cors = require("cors");
require("./models/user");
require("./models/ama");

const authRoutes = require("./routes/auth");
const amaRoutes = require("./routes/ama");

//express server doesn't automatically parse the request to json we need tell our sever to parse

app.use(express.json());
app.use(cors());

//route middlewares

app.use("/api", authRoutes);
app.use("/api", amaRoutes);

mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connection  successful");
});

mongoose.connection.on("error", (err) => {
  console.log("Error connection ", err);
});

app.listen(PORT, () => {
  console.log(`Server is running... ${PORT}`);
});
