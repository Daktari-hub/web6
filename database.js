const mysql = require(`mysql2`)
const dotenv = require(`dotenv`)

dotenv.config({path: "./.env"})

const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE_DB
})

connection.connect((err, data) =>{
    if(err){
        console.log(`error connectioon`, err.stack);
        return;
        
    }else{
        console.log(`connected to database successfully`);
        
    }
})

module.exports = {connection}