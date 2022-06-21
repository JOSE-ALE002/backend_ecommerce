import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/connection";
import Departamento from "./Departamento";

class Municipio extends Model {}

Municipio.init({
    codigo_postal: {
        type: DataTypes.STRING(5),
        primaryKey: true,                
        unique: true,
        allowNull: true       
    },
    codigo_departamento: {
        type: DataTypes.STRING(5),
        allowNull: true
    },
    nombre_municipio: {
        type: DataTypes.STRING(100),
        allowNull: true
    },    
}, {
    sequelize,
    modelName: "municipio",
    timestamps: false
});

Municipio.belongsTo(Departamento, {
    foreignKey: "codigo_departamento",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

(async() => {
    try {
        await Municipio.sync();
    } catch (error) {
        console.log("Error en Municipio");
        console.log(error);
}})();

export default Municipio;