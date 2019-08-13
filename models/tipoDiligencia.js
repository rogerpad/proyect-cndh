const Sequelize = require('sequelize');

const TipoDiligencia = sequelize.define('TBL_TIPOS_DILIGENCIAS',{

    ID_TIPO_DILIGENCIA: {type: Sequelize.INTEGER, autoincrement: true, allowNull: false, primaryKey: true },
    TIPO_DILIGENCIA: {type: Sequelize.STRING, allowNull: false},
    ESTADO: {type: Sequelize.INTEGER, allowNull: false }
});

module.exports = TipoDiligencia;