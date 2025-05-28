const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.post('/login', (req, res)=>{
    const {usuario, contrasena} = req.body;
    const sql = 'select * from usuario where usuario = ? and contrasena = ?';
    db.query(sql, [usuario, contrasena], (err, resultados)=>{
        if(err)throw err;
        if(resultados.length > 0){
            res.send('Inicio de Sesion Exitoso');
        }
        else{
            res.send('Credenciales Incorrectas');
        }
    });
});

app.listen(3000,()=>{
    console.log('Servidor Corriendo en http://localhost:3000');
});