const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model')
const productRoute = require('./routes/product.route')
const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
app.get("/", function (req, res) {
  res.send("API for product management");
});

app.use('/api/products', productRoute)

// connection db
mongoose
  .connect(
    "mongodb+srv://developerrizki:6Fi0cOlTrKW5K2kU@backenddb.d8korc3.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database!");

    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => console.log("Connection failed to database"));