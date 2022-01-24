const userRouter = require("express").Router()
const { 
    getAllUsers, 
    createNewUser, 
    getSingleUser, 
    updateUser, 
    deleteUser 
} = require("../controllers/userController") 
const logMe = require("../middlewear/logging")

userRouter.route("/")
    .get(getAllUsers)
    .post(createNewUser)

userRouter.route("/:id")
    .get(logMe,getSingleUser)
    .patch(logMe,updateUser)
    .delete(logMe,deleteUser);

module.exports = userRouter