module.exports = (sequelize, Sequelize)=>{
    return sequelize.define('VISTA_DATOS',{
        ///ID_VISTA: {type: Sequelize.INTEGER, primaryKey: true ,autoincrement: true},
        NOMBRE_DEL_PETICIONARIO: {type: Sequelize.STRING, primaryKey: true},
        NOMBRE_DEL_RECEPTOR: {type: Sequelize.STRING},
        NUM_EXPEDIENTE: {type: Sequelize.STRING},
        FECHA_RECEPCION: {type: Sequelize.DATE},
        NOMBRE_INSTITUCION: {type: Sequelize.STRING},
        //DESCRIPCION_DEL_HECHO: {type: Sequelize.BLOB}, //---error en tipo de dato
        POBLACION_VULNERABLE: {type: Sequelize.STRING}
    });
} 

/*
CONCAT(A.PRIMER_NOMBRE,' ',A.PRIMER_APELLIDO) AS NOMBRE_DEL_PETICIONARIO, C.NUM_EXPEDIENTE, CONCAT(D.PRIMER_NOMBRE,' ' ,D.PRIMER_APELLIDO) AS NOMBRE_DEL_RECEPTOR,
C.FECHA_RECEPCION, F.NOMBRE_INSTITUCION, E.DESCRIPCION_DEL_ECHO, H.POBLACION_VULNERABLE

*/