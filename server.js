const express = require('express');
const app = express();
const dotenv = require('dotenv');
const port = 5003;
const mongoose = require("mongoose");

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${process.env.PORT || port}!`))
