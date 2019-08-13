const Sequelize = require('sequelize');

const DerechoFundamental  = sequelize.define('TBL_DERECHOS_FUNDAMENTALES',{

    ID_FUNDAMENTAL: {type: Sequelize.INTEGER, autoincrement: true, allowNull: false, primaryKey: true },
    DERECHO_FUNDAMENTAL: {type:Sequelize.STRING, allowNull: false  },
    ESTADO: {type: Sequelize.INTEGER, allowNull: false }
});

module.exports = DerechoFundamental;