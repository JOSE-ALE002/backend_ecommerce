import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/connection";

class Tipo_usuario extends Model {};

Tipo_usuario.init({
    id_tipo_usuario: {
        type: DataTypes.SMALLINT,
        primaryKey: true,   
        unique: true,
        allowNull: true
    },
    nombre_tipo_usuario: {
        type: DataTypes.STRING(25),   
        allowNull: true     
    }
}, {
    sequelize,
    freezeTableName: true,
    modelName: "tipo_usuario",
    timestamps: false
});

(async() => {
    try {
        await Tipo_usuario.sync();
    } catch (error) {
        console.log("Error en modelo Tipo_usuario");
        console.log(error);
}})();


export default Tipo_usuario;