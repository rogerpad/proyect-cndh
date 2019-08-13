const Sequelize = require('sequelize');

const Colaboracion = sequelize.define('TBL_COLABORACIONES',{

    ID_COLABORACION: {type: Sequelize.INTEGER, autoincrement: true, allowNull: false, primaryKey: true },
    ID_EXPEDIENTE: {type: Sequelize.INTEGER, allowNull: false },
    ID_DELEGACION_SOLICITADA: {type: Sequelize.INTEGER, allowNull: false },
    DESCRIPCION_DE_COLABORACION: {type:Sequelize.STRING, allowNull: false  },
    ESTADO: {type: Sequelize.INTEGER, allowNull: false }
});

module.exports = Colaboracion;