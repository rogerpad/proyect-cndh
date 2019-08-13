const Sequelize = require('sequelize');

const Usuario = sequelize.define('TBL_USUARIOS',{

    ID_USUARIO: {type: Sequelize.INTEGER, autoincrement: true, allowNull: false, primaryKey: true },
    ID_EMPLEADO: {type: Sequelize.INTEGER, allowNull: false },
    ID_CARGO: {type: Sequelize.INTEGER, allowNull: false },
    USUARIO: {type:Sequelize.STRING, allowNull: false  },
    PASSWORD: {type: Sequelize.STRING, allowNull: false },
    ESTADO: {type: Sequelize.INTEGER, allowNull: false }
});

module.exports = Usuario;