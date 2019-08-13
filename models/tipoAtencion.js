const Sequelize = require('sequelize');

const TipoAtencion = sequelize.define('TBL_TIPOS_ATENCION',{

    ID_TIPO_ATENCION: {type: Sequelize.INTEGER, autoincrement: true, allowNull: false, primaryKey: true },
    TIPO_ATENCION: {type: Sequelize.STRING, allowNull: false},
    ESTADO: {type: Sequelize.INTEGER, allowNull: false }
});

module.exports = TipoAtencion;