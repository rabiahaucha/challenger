//Controller DATABASE CONFIGURATION 

require("dotenv").config()
const connection = createPool({
    host: process.env.dbHost,
    database: process.env.dbName,
    user: process.env.dbPwd,
    multipleStatments:true ,
    connectionLimit:30
})
module.exports = connection