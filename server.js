const express = require('express');
const dotenv = require('dotenv')

//load env vars 
dotenv.config({path : './config/config.env'})

const app = express()

const port = process.env.PORT || 5000;


app.listen(port, ()=>{
    console.log(`App is running in ${process.env.NODE_ENV} on port ${port}`)
})