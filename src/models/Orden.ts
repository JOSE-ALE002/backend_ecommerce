import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/connection";
import Envio from "./Envio";
import Usuario from "./Usuario";

class Orden extends Model {}

Orden.init({
    id_orden: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
    impuestos: {
        type: DataTypes.DECIMAL,
        allowNull: true
    },
    estado_orden: {
        type: DataTypes.BOOLEAN,
        defaultValue: false                
    },   
    total: {
        type: DataTypes.DECIMAL,
        allowNull: true
    }
}, {
    sequelize,
    modelName: "ordenes",
    timestamps: true
});

Orden.belongsTo(Usuario, {
    foreignKey: "id_usuario",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

(async() => {
    try {
        await Orden.sync();
    } catch (error) {
        console.log("Error en modelo Orden");
        console.log(error);
}})();

export default Orden;