const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");



const app = express();

app.get("/", (req, res) => {
  res.send("Experess is here ");
});

app.listen(3001,function(){
 console.log("Server is running on port 3001"); 
})