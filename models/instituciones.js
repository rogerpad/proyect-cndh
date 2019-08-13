const Sequelize = require('sequelize');

const Institucion = sequelize.define('TBL_INSTITUCIONES',{

    ID_INSTITUCION: {type: Sequelize.INTEGER, allowNull: false },
    ID_TIPO_INSTITUCION: {type: Sequelize.INTEGER, allowNull: false},
    NOMBRE_INSTITUCION: {type:Sequelize.STRING, allowNull: false  },
    ESTADO: {type: Sequelize.INTEGER, allowNull: false }
});

module.exports = Institucion;