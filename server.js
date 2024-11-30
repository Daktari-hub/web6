const http = require(`http`);
const express = require(`express`);
const path = require(`path`)
const dotenv = require(`dotenv`)
const fs = require(`fs`)

dotenv.config({path: "./.env"})
const {connection} = require(`./database`);
const { route } = require("./routes/pages");


const app = express();
const port = 4000

const pubdir = path.join(__dirname, './public');
app.use(express.static(pubdir));

// parse urlencoded bodies (as sent from the html form)
app.use(express.urlencoded({extended: false}));

// Parse json bodies (as sent by api clients)
app.use(express.json());





app.set(`view engine`, 'hbs');


// app.get('/', (req, res)=>{
//     res.render("index")
// })

// Define route
app.use('/', require('./routes/pages'))
app.use('/auth', require('./routes/auth'))

// app.get(`/patient`,(req, res) =>{
//  res.render("patient")
// })

// app.get('/patient/register', (req, res)=>{
//     res.render("registerpatients")
// })

app.get(`/patient/register/doctors`, (req, res) =>{
const selectFromDoctor = `select first_name, specialization, phone, schedule from doctor;`
connection.query(selectFromDoctor, (err, result) =>{
    if(err){
        res.status(404).send(`No Available Doctor`, err)
    } else{
        res.status(200).json({Success_Available_doctors: result})
    }
})
})

app.get(`/patient/register/admin`, (req, res)=>{
    const selectFromAdmin = `select username from admin where role = "CEO";`
    connection.query(selectFromAdmin, (err, result)=>{
        if(err){
            res.status(400).send(`Error 404: CEO Not Available`)
        }else{
            res.status(200).json({CEO_NAME: result})
        }
    })
})
app.get(`/doctor`, (req,res)=>{
    res.status(200).render("doctor")
})
app.get(`/doctor/register`, (req, res)=>{
    res.status(200).render("registerdoc")
})
app.get(`/patient/view`, (req, res)=>{
    const viewpatient = `select * from patients;`
    connection.query(viewpatient, (err, result)=>{
        if (err){
            res.status(404).send(`<h3>Patient Data not Available Ask Admin</h3>`)
        }else{
            res.status(200).json({Patients_Data: result})
        }
    })
})

app.get(`/appointments/view`, (req,res)=>{
    const viewappointment = `select * from appointment;`
    connection.query(viewappointment, (err, result)=>{
        if (err){
            res.status(404).send(`Error 404: cannot fetch data`, err)
        }else{
            res.status(200).json({Appointment_details: result})
        }
    })
})
app.get(`/admin`, (req, res)=>{
    res.status(200).render("admin")
})
app.listen(port)