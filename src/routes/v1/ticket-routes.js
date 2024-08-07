const {TicketController} = require('../../controllers')
const express = require('express')
const router = express.Router();

router.post('/',TicketController.createTicketController)

module.exports = router