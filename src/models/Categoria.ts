import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/connection";

class Categoria extends Model {};

Categoria.init({
    id_categoria: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true   
    },
    nombre_categoria: {
        type: DataTypes.STRING(100),
        allowNull: true        
    },
    estado: {
        type: DataTypes.BOOLEAN,
        allowNull: true        
    }
}, {
    sequelize,
    modelName: "categoria",
    timestamps: true
});

(async() => {
    try {
        await Categoria.sync();
    } catch (error) {
        console.log("Error en modelo Categoria");
        console.log(error);
}})();

export default Categoria;