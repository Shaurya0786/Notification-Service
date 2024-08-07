const CrudRepository = require('./crud-repository')
const {Ticket} = require('../models/index');
const { AppError } = require('../utils');
const { StatusCodes } = require('http-status-codes');

class TicketRepository extends CrudRepository {
    constructor(){
        super(Ticket)
    }
}

module.exports = TicketRepository