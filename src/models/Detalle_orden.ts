import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/connection";
import Producto from "./Producto";
import Orden from "./Orden";

class Detalle_orden extends Model {}

Detalle_orden.init({
    id_detalle_orden: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true   
    },
    id_orden: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            isInt: {
                msg: "Debe ingresar un numero entero"
            }
        } 
    },
    codigo_producto: {
        type: DataTypes.STRING(50),
        allowNull: true,        
        unique: true
    },
    cantidad_producto: {
        type: DataTypes.INTEGER,
        allowNull: true
    },    
    descuento: {
        type: DataTypes.DECIMAL,
        allowNull: true,
        defaultValue: 0
    },
    subtotal: {
        type: DataTypes.DECIMAL,
        allowNull: true
    }
}, {
    sequelize,
    modelName: "detalle_orden",
    timestamps: false,
    freezeTableName: true
});

Detalle_orden.belongsTo(Orden, {
    foreignKey: "id_orden",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

Detalle_orden.belongsTo(Producto, {
    foreignKey: "codigo_producto",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

(async() => {
    try {
        await Detalle_orden.sync();
    } catch (error) {
        console.log("Error en modelo Detalle_orden");
        console.log(error);
}})();

export default Detalle_orden;