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
    codigo_producto: {
        type: DataTypes.STRING(50),
        allowNull: true,
        unique: true
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
    foreignKey: "codigo_producto",
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