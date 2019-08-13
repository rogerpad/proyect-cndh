const Sequelize = require('sequelize');

const PoblacionVulnerable  = sequelize.define('TBL_POBLACIONES_VULNERABLES',{

    ID_POBLACION_VULNERABLE: {type: Sequelize.INTEGER, autoincrement: true, allowNull: false, primaryKey: true },
    POBLACION_VULNERABLE: {type: Sequelize.STRING, allowNull: false},
    ESTADO: {type: Sequelize.INTEGER, allowNull: false }
});

module.exports = PoblacionVulnerable;