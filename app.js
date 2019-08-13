const express = require('express')
//const { Municipio } = require('./sequelize')

/*const { Departamento } = require('./sequelize')
const { VistaDatos } = require('./sequelize')*/
//const Op = Sequelize.Op;

const app = express();

app.set('appName','Si Quejas');
app.set('port', 4000);

app.use(express.json());

//---------- departamentos -----------------------

app.get('/api/datos', (req, res)=>{
  VistaDatos.findAll().then(datos =>res.json(datos))
  console.log('Encontrando Datos');
})

//----------departamentos -----------------------

app.get('/api/depto', (req, res)=>{
    
  Departamento.findAll().then(departamentos =>res.json(departamentos))
  console.log('Encontrando Deptos');
})




app.listen(app.get('port'), ()=>{
    console.log(app.get('appName'));
    console.log('El puerto server es: ', app.get('port'));
})