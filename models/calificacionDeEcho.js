const Sequelize = require('sequelize');
const sequelize = require('./sequelize');

const CalificacionDeHecho = sequelize.define('TBL_CALIFICACIONES_DE_HECHO',{
    
    ID_CALIFICACION: {type: Sequelize.INTEGER, autoincrement: true, allowNull: false, primaryKey: true },
    TIPO_RESPONSABLE: {type: Sequelize.INTEGER, allowNull: false },
    ID_INSTITUCION_RESPONSABLE: {type: Sequelize.INTEGER, allowNull: true},
    NOMBRE_INDIVIDUO_RESPONSABLE: {type: Sequelize.INTEGER, allowNull: true},
    NOMBRE_ADICIONAL_RESPONSABLE: {type: Sequelize.STRING, allowNull: true},
    LUGAR_DEL_HECHO: {type: Sequelize.STRING, allowNull: false},    //revisar NULL en base de datos
    FECHA_DEL_HECHO: {type: Sequelize.DATE, allowNull: true},
    TIENE_DENUNCIAS_PREVIAS: {type: Sequelize.STRING, allowNull: false},
    PREVIA_AUTORIDAD_RESPECTIVA: {type: Sequelize.STRING, allowNull: true},
    ID_INDICADOR_VIOLATORIO: {type: Sequelize.INTEGER, allowNull: false},
    DESCRIPCION_DEL_HECHO: {type: Sequelize.STRING,  allowNull: false},
    SOLICITUD_AL_CONADEH: {type: Sequelize.STRING, allowNull: false},
    ESTADO:{type: Sequelize.INTEGER, allowNull: false }   //estado de control por registro
});

module.exports = CalificacionDeHecho;