const express = require("express");
const mongoose = require("mongoose");
const routes=require('./routes')

const app = express();

mongoose.connect(
  "mongodb+srv://pedro:rocketseat@cluster0-zuj5l.mongodb.net/phorum?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(express.json());
app.use(routes);
