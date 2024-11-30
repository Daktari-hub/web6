const { connection } = require("../database");
const jwt = require(`jsonwebtoken`);
const bcrypt = require(`bcryptjs`);
const mysql = require('mysql2')

exports.register = (req, res) =>{
    console.log(req.body);

    // this way to grab the request from the html form
    // const fname = req.body.fname;
    // const lname = req.body.lname;
    // const email = req.body.email;
    // const password = req.body.password;
    // const confirmpassword = req.body.confirmpassword;
// or this way as an object ;
    const {fname, lname, email, password, confirmpassword} = req.body;
    connection.query(`Select email from patients where email = ?`, [email], async (err, result)=>{
        if(err){
            console.log(err);
        }if(result.length > 0){
           return res.render("registerpatients", {
                message: 'This email is already in use'
            })
        }else if(password !== confirmpassword){
           return res.render("registerpatients", {
                message: 'Password do not Match'
            });
        }

        let hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword);
        connection.query(`insert into patients set ?`, {firstname: fname, lastname: lname, email: email, password_hash: hashedPassword}, (err, result)=>{
            if(err){
                console.log(err);
                
            }else{
                console.log(result);
                
                return res.render("registerpatients", {
                    message: `User Registered`
                })
            }
        })

    });


    // res.send(`Form submitted`)
}