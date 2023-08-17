const db = require("../config")

class Booksauthor{
fetchBooksA(req, res){
    const query = `
    SELECT id , authorName ,
    authorSurname, bookID,
    FROM BookAuthor;
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
 fetchBookA(req,res){
    const query = `
    SELECT id , authorName ,
    authorSurname, bookID
    FROM BookAuthor;
    WHERE id = ${req.params.id};
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
 resgisterBookA(req, res) {
    const data = req.body;
    const query = `
        INSERT INTO BookAuthor
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
updateBooksA(req,res){
    const query = `
    UPDATE BookAuthor
    SET ?
    WHERE id = ?
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
 deleteBooksA(req,res){
    const query = `
    DELETE FROM BookAuthor
    WHERE id = ?;
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

module.exports = Booksauthor