const express = require(`express`)

const router = express.Router();

router.get('/', (req, res)=>{
    res.render("index")
})


router.get(`/patient`,(req, res) =>{
    res.render("patient")
   })
   
   router.get('/patient/register', (req, res)=>{
       res.render("registerpatients")
   })


   module.exports = router;