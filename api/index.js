require('dotenv').config();
const { createPool } = require('mysql');
// Create connection variable
let connection = createPool({
    host: process.env.dbHost,
    user: process.env.dbUser,
    password: process.env.dbPwd,
    port: process.env.dbPort,
    database: process.env.dbName,
    multipleStatements: true,
    connectionLimit: 30
});
module.exports = connection;

class Person{
#firstName = " ";
constructor(firstName){
    this.#firstName = firstName    
}

walk(){
       console.log(`${this.#firstName} is walking`);
    }
       dance(){
           console.log(`${this.#firstName} is dancing`);
       }
   }
   
   const person1 = new Person("Rabia")
   const person2 = new Person("Summer")
 
   person1.walk()
   person2.dance()