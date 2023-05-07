const express = require('express');
const app = express();

const errorHandler = require("./middleware/Error")


app.use(express.json())
// Route Imports 

const product = require("./routes/productRoute");
const { json } = require('body-parser');

app.use("/api/v1", product)

// Middleware For Error 
app.use(errorHandler)


module.exports = app