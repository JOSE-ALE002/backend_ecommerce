import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/connection";

class Proveedor extends Model {};

Proveedor.init({
    id_proveedor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true           
    },
    nombre_proveedor: {
        type: DataTypes.STRING(100),
        allowNull: true                
    },    
    email_proveedor: {
        type: DataTypes.STRING(50),
        allowNull: true
    }
}, {
    sequelize,
    modelName: "proveedores",
    timestamps: true
});

(async() => {
    try {
        await Proveedor.sync();
    } catch (error) {
        console.log("Error en modelo Proveedor");
        console.log(error);
}})();

export default Proveedor;