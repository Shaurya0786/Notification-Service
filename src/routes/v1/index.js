const express = require('express')

const router = express.Router();
const {infocontroller} = require('../../controllers')
const notifyroutes = require('./ticket-routes')

router.get('/info',infocontroller.info)
router.use('/notify',notifyroutes)

module.exports = router;