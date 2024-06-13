const mongoose = require("mongoose"); // Importing mongoose

// Connecting to the MongoDB database
mongoose.connect("mongodb://localhost:27017/e-comm");

// Defining the schema for the 'products' collection
const ProductsSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  category: String,
});

// Creating a model for the 'products' collection based on the defined schema
const ProductsModel = mongoose.model("products", ProductsSchema);

const saveInDB = async () => {
  // Creating a new product document with the defined schema
  let data = new ProductsModel({
    name: "Note Pro",
    price: 250,
    brand: "maxx",
    category: "mobiles", // Including the 'category' field
  });

  // Saving the new document to the database
  let result = await data.save().catch((error) => {
    // Handle any errors that occur during the save operation
    console.error("Error saving document:", error);
  });

  // If the save operation was successful, 'result' will be defined
  if (result) {
    console.log("Document saved successfully:", result); // Log the saved document
  }
};

const updateInDB = async () => {
  const ProductsModel = mongoose.model("products", ProductsSchema);
    let data = await ProductsModel.updateOne({name:"Z75"},{$set:{price:150}})
    console.log(data)
};


// updateInDB();


const deleteInDB = async () => {
  const ProductsModel = mongoose.model("products", ProductsSchema);
    let data = await ProductsModel.deleteMany({name:'Note Pro'})
    console.log(data)
}

// deleteInDB();

const findInDB = async () => {
    const ProductsModel = mongoose.model("products", ProductsSchema);
      let data = await ProductsModel.find({name: "mui"});
      console.log(data)
  }


  findInDB();