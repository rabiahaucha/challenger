//Import all models 
const Users = require('./Users')
const Orders = require('./Orders')
const Books = require('./Books')
const BookAuthors = require('./BookAuthor')

//Export all objects
module.exports = {
    users: new Users(),
    books: new Books(),
    bookauthors: new BookAuthors(),
    orders: new Orders(),
}