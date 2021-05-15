const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo en su respectiva rutass')
})

app.get('*', (req, res) => {
    res.send('404|Not Found')
})

app.listen(8080)

//express framework para node js para servciios web o web servers.