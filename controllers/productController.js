const mongoose = require("mongoose");
const Product = require("../modals/ProductModal");

const getAllProducts = async (req, res) => {
  try {
    const data = await Product.find({});
    res.json(data);
  } catch (e) {
    res.status(500).send("Unable to get the product list");
  }
};

const getSingleProduct = async (req, res) => {
  const id = req.params.id;
  // const singleProduct = products.find(eachProduct=>eachProduct.id === id)
  // if(singleProduct){
  //     res.status(200).json(singleProduct)
  // }
  // else {
  //     res.status(404).send(`Product not found with id ${id}`)
  // }
  try {
    const product = await Product.findOne({ _id: id });
    res.json(product);
  } catch (e) {
    res.status(500).send(`Unable to get the product for id ${id}`);
  }
};

const createNewProduct = async (req, res) => {
  try {
    const productObj = await Product.create(req.body);
    res.status(201).json(productObj);
  } catch (e) {
    res.status(500).send("Unable to add product to DB" + e);
  }
};

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  const obj = await Product.deleteOne({ _id: id });
  res.status(200).json(obj);
};
const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedObj = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(updatedObj);
  } catch (e) {
    res.status(500).send("Unable to add product to DB" + e);
  }
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  createNewProduct,
  deleteProduct,
  updateProduct,
};
