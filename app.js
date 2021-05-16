const express = require('express')
const app = express()

//servir contenido estatico

app.use(express.static('public'))



app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo en su respectiva rutass')
})

app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html')
})

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html')
})


app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(8080)

//express framework para node js para servciios web o web servers.