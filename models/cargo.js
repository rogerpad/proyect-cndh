const Sequelize = require('sequelize');

const Cargo = sequelize.define('TBL_CARGOS',{

    ID_CARGO: {type: Sequelize.INTEGER, autoincrement: true, allowNull: false, primaryKey: true },
    CARGO: {type:Sequelize.STRING, allowNull: false  },
    ESTADO: {type: Sequelize.INTEGER, allowNull: false }
});

module.exports = Cargo;