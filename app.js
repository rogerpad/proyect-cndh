const express = require('express');

//const { Municipio }  = require('./util/database');    //TypeError: Cannot read property 'findAll' of undefined

const { Departamento } = require('./util/database');
//const { VistaDatos } = require('./util/database');    
//const Op = Sequelize.Op;

const app = express();

app.set('appName','Si Quejas');
app.set('port', 4000);

app.use(express.json());

//---------- vistaDatos -----------------------

app.get('/api/datos', (req, res)=>{
  VistaDatos.findAll().then(datos =>res.json(datos))
  console.log('Encontrando Datos');
});

//----------departamentos -----------------------

app.get('/api/depto', (req, res)=>{

  Departamento.findAll().then(departamentos =>res.json(departamentos))
  console.log('Encontrando Deptos');
});

//----------municipios -----------------
app.get('/api/muni',(req, res) =>{
    Municipio.findAll().then(municipios =>res.json(municipios))
    console.log('Ejecutado findAll');
});




app.listen(app.get('port'), ()=>{
    console.log(app.get('appName'));
    console.log('El puerto server es: ', app.get('port'));
});