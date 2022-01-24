const jwt = require("jsonwebtoken");

const validateTokenMiddleware = (req,res,next) =>{
    const authHeader = req.headers.authorization; 
    if (authHeader && authHeader.startsWith("Bearer ")){
        let token = authHeader.substring(7, authHeader.length);
        console.log(token)
        try {
            if(token){ 
                var decoded = jwt.verify(token,process.env.JWT_SECRET); 
                const username = decoded.username;
             
                // Go to DB with this user name and validate if record exist user record.
                // Check if user password is exprired or user is blocked or user did not pay his subscriptiion --> we will show warning on ui
                req.username = username;
                console.log("User Role is " + decoded.role)
                next();
            }else{
                res.status(401).send("Token Missing")
            }
      
          } catch(err) {
            res.status(401).send(err)
          }
          
    } else {
        res.status(401).send("Token Missing")
   }
   
}

module.exports  = validateTokenMiddleware