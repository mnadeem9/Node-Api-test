const mongoose = require("mongoose");
const Product = require("../modals/ProductModal")
const axios = require('axios');
axios.defaults.baseURL = 'http://localhost:3000';

const GET_PRODUCT_URL = "/api/v1/products"
const POST_PRODUCT_URL = "/api/v1/products"
const getProductPage = async (req,res) => {
    let data = [];
    try{
        const response = await axios.get(GET_PRODUCT_URL);
        console.log(response.status)
        data = response.data;
        res.render("productsPage",{data})
    }
    catch(err){
        console.log(`Unable to get the products from api call ${err}`)
        res.render("productsPage",{data,isError:true})
    }
    

   
}

const showAddNewProductPage = (req,res) =>{
    const data = {}
    res.render("addNewPage",{data})
}
const deleteProduct = async (req,res) =>{
    const id = req.params.id;
    const response = await axios.delete(GET_PRODUCT_URL + `/${id}`)
    if(response.status ===200){
        res.redirect("/ui/");
    }
    else{
          // Show same page with error message
    }
}


const editProduct = async (req,res) =>{
    const id = req.params.id;
    const response = await axios.get(GET_PRODUCT_URL + `/${id}`)
    
    if(response.status ===200){
        const data = response.data; 
        res.render("addNewPage",{data})
    }
    else{
          // Show same page with error message
    }
}
const saveNewProduct = async (req,res) =>{
    const {name,price,activeColor,isAvailable,availableInColors} = req.body;
    const isAvailable1 = isAvailable==='on'?true:false;
    const response = await axios.post(POST_PRODUCT_URL,{
        name,
        price,
        activeColor,
        isAvailable:isAvailable1,
        availableInColors
    });

    if(response.status === 201){
        res.redirect("/ui/");
    }
    else{
        // Show same page with error message
    }

// Save DB 
//res.redirect("/ui/")

}
module.exports = {getProductPage,showAddNewProductPage,saveNewProduct,deleteProduct,editProduct}