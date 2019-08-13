const Sequelize = require('sequelize')

/*
const Departamento = sequelize.define('TBL_DEPARTAMENTOS',{

    ID_DEPARTAMENTO: {type: Sequelize.INTEGER, autoincrement: true, allowNull: false, primaryKey: true },
    CODIGO_DEPARTAMENTO: {type: Sequelize.STRING, allowNull: false },
    DEPARTAMENTO: {type:Sequelize.STRING, allowNull: false  },
    ESTADO: {type: Sequelize.INTEGER, allowNull: false }
});

module.exports = Departamento;
*/


module.exports = (sequelize, Sequelize)=>{
    return sequelize.define('TBL_DEPARTAMENTOS',{
        ID_DEPARTAMENTO: {type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
        CODIGO_DEPARTAMENTO: {type: Sequelize.STRING, allowNull: false },
        DEPARTAMENTO: {type:Sequelize.STRING, allowNull: false  },
        ESTADO: {type: Sequelize.INTEGER, allowNull: false }
    });
} 