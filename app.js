const express = require("express");
const app = express();
const path = require('path');

//para decirle al server en que carpeta estan ubicados los elementos estaticos (fotos y style)
app.use(express.static('public'));

let PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Servidor arriba en el puerto ' + PORT);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/register.html"))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"))
})