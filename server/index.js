const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://vsweerasinhe:Q1zFAkJq7f4mkxBc@cluster0.jhx5jdu.mongodb.net/test"
  )
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

//DB Schema and Model
const postSchema = mongoose.Schema({
  title: String,
  dis: String,
  price: Number,
  image: String,

});

const Post = mongoose.model("Post", postSchema);

app.get("/", (req, res) => {
  res.send("Experess is here ");
});

app.post("/create", (req, res) => {
  Post.create({
    title: req.body.title,
    dis: req.body.dis,
    price: req.body.price,
    image: req.body.image,
  })

    .then((doc) => res.status(200).json(doc))
    .catch((err) => console.log(err));
});

app.get("/product", (req, res) => {
  Post.find()
    .then((item) => res.json(item))
    .catch((err) => console.log(err));
});

app.get("/store", (req, res) => { 
  Post.find() 
    .then((item) => res.json(item))
    .catch((err) => console.log(err));
});

//delete
app.delete("/delete/:id", (req, res) => {
  Post.findByIdAndDelete({ _id: req.params.id })
    .then((item) => res.json(item))
    .catch((err) => console.log(err));
});

app.put("/update/:id", (req, res) => {
  
  Post.findByIdAndUpdate({ _id: req.params.id },{
    title: req.body.title,
    dis: req.body.dis,
    price:req.body.price,
    image:req.body.image,
  })
    .then((item) => res.json(item))
    .catch((err) => console.log(err));

});

app.listen(3001, function () {
  console.log("Server is running on port 3001");
});
