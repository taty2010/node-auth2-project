const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets')

module.exports = ( req, res, next ) => {

    const token = req.headers.authorization;
    console.log(token)
    if (token) {
      jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
        if (err){
          res.status(401).json({message: 'You shall not pass!!'})
        } else {
          req.decodedJwt = decodedToken;
          console.log(req.decodedJwt);
          next()
        }
      })
    } else {
    res.status(401).json({error: err.message});
  }
};