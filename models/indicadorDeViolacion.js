const Sequelize = require('sequelize');

const Institucion = sequelize.define('TBL_INDICADORES_DE_VIOLACION',{

    ID_INDICADOR_VIOLATORIO: {type: Sequelize.INTEGER, autoincrement: true, allowNull: false, primaryKey: true },
    ID_SUB_FUNDAMENTAL: {type: Sequelize.INTEGER, allowNull: false},
    ID_POBLACION_VULNERABLE: {type:Sequelize.INTEGER, allowNull: false  },
    MODALIDAD_VIOLATORIA: {type:Sequelize.STRING, allowNull: false  },
    DESCRIPCION_MODALIDAD: {type:Sequelize.STRING, allowNull: false  },
    FUNDAMENTO_JURIDICO: {type:Sequelize.STRING, allowNull: false  },
    ESTADO: {type: Sequelize.INTEGER, allowNull: false }
});

module.exports = Institucion;