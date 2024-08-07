const { StatusCodes } = require('http-status-codes');
const {TicketRepository} = require('../repositories');
const AppError = require('../utils/errors/app-error');
const transporter = require('../config/email-config');
const  ServerConfig  = require('../config/server-config');



const TicketInstance = new TicketRepository();

async function createTicketService(data){
    try {
        const ticket = await TicketInstance.create(data);
        return ticket
    } catch (error) {
        throw new AppError('Something Wrong While Creating ticket',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

async function sendMail(subject,text,reciverEmail){
    try {
        const response =  transporter.sendMail({
            from: ServerConfig.Email, // sender address
            to: reciverEmail, // list of receivers
            subject: subject, // Subject line
            text: text, // plain text body
          })
          return response
    } catch (error) {
        console.log(error)
        throw new AppError('Something Wrong While Sending Email',StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

module.exports = {
    createTicketService,
    sendMail
}