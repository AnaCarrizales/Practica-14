const express = require('express'); //inyección de la dependencia
let app = express();
let PORT = process.env.PORT || 3000; //definición del puerto de escucha
app.use('/assets', express.static(__dirname + '/public'));//contenido estático

app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    res.send(`<!DOCTYPE html> <html lang="en"> <head><link rel="stylesheet" href="/assets/style.css">
    <title>Document</title> </head>
    <body> <h1>Hola mundo </h1>
    <p> Este es un párrafo y su contenido debe ser azul</p></body> </html>`)
});

app.get('/person/:id',(req,res)=>{
    res.render('person',{ID: req.params.id, Qstr: req.query.qrst, message: req.query.qrst, times: req.query.qrst});//Recibe objeto con dos llaves, ID y Qstr
})

app.listen(PORT);