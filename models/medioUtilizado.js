const Sequelize = require('sequelize');

const Medio = sequelize.define('TBL_MEDIOS_UTILIZADOS',{

    ID_MEDIO: {type: Sequelize.INTEGER, autoincrement: true, allowNull: false, primaryKey: true },
    MEDIO: {type: Sequelize.STRING, allowNull: false},
    ESTADO: {type: Sequelize.INTEGER, allowNull: false }
});

module.exports = Medio;