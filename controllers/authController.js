const jwt = require('jsonwebtoken');

const login = (req,res)=>{
    const {username,password} = req.body;
    if((username==='abdul' && password ==='abdul') || (username==='janardhan' && password==='janardhan')){
        const token = jwt.sign({
            username,
            role:"user"
          }, process.env.JWT_SECRET);

        res.status(200).json({token})
    }
    else {
        res.status(401).send(`Invalid username or password for ${username}`)
    }

}

module.exports = {
    login
}