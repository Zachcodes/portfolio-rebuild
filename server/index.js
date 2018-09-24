const express = require('express');
const bodyParser = require('body-parser');
const Massive = require('massive');
const pc = require('./Controllers/projectController')

require('dotenv').config();

const app = express()

app.use(bodyParser.json())

//massive setup 
Massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
})

app.get('/api/projects', pc.getAllProjects)
app.get('/api/projects/:projectId', pc.getProject)


app.listen(process.env.SERVER_PORT, () => {
    console.log(`Listening on port ${process.env.SERVER_PORT}`)
})