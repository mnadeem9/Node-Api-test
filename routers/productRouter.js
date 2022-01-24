const productRouter = require("express").Router();
const {
  getAllProducts,
  getSingleProduct,
  createNewProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/productController");

const validateTokenMiddleware = require("../middlewear/validateToken");
const logMe = require("../middlewear/logging");

productRouter
  .route("/")
  .get(logMe, getAllProducts)
  .post(logMe, createNewProduct);

productRouter
  .route("/:id")
  .get(getSingleProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

module.exports = {
  productRouter,
};
