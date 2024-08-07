const amqplib = require('amqplib')
const serverConfig = require('./server-config')
const { sendMail } = require('../services/ticket-services')


let connection,channel

async function connectQueue(){
    try {
        connection = await amqplib.connect('amqp://localhost')
        channel = await connection.createChannel()  // we can create channels in rabbitmq as it help in connecting multiple connections on a single TCP connection
        await channel.assertQueue(serverConfig.ProcessQueue)
        channel.consume(serverConfig.ProcessQueue,async (data)=>{
            const content = JSON.parse(Buffer.from(data.content))
            await sendMail(...Object.values(content))
            channel.ack(data)
        })
    } catch (error) {
        console.log(error)
    }
}




module.exports={
    connectQueue    
}