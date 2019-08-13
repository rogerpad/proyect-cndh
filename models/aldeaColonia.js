module.exports = (sequelize, Sequelize)=>{
    return sequelize.define('TBL_ALDEAS_O_COLONIAS',{
        ID_ALDEA_O_COLONIA: {type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
        ID_MUNICIPIO: {type: Sequelize.INTEGER, allowNull: false },
        CODIGO_ALDEA_O_COLONIA: {type:Sequelize.STRING, allowNull: false  },
        ALDEA_O_COLONIA: {type:Sequelize.STRING, allowNull: false  },
        RURARL_O_URBANO: {type:Sequelize.STRING, allowNull: false  },
        ESTADO: {type: Sequelize.INTEGER, allowNull: false }
    });
} 