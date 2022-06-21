import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/connection";
import Orden from "./Orden";
import Tipo_transaccion from "./Tipo_transaccion";

class Transaccion extends Model {}

Transaccion.init({
    id_transaccion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,     
    },
    id_orden: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    id_tipo_transaccion: {
        type: DataTypes.INTEGER,
        allowNull: true
    },    
}, {
    sequelize,
    modelName: "transacciones",
    timestamps: true
});

Transaccion.belongsTo(Tipo_transaccion, {
    foreignKey: "id_tipo_transaccion",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

Transaccion.belongsTo(Orden, {
    foreignKey: "id_orden",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

(async() => {
    try {
        await Transaccion.sync();
    } catch (error) {
        console.log("Error en modelo Transaccion");
        console.log(error);
}})();


export default Transaccion;