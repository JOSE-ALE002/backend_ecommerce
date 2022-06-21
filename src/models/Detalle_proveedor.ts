import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/connection";
import Municipio from "./Municipio";
import Proveedor from "./Proveedor";

class Detalle_proveedor extends Model {}

Detalle_proveedor.init({
    id_detalle_proveedor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true            
    },
    id_proveedor: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            isInt: {
                msg: "Debe ingresar un numero entero"
            }
        } 
    },
    codigo_postal: {
        type: DataTypes.STRING(5),
        allowNull: true
    },
    linea_direccion: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    referencia: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    sequelize,
    modelName: "detalle_proveedor",
    timestamps: true,
    freezeTableName: true
});

Detalle_proveedor.belongsTo(Proveedor, {
    foreignKey: "id_proveedor",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

Detalle_proveedor.belongsTo(Municipio, {
    foreignKey: "codigo_postal",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});


(async() => {
    try {
        await Detalle_proveedor.sync();
    } catch (error) {
        console.log("Error en modelo Detalle_proveedor");
        console.log(error);
}})();

export default Detalle_proveedor;