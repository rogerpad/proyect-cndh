const Sequelize = require('sequelize')
const MunicipioModel = require('../models/municipio')
const DepartamentoModel = require('../models/departamento')
const   VistaDatosModel = require('../models/vistaDatos')

const sequelize = new Sequelize('DB_SIQUEJAS','QUEJAS','asd123',{
    host: 'localhost',
    dialect:'mssql',
    define:{ 
        timestamps: false 
    },
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
    
});

const Municipio = MunicipioModel(sequelize, Sequelize);
const Departamento = DepartamentoModel(sequelize, Sequelize);
const VistaDatos = VistaDatosModel(sequelize, Sequelize);

module.exports = { Municipio };
//module.exports = { Departamento };
module.exports = {VistaDatos};

sequelize.authenticate()
        .then(() =>{
            console.log('Connection has been estableshied successfully.');
        })
        .catch(err=> {
            console.error('Unable to conect to the database', err);
        });

