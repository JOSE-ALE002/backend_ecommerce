import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/connection";
import Usuario from "./Usuario";

class Telefono extends Model {}

Telefono.init({
    id_telefono: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true    
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            isInt: {
                msg: "Debe ingresar un numero entero"
            }
        } 
    },
    numero_telefono: {
        type: DataTypes.STRING(10),
        allowNull: true,
        unique: true
    }   
}, {
    sequelize,
    modelName: "telefono",
    timestamps: true
});

Telefono.belongsTo(Usuario, {
    foreignKey: "id_usuario",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

(async() => {
    try {
        await Telefono.sync();
    } catch (error) {
        console.log("Error en modelo Telefono");
        console.log(error);
}})();


export default Telefono;