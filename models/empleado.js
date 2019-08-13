const Sequelize = require('sequelize');

const Empleado = sequelize.define('TBL_EMPLEADOS',{

    ID_EMPLEADO: {type: Sequelize.INTEGER, autoincrement: true, allowNull: false, primaryKey: true },
    ID_CARGO: {type: Sequelize.INTEGER, allowNull: false},
    ID_DELEGACION: {type:Sequelize.INTEGER, allowNull: false  },
    PRIMER_NOMBRE: {type:Sequelize.STRING, allowNull: false  },
    SEGUNDO_NOMBRE: {type:Sequelize.STRING, allowNull: false  },
    PRIMER_APELLIDO: {type:Sequelize.STRING, allowNull: false  },
    SEGUNDO_APELLIDO:  {type:Sequelize.STRING, allowNull: false  },
    TELEFONO:  {type:Sequelize.STRING, allowNull: false  },
    CORREO: {type:Sequelize.STRING, allowNull: false  },
    ESTADO: {type: Sequelize.INTEGER, allowNull: false }
});

module.exports = Empleado;