//Users 
//import db connection mmiddleware is the request and res from the server verify the state of the user is a function 

const db = require("../config")
//import the has method in the function to encrypt a password //salt how maany characters 10 be specific//has async ,hashsync we need a key to encrypt a pw a key enc a pw so it can jump and choose random 10 default character salt value  //hash allows to encrypt a pw compare checks a compare function 
const {hash, compare, hashSync} = require('bcrypt')
const {createToken} = require('../middleware/Authenticate')

class Users{
fetchUsers(req, res){
    const query = 
    `
    SELECT userID , firstName ,
    lastName, gender, userDOB ,
    emailADD, profileLUrl
    FROM Users;

    `
    db.query(query,
       (err, results) =>{
        if (err) throw err 
    res.json({
        status: res.statusCode,
        results
    })  } )
}
    //single user
 fetchUser(req,res){
    const query = 
    `
    SELECT userID , firstName ,
    lastName, gender, userDOB ,
    emailADD, profileLUrl
    FROM Users
    WHERE userID = ${req.params.id};

    `
    db.query(query,
        (err, result)=>{
            if (err) throw err 
            res.json({
              status:  res.statusCode,
              result
             })
        })
 }
 
 login(req ,res){
    {
        const {emailAdd, userPass} = req.body
        // query
        const query = `
        SELECT firstName, lastName,
        gender, userDOB, emailAdd, userPass,
        profileLUrl
        FROM Users
        WHERE emailAdd = '${emailAdd}';
        `
        db.query(query, [emailAdd] ,async (err, result)=>{
            if(err) throw err
            if(!result?.length){
                res.json({
                    status: res.statusCode,
                    msg: "You provided a wrong email."
                })
            }else {
                await compare(userPass,
                    result[0].userPass,
                    (cErr, cResult)=>{
                        if(cErr) throw cErr
                        // Create a token
                        const token =
                        createToken({
                            emailAdd,
                            userPass
                        })
                        // Save a token
                        res.cookie("LegitUser",
                        token, {
                            maxAge: 3600000,
                            httpOnly: true
                        })
                        if(cResult) {
                            res.json({
                                msg: "Logged in",
                                token,
                                result: result[0]
                            })
                        }else {
                            res.json({
                                status: res.statusCode,
                                msg:
                                "Invalid password or you have not registered"
                            })
                        }
                    })
            }
        })
    }


 }
    async register(req ,res){

 // Data coming from the body is being saved

    const data = req.body

 //Encrypt pw

    data.userPass = await hash(data.userPass, 15)

   //Payload data coming from the user
   //async allow us to run multiple at the same time multi tasking  
   //await while you buys with one task the second task can carry on 

    const user = {
    emailAdd : data.emailAdd,
    userPass : data.userPass
   }

   //Query SET Values(?,?,?)
   //first arg was query variable (query you say insert etc(data))
   //7 values to insert VALUES(?, ? ,? ,? ,? ,? ,? ,?)
   //set a value for each one column 

   const query = `
   INSERT INTO Users 
   SET ? `;
   db.query(query,[data],(err)=>{
    if(err) throw err

    //Create cookie 
    //httpOnly wants it to be accessed by the browser make it secure & encrypted

    let token = createToken(user)
    res.cookie("LegitUser", token,
    {
        maxAge: 3600000,
        httpOnly : true
    })
    res.json({
        status: res.statusCode,
        msg:"You are now registered."
    })

   })

 }

 updateUser(req ,res){
    const data = req.body 
    if(data.userPass){
        data.userPass =
        hashSync(data.userPass, 15)
    }
    const query = `
    UPDATE User
    SET?
    WHERE userID = ? `

    db.query(query,
        [data, req.params.id],
        (err)=> {
            
        })
    
    

 }
login(req, res) {
        const {emailAdd, userPass} = req.body
        // query
        const query = `
        SELECT firstName, lastName,
        gender, userDOB, emailAdd, userPass,
        profileLUrl
        FROM Users
        WHERE emailAdd = ?;
        `
        db.query(query,[emailAdd] , async (err, result)=>{
            if(err) throw err
            if(!result?.length){
                res.json({
                    status: res.statusCode,
                    msg: "You provided a wrong email."
                })
            }else {
                await compare(userPass,
                    result[0].userPass,
                    (cErr, cResult)=>{
                        if(cErr) throw cErr
                        // Create a token
                        const token =
                        createToken({
                            emailAdd,
                            userPass
                        })
                        // Save a token
                        res.cookie("LegitUser",
                        token, {
                            maxAge: 3600000,
                            httpOnly: true
                        })
                        if(cResult) {
                            res.json({
                                msg: "Logged in",
                                token,
                                result: result[0]
                            })
                        }else {
                            res.json({
                                status: res.statusCode,
                                msg:
                                "Invalid password or you have not registered"
                            })
                        }
                    })
            }
        })
    }


}



module.exports = Users

//LegitUser is the cookie name
// db.query
//passing a object 
//not the same name data:result 
//create a key of results and the results has value 
//questnm asking a q and waiting for a response 
//miideleware allows to add more features to api eg authenticate user file create two functions 
//save pw on db 
//creating a token and to verify token  sav encrypted pw to the db and save the token on cookies or local storage or session to use on the frontend access 