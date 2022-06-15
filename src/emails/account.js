const nodemailer = require('nodemailer')
 
function transporter() {
    return nodemailer.createTransport({
        service: process.env.NODEMAILER_SERVICE,
        //service:"Gmail",
        auth: {
             user: process.env.NODEMAILER_USER , 
            //user:"kibethosea6@gmail.com" ,
             pass: process.env.NODEMAILER_PASS
            //pass:"pwjmixozlheryhoe" 
        }
    })
}

transporter(process.env.NODEMAILER_TRANSPORTER_FUNCTION)
 
function sendWelcomeEmail(email, name) {
    const transporterObject = transporter()
    transporterObject.sendMail({
        from: 'Task Manager API <kibethosea6@gmail.com>',
        to: email,
        subject: 'Thanks for joining!',
        text: `Welcome to our service, ${name}!`,
        html: `<b>Welcome to our service, ${name}!</b>`
    })
}
 
function sendDeleteEmail(email, name) {
    const transporterObject = transporter()
    transporterObject.sendMail({
        from: 'Task Manager API <kibethosea6@gmail.com>',
        to: email,
        subject: 'We\'re sorry to see you leave',
        text: `We hope to see you back again someday, ${name}!`,
        html: `<b>We hope to see you back again someday, ${name}!</b>`
    })
}
 
module.exports = {
    sendWelcomeEmail,
    sendDeleteEmail
}
