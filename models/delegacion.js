const Sequelize = require('sequelize');

const Delegacion = sequelize.define('TBL_DELEGACIONES',{

    ID_DELEGACION: {type: Sequelize.INTEGER, autoincrement: true, allowNull: false, primaryKey: true },
    ID_DEPARTAMENTO: {type: Sequelize.INTEGER, allowNull: false },
    ID_MUNICIPIO: {type: Sequelize.INTEGER, allowNull: false },
    DELEGACION: {type:Sequelize.STRING, allowNull: false  },
    TELEFONO: {type: Sequelize.STRING, allowNull: false },
    CORREO:  {type: Sequelize.STRING, allowNull: false },
    DIRECCION:  {type: Sequelize.STRING, allowNull: false },
    ESTADO: {type: Sequelize.INTEGER, allowNull: false }
});

module.exports = Delegacion;