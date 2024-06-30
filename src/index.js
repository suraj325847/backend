const express = require("express");
const connectDB = require("./db/index.js");
const dotenv = require ('dotenv')
const app = require ("./app.js")
const PORT = process.env.PORT || 8000; // Define PORT

// Connect to the database
dotenv.config({
  path: './.env'
})

connectDB()
.then(() => {
  app.listen(process.env.PORT || 8000, () => {
      console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
  })
})
.catch((err) => {
  console.log("MONGO db connection failed !!! ", err);
})
