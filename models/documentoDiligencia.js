const Sequelize = require('sequelize');

const DocumentoDiligencia  = sequelize.define('TBL_DOCUMENTOS',{

    ID_DOCUMENTO: {type: Sequelize.INTEGER, autoincrement: true, allowNull: false, primaryKey: true },
    ID_DILIGENCIA: {type: Sequelize.INTEGER, allowNull: false},
    NOMBRE_DOCUMENTO: {type: Sequelize.STRING, allowNull: false},
    ADJUNTO: {type: Sequelize.STRING, allowNull: false},  //almacenar url de documento que subiremos
    ESTADO: {type: Sequelize.INTEGER, allowNull: false }
});

module.exports = DocumentoDiligencia;