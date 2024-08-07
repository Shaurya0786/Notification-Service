const nodemailer = require("nodemailer");
const serverConfig = require('./server-config')
const transporter = nodemailer.createTransport({
    service:'Gmail',
    auth:{
        user:serverConfig.Email,
        pass:serverConfig.Emailpass
    }
})


module.exports = transporter