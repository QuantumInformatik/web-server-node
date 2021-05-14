const http = require('http')

http.createServer((req, res) => {

        res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
        res.writeHead(200, { 'Content-Type': 'application/csv' });
        res.write('id, nombre\n');
        res.write('1, Juan\n');
        res.write('2, Pedro\n');
        res.write('3, Maria\n');


        res.end();

    })
    .listen(8080);

console.log('Escuchando en el puerto 8080')

//express framework para node js para servciios web o web servers.