const { StatusCodes } = require('http-status-codes')
const {ticketService} = require('../services')
const {SuccessResponse,ErrorResponse} = require('../utils/common')



async function createTicketController(req,res){
    try {
        const Ticket = await ticketService.createTicketService({
            content:req.body.content,
            subject:req.body.subject,
            recieverEmail:req.body.recieverEmail
        })
        SuccessResponse.data = Ticket
        return res.status(StatusCodes.CREATED).json(SuccessResponse)
    } catch (error) {
        console.log(error)
        ErrorResponse.error = error
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(ErrorResponse)
    }
}



module.exports = {
    createTicketController
}