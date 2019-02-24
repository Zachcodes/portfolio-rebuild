const express = require('express');
const bodyParser = require('body-parser');
const Massive = require('massive');
const pc = require('./Controllers/projectController')
const nodemailer = require('nodemailer')
const mc = require('./Controllers/mailController')
const path = require('path');
const validEmailCheck = require('./Middleware/validEmailCheck')

require('dotenv').config({path: __dirname + '/../.env'});

const app = express()


app.use(bodyParser.json())


app.use(express.static(__dirname + '/../dist'))
//massive setup 
Massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
})

// const transporter = nodemailer.createTransport({
//     port: 587,
//     host: 'smtp.gmail.com',
//     auth: {
//         user: process.env.HOST_EMAIL,
//         pass: process.env.HOST_PASSWORD
//     }
// })
// app.set('transporter', transporter)

app.get('/api/projects', pc.getAllProjects)
app.get('/api/projects/:projectId', pc.getProject)
app.post('/api/submitContact', validEmailCheck, mc.sendMail)

app.get('/api/blog', async function (req, res) {
    let db = req.app.get('db')
    try { 
        let posts = await db.get_all_posts()
        res.send(posts)
    }
    catch(err) {
        res.send(err)
    }
})

app.get('/blog/:file', (req, res) => {
    let {file} = req.params
    res.sendFile(path.join(__dirname, `../blog/${file}.txt`))
})

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Listening on port ${process.env.SERVER_PORT}`)
})
