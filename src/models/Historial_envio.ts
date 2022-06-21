import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/connection";
import Envio from "./Envio";

class Historial_envio extends Model {}

Historial_envio.init({
    id_envio: {
        type: DataTypes.INTEGER,          
        allowNull: true,        
    },
    estado_envio: {
        type: DataTypes.STRING(75),
        allowNull: true
    },    
}, {
    sequelize,
    modelName: "historial_envio",
    createdAt: true
});

Historial_envio.belongsTo(Envio, {
    foreignKey: "id_envio",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});


(async() => {
    try {
        await Historial_envio.sync();
    } catch (error) {
        console.log("Error en modelo Historial_envio");
        console.log(error);
}})();


export default Historial_envio;