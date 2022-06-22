import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/connection";
import Categoria from "./Categoria";
import Proveedor from "./Proveedor";

class Categoria_Proveedor extends Model {};

Categoria_Proveedor.init({
    id_proveedor: {
        type: DataTypes.INTEGER,
        allowNull: true        
    },
    id_categoria: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            isInt: {
                msg: "Debe ingresar un numero entero"
            }
        }     
    },
}, {
    sequelize,
    modelName: "categoria_proveedor",
    timestamps: true,
    freezeTableName: true
});

Categoria_Proveedor.belongsTo(Proveedor, {
    foreignKey: "id_proveedor",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

Categoria_Proveedor.belongsTo(Categoria, {
    foreignKey: "id_categoria",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

(async() => {
    try {
        await Categoria_Proveedor.sync( );
    } catch (error) {
        console.log("Error en modelo Categoria_Proveedor");
        console.log(error);
}})();

export default Categoria_Proveedor;