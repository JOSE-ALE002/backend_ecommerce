import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/connection";
import Proveedor from "./Proveedor";
import Producto from "./Producto";

class Pedido_proveedor extends Model {}

Pedido_proveedor.init({
    id_pedido: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,  
    },
    codigo_producto: {
        type: DataTypes.STRING(50),
        allowNull: true,
        unique: true 
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
    cantidad: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    recibido: {
        type: DataTypes.BOOLEAN,
        allowNull: true,     
        defaultValue: false   
    }    
}, {
    sequelize,
    modelName: "pedido_proveedor",
    timestamps: true,
    freezeTableName: true
});

Pedido_proveedor.belongsTo(Proveedor, {
    foreignKey: "id_proveedor",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

Pedido_proveedor.belongsTo(Producto, {
    foreignKey: "codigo_producto",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

(async() => {
    try {
        await Pedido_proveedor.sync();
    } catch (error) {
        console.log("Error en modelo Pedido_proveedor");
        console.log(error);
}})();

export default Pedido_proveedor;