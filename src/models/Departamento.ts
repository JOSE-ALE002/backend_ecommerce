import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/connection";

class Departamento extends Model {};

Departamento.init({
    codigo_departamento: {
        type: DataTypes.STRING(5),
        primaryKey: true,
        unique: true
    },
    nombre_departamento: {
        type: DataTypes.STRING(50),
        allowNull: true,
        unique: true        
    }    
}, {
    sequelize,
    modelName: "departamento",
    timestamps: false
});

(async() => {
    try {
        await Departamento.sync();
    } catch (error) {
        console.log("Error en Departamentos");
        console.log(error);
}})();

export default Departamento;