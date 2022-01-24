const logMe = (req,res,next)=>{
    console.log(`User invoked ${req.path} ${req.method}`)
    next()
}

module.exports = logMe 