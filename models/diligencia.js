const Sequelize = require('sequelize');

const Diligencia = sequelize.define('TBL_DILIGENCIAS',{

    ID_DILIGENCIA: {type: Sequelize.INTEGER, autoincrement: true, allowNull: false, primaryKey: true },
    ID_EXPEDIENTE: {type: Sequelize.INTEGER, allowNull: false },
    ID_TIPO_DE_DILIGENCIA: {type: Sequelize.INTEGER, allowNull: false },
    FECHA_DILIGENCIA: {type: Sequelize.DATE, allowNull: false },
    DESCRIPCION_DILIGENCIA: {type: Sequelize.STRING, allowNull: false},
    ESTADO: {type: Sequelize.INTEGER, allowNull: false }
});

module.exports = Diligencia;