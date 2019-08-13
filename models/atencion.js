const Sequelize = require('sequelize');

const Atencion = sequelize.define('TBL_ATENCIONES',{

    ID_ATENCION: {type: Sequelize.INTEGER, autoincrement: true, allowNull: false, primaryKey: true },
    ID_TIPO_ATENCION: {type: Sequelize.INTEGER, allowNull: false},
    ATENCION: {type: Sequelize.STRING, allowNull: false},
    ESTADO: {type: Sequelize.INTEGER, allowNull: false }
});

module.exports = Atencion;




                      