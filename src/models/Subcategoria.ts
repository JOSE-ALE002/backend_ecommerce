import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/connection";
import Categoria from "./Categoria";

class Subcategoria extends Model {}

Subcategoria.init({
    id_subcategoria: {
        type: DataTypes.INTEGER,    
        primaryKey: true,
        autoIncrement: true,     
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
    nombre_subcategoria: {
        type: DataTypes.STRING(50),
        allowNull: true
    }
}, {
    sequelize,
    modelName: "subcategorias",
    timestamps: true
});


Subcategoria.belongsTo(Categoria, {
    foreignKey: "id_categoria",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

(async() => {
    try {
        await Subcategoria.sync();
    } catch (error) {
        console.log("Error en modelo Subcategoria");
        console.log(error);
}})();


export default Subcategoria;