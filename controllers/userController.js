
const getAllUsers = (req,res) =>{
    res.send("getAllUsers")
 }
 
 const getSingleUser = (req,res) =>{
     res.send("getSingleUser")
 }
 
 const createNewUser = (req,res) =>{
     res.send("createNewUser")
 }
 
 const deleteUser = (req,res) =>{
     res.send("deleteUser")
 }
 const updateUser = (req,res) =>{
     res.send("updateUser")
 }
 
 module.exports = {
    getAllUsers,
    getSingleUser,
    createNewUser,
    deleteUser,
    updateUser
 }
 