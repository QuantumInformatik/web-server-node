const express = require('express')
const hbs = require('hbs');
require('dotenv').config()

const app = express()
const port = process.env.PORT;

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function(err) {});


//servir contenido estatico
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Juan Guillermo',
        titulo: 'Node con parametros'
    })
})


app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Juan Guillermo',
        titulo: 'Node con parametros'
    })
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Juan Guillermo',
        titulo: 'Node con parametros'
    })
})


app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/templates/404.html')
})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});

//express framework para node js para servciios web o web servers.