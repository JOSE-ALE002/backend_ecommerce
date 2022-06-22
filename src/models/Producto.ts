import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/connection";
import Categoria from "./Categoria";
import Proveedor from "./Proveedor";

class Producto extends Model {}

Producto.init({
    codigo_producto: {
        type: DataTypes.STRING(50),
        primaryKey: true,
        allowNull: true,        
        unique: true
    },
    id_categoria: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    nombre_producto: {
        type: DataTypes.STRING(150),
        allowNull: true,        
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    id_proveedor: {
        type: DataTypes.INTEGER,
        allowNull: true,        
    }, 
    precio_unitario: {
        type: DataTypes.DECIMAL,
        allowNull: true,        
    },
    stock: {
        type: DataTypes.SMALLINT,
        allowNull: true,        
    },
    costo_unitario: {
        type: DataTypes.DECIMAL,
        allowNull: true,        
    },
    descuento: {
        type: DataTypes.DECIMAL,
        allowNull: true,       
        defaultValue: 0 
    },
    estado: {
        type: DataTypes.BOOLEAN,
        allowNull: true,        
    }
}, {
    sequelize,
    modelName: "productos",
    timestamps: true
});

Producto.belongsTo(Categoria, {
    foreignKey: "id_categoria",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});


Producto.belongsTo(Proveedor, {
    foreignKey: "id_proveedor",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

(async() => {
    try {
        await Producto.sync();
    } catch (error) {
        console.log("Error en modelo Producto");
        console.log(error);
}})();

export default Producto;