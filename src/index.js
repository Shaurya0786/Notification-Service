const express = require('express')

const { ServerConfig , logger , Queue} = require('./config') 
const  apiRoutes  = require('./routes')
const transporter = require('./config/email-config')


const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api',apiRoutes)

app.listen(ServerConfig.Port, async ()=>{
    console.log(`Server Started Successfully at Port : ${ServerConfig.Port}`)
    await Queue.connectQueue()
    // logger.info('Server Initiated')
    
})