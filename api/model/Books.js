const db = require("../config")

class Books{
fetchBooks(req, res){
    const query = `
    SELECT bookID , bookTitle ,
    category, bookUrl
    FROM Books;
    `
    db.query(query,
       (err, results) =>{
        if (err) throw err
    res.json({
        status: res.statusCode,
        results,
    })
    })
}
 fetchBook(req,res){
    const query = `
    SELECT bookID , bookTitle ,
    category, bookUrl
    FROM Books
    WHERE bookID = ${req.params.id};
    `
    const id = req.params.id
    db.query(query, [id],
        (err, result)=>{
            if (err) throw err
            res.json({
              status:  res.statusCode,
              result
             })
        })
 }
 resgisterBook(req, res) {
    const data = req.body;
    const query = `
        INSERT INTO Books
        SET ?;
        `
    db.query(query, [data], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "New book has been registered",
      });
    })
}
updateBooks(req,res){
    const query = `
    UPDATE Books
    SET ?
    WHERE bookID = ?
    `
    const data = req.body
    const id = req.params.id
    db.query(query, [data,id],
        (err)=>{
            if (err) throw err
            res.json({
              status:  res.statusCode,
              msg: "User sucessfully updated"
             })
        })
 }
 deleteBooks(req,res){
    const query = `
    DELETE FROM Books
    WHERE bookID = ?;
    `
    const id = req.params.id
    db.query(query, [id],
        (err, )=>{
            if (err) throw err
            res.json({
              status:  res.statusCode,
              msg: 'The user was deleted'
             })
        })
 }
}
module.exports = Books