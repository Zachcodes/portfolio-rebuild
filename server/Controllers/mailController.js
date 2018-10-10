module.exports = {
    sendMail(req, res) {
        let transporter = req.app.get('transporter')
        let {name, email, message} = req.body 
        message = `Name: ${name} | Email: ${email}
        ${message}`
        let mailOptions = {
            from: email,
            to: process.env.HOST_EMAIL,
            subject: `Portfolio Site Automatic Email`,
            text: message
        }
        transporter.sendMail(mailOptions).then( info => {
            res.status(200).send('Sent email')
        })
        .catch(error => {
            res.status(500).send('Could not send mail')
        })
    }
}