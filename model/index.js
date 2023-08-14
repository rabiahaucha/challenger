//Import all models 
const Users = require('./Users')
const Orders = require('./Orders')
const Books = require('./Books')
const BookAuthors = require('./BookAuthor')
//Export all objects
module.exports = {
    users: new Users(),
    
}
const express = require('express')
const bodyParser = require('body-parser')
const routes = express.Router()
//Import all models objects model import the indexs and is exporting a object of users
const {users} = require('../model')

//User Router

routes.get('/users', (req, res)=>{
    users.fetchUsers(req, res)
})
hy

routes.get('/user/:id', (req, res)=>{
    users.fetchUser(req,res)
})

routes.post('./register', bodyparser.json(),(req, res)=>{
       users.register(req ,res)
})

routes.put('/user:id', bodyParser.json(),()=>{
    users.updateUser(req, res)
})

routes.patch('/user:id', bodyParser.json(),()=>{
    users.updateUser(req, res)
})

routes.delete('/user:id',(req ,res)=>{
    users.deleteUser(req, res)
})

module.exports = {
    express,
    routes
}
