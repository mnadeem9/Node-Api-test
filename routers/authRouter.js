const loginRouter = require("express").Router()
const { 
    login
} = require("../controllers/authController") 
 

loginRouter.route("/")
    .post(login) 

module.exports = loginRouter