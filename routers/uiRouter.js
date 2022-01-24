const uiRouter = require("express").Router()
 const { 
    getProductPage ,
    showAddNewProductPage,
    saveNewProduct,
    deleteProduct,
    editProduct
} = require("../controllers/uiController")  

uiRouter.route("/")
    .get(getProductPage) 
uiRouter.route("/new")
    .get(showAddNewProductPage)

uiRouter.route("/create")
    .post(saveNewProduct)

uiRouter.route("/delete/:id")
    .get(deleteProduct)

uiRouter.route("/edit/:id")
    .get(editProduct)

module.exports = uiRouter