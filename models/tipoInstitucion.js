const Sequelize = require('sequelize');

const TipoInstitucion = sequelize.define('TBL_TIPOS_INSTITUCIONES',{
    ID_TIPO_INSTITUCION: {type: Sequelize.INTEGER, autoincremental: true, allowNull: false, primaryKey: true},
    TIPO_INSTITUCION: {type: Sequelize.STRING, allowNull: false},
    ESTADO: {type: Sequelize.INTEGER, allowNull: false}
});

module.exports = TipoInstitucion;