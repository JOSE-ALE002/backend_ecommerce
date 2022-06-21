import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/connection";
import Detalle_proveedor from "./Detalle_proveedor";

class Tel_proveedor extends Model {}

Tel_proveedor.init({
    id_telefono_proveedor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,   
    },
    id_detalle_proveedor: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            isInt: {
                msg: "Debe ingresar un numero entero"
            }
        } 
    },
    numero_telefono_proveedor: {
        type: DataTypes.STRING(10),
        allowNull: true,
        unique: true
    }  
}, {
    sequelize,
    modelName: "telefono_proveedor",
    timestamps: true,
    freezeTableName: true
});

Tel_proveedor.belongsTo(Detalle_proveedor, {
    foreignKey: "id_detalle_proveedor",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

(async() => {
    try {
        await Tel_proveedor.sync();
    } catch (error) {
        console.log("Error en modelo Tel_proveedor");
        console.log(error);
}})();


export default Tel_proveedor;