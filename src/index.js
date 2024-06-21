const express = require('express')

const { ServerConfig , logger} = require('./config') 
const  apiRoutes  = require('./routes')
const transporter = require('./config/email-config')
// const nodemailer = require("nodemailer");
const app = express();


app.use('/api',apiRoutes)

app.listen(ServerConfig.Port, async ()=>{
    console.log(`Server Started Successfully at Port : ${ServerConfig.Port}`)
    // logger.info('Server Initiated')
})