//To authenticate user 
//sign funtcion creates token secret key = key actual key lock encrypt unlock decrypt
//sign allows access payload user object email add and pw buffer coming from the file  secretkey for yourself
//implementation og a middleware seperate a mw func and normal is req ,res arguments you need on a middleware func NEXT tells us its a mw function NEXT on the mw it means carrying on what you were busy with    
const {sign, verify} = require('jsonwebtoken')
require("dotenv").config()
function createToken(user){
    return sign({
        emailAdd: user.emailAdd
    },process.env.SECRET_KEY,
        {
       expiresIn: '1h'     
        })
}
//export the fun

module.exports = {
    createToken
}

function verifyAToken(req ,res ,next){
const token = req.headers["authorization"]
}