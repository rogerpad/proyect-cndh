const Sequelize = require('sequelize');

const DerechoSubFundamental  = sequelize.define('TBL_DERECHOS_SUB_FUNDAMENTALES',{

    ID_SUB_FUNDAMENTAL: {type: Sequelize.INTEGER, autoincrement: true, allowNull: false, primaryKey: true },
    ID_FUNDAMENTAL: {type: Sequelize.INTEGER, allowNull: false},
    DERECHO_SUB_FUNDAMENTAL: {type:Sequelize.STRING, allowNull: false  },
    ESTADO: {type: Sequelize.INTEGER, allowNull: false }
});

module.exports = DerechoSubFundamental;