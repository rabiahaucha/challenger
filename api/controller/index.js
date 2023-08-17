const express = require('express')
const bodyParser = require('body-parser')
const routes = express.Router()
const {verifyAToken} = require('../middleware/Authenticate')
//Import all models objects model import the indexs and is exporting a object of users
const {users, books, bookauthors} = require('../model')

//User Router
hiii
routes.get('/users', (req, res)=>{
    users.fetchUsers(req, res)
})

routes.get('/user/:id', (req, res)=>{
    users.fetchUser(req,res)
})

routes.post('/register', bodyParser.json(),(req, res)=>{
       users.register(req ,res)
})

routes.put('/user/:id', bodyParser.json(),(req, res)=>{
    users.updateUser(req, res)
})

routes.patch('/user/:id', bodyParser.json(),(req, res)=>{
    users.updateUser(req, res)
})

routes.delete('/user/:id',(req ,res)=>{
    users.deleteUser(req, res)
})

routes.post('/login',
bodyParser.json(), (req, res)=>{
    users.login(req, res)
})

// Books Router
routes.get('/books', (req, res)=>{
    books.fetchBooks(req, res)
})
routes.get('/book/:id', verifyAToken,(req, res)=>{
    books.fetchBook(req,res)
})
routes.post('/registerbook', bodyParser.json(),(req, res)=>{
    books.resgisterBook(req ,res)
})
routes.put('/book/:id', bodyParser.json(),(req, res)=>{
    books.updateBooks(req, res)
})
routes.patch('/book/:id', bodyParser.json(),(req, res)=>{
    books.updateBooks(req, res)
})
routes.delete('/book/:id',(req ,res)=>{
    books.deleteBooks(req, res)
})

// Books Author Router 
routes.get('/booksauth', (req, res)=>{
    bookauthors.fetchBooksA(req, res)
})
routes.get('/booksauth/:id', (req, res)=>{
    bookauthors.fetchBookA(req,res)
})
routes.post('/registerbooksauth', bodyParser.json(),(req, res)=>{
    bookauthors.resgisterBookA(req ,res)
})
routes.put('/booksauth/:id', bodyParser.json(),(req, res)=>{
    bookauthors.updateBooksA(req, res)
})
routes.patch('/booksauth/:id', bodyParser.json(),(req, res)=>{
    bookauthors.updateBooksA(req, res)
})
routes.delete('/booksauth/:id',(req ,res)=>{
    bookauthors.deleteBooksA(req, res)
})

module.exports = {
    express,
    routes,
   
}
