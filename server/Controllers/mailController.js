module.exports = {
    sendMail(req, res) {
        let transporter = req.app.get('transporter')
        let {name, email, message} = req.body 
        message = `Name: ${name} | Email: ${email}
        ${message}`
        let mailOptions = {
            from: email,
            to: 'zaspringer@gmail.com',
            subject: `Portfolio Site Automatic Email`,
            text: message
        }
        transporter.sendMail(mailOptions).then((error, info) => {
            if(error.rejected.length) {
                res.status(500).send('Email was rejected')
            }
            else {
                res.status(200).send('Sent email')
            }
        })
    }
}