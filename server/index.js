const express = require('express');
const bodyParser = require('body-parser');
const Massive = require('massive');
const pc = require('./Controllers/projectController')
const nodemailer = require('nodemailer')
const mc = require('./Controllers/mailController')

require('dotenv').config();

const app = express()

app.use(bodyParser.json())

//massive setup 
Massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
})

const transporter = nodemailer.createTransport({
    port: 587,
    host: 'smtp.gmail.com',
    auth: {
        user: process.env.HOST_EMAIL,
        pass: process.env.HOST_PASSWORD
    }
})
app.set('transporter', transporter)

app.get('/api/projects', pc.getAllProjects)
app.get('/api/projects/:projectId', pc.getProject)
app.post('/api/submitContact', mc.sendMail)

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Listening on port ${process.env.SERVER_PORT}`)
})