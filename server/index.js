const express = require("express");
const bodyParser = require("body-parser");
// import Connection from "./databse/db";
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { Connection } = require("./databse/db");
const DefaultData = require("./default.js");
const abc = require("./constants/products.js");
// const HJ = require("./Model/cs");

const port = 8000;

const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", require("./routes/route.js"));
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
Connection(USERNAME, PASSWORD);

//mongoose.connect('mongodb+srv://jatinjaiswal56:user@cluster1.uzfhrsq.mongodb.net/?retryWrites=true&w=majority');

app.listen(port, () =>
  console.log(`Server is running successfully on PORT ${port} `)
);
DefaultData();
