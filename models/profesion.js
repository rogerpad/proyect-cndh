module.exports = (sequelize, Sequelize)=>{
    return sequelize.define('TBL_PROFESIONES',{
        ID_PROFESION: {type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
        ID_ESCOLARIDAD: {type: Sequelize.INTEGER, allowNull: false },
        PROFESION: {type:Sequelize.STRING, allowNull: false  },
        ESTADO: {type: Sequelize.INTEGER, allowNull: false }
    });
} 