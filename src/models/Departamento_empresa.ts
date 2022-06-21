import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/connection";

class Departamento_empresa extends Model {};

Departamento_empresa.init({
    id_departamento_empresa: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
        allowNull: true,
        unique: true
    },
    nombre_departamento_empresa: {
        type: DataTypes.STRING(100),
        allowNull: true        
    }    
}, {
    sequelize,
    modelName: "departamento_empresa",
    timestamps: false,
    freezeTableName: true
});

(async() => {
    try {
        await Departamento_empresa.sync();
    } catch (error) {
        console.log("Error en modelo Dpto empresa");
        console.log(error);
}})();


export default Departamento_empresa;