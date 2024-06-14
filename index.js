const express = require("express");
require("./config");
const Product = require("./products");

const app = express();
app.use(express.json());

app.post("/create", async (req, resp) => {
  let data = new Product(req.body);
  let result = await data.save();
  console.log(result); //need to parse the body to get data from body for req for that you use app.use(express.json())
  resp.send(result);
});

app.get("/list", async (req, resp) => {
  let data = await Product.find();
  resp.send(data);
});

app.delete("/delete/:_id", async (req, resp) => {
  let data = await Product.deleteOne(req.params);
  resp.send(data);
});

app.put("/update/:_id", async (req, resp) => {
  let data = await Product.updateOne(
    //  {} condition
    req.params,
    {
      $set: req.body, //$set updated data
    }
  );
  resp.send(data);
});

app.listen(4500);
