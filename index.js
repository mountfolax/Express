
const express = require('express');
const app = express();
const port = 9000;
const fs = require ('fs')
const productRoute = require('./route/productRoute')
const home =fs.readFileSync('./pages/index.html' , 'utf-8')
// const about =fs.readFileSync('./pages/about.html' , "utf-8")
// const contact =fs.readFileSync('./pages/contact.html' , "utf-8" )
// const testimonials =fs.readFileSync('./pages/testimonials.html' , "utf-8" )


app.get("/" , (req , res) => {
    res.send (home)
})

// app.get('/about',(req , res)=>{
//     res.send (about)
// })

// app.get('/contact' , (req , res)=>{
//     res.send (contact)
// })

// app.get('/testimonials' , (req , res)=>{
//     res.send (testimonials)
// })

// Using product Route
app.use(productRoute)
// server will now handle json data
app.use(express.json())

app.listen(port , ()=>{
    console.log(`server started successfuly. click http://localhost:${port} to open website`);
})