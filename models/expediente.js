
const Sequelize = require('sequelize');

const Expediente = sequelize.define('TBL_EXPEDIENTES',{

    ID_EXPEDIENTE: {type: Sequelize.INTEGER, autoincremental: true, allowNull: false, primaryKey: true},
    NUM_EXPEDIENTE: {type: Sequelize.STRING, allowNull: false},
    ID_CALIFICACION: {type: Sequelize.INTEGER, allowNull: false},
    ID_MEDIO_UTILIZADO: {type: Sequelize.INTEGER, allowNull: false},
    ID_ATENCION: {type: Sequelize.INTEGER, allowNull: false},
    ID_DELEGACION_ORIGEN: {type: Sequelize.INTEGER, allowNull: false},
    ID_DELEGACION_DESTINO: {type: Sequelize.INTEGER, allowNull: true},
    ID_INVESTIGADOR: {type: Sequelize.INTEGER, allowNull: false},
    ID_RECEPTOR: {type: Sequelize.INTEGER, allowNull: false},
    ESTATUS_QUEJA: {type: Sequelize.STRING, allowNull: false},
    FECHA_RECEPCION: {type: Sequelize.DATE, allowNull: false},
    ES_REMISION: {type: Sequelize.STRING, allowNull: false},
    ESTADO: {type: Sequelize.INTEGER, allowNull: false}
});

module.exports = Expediente;