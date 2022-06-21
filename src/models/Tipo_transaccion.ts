import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/connection";

class Tipo_transaccion extends Model {};

Tipo_transaccion.init({
    id_tipo_transaccion: {
        type: DataTypes.SMALLINT,
        primaryKey: true,   
        unique: true          
    },
    nombre_transaccion: {
        type: DataTypes.STRING(50),
        allowNull: true 
    }
}, {
    sequelize,
    modelName: "tipo_transaccion",
    timestamps: false,
    freezeTableName: true
});

(async() => {
    try {
        await Tipo_transaccion.sync();
    } catch (error) {
        console.log("Error en modelo Tipo_transaccion");
        console.log(error);
}})();


export default Tipo_transaccion;