import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/connection";
import Producto from "./Producto";
import Usuario from "./Usuario";

class Lista_deseo extends Model {}

Lista_deseo.init({
    id_usuario: {
        type: DataTypes.INTEGER,        
        allowNull: true,        
    },
    id_producto: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    sequelize,
    modelName: "lista_deseos",
    createdAt: true
});

Lista_deseo.belongsTo(Usuario, {
    foreignKey: "id_usuario",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

Lista_deseo.belongsTo(Producto, {
    foreignKey: "id_producto",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

(async() => {
    try {
        await Lista_deseo.sync();
    } catch (error) {
        console.log("Error en modelo Lista_deseos");
        console.log(error);
}})();


export default Lista_deseo;