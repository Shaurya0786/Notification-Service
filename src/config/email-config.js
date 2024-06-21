const nodemailer = require("nodemailer");
const {ServerConfig} = require('./index')
const transporter = nodemailer.createTransport({
    service:'Gmail',
    auth:{
        user:ServerConfig.Email,
        pass:ServerConfig.Emailpass
    }
})


module.exports = transporter