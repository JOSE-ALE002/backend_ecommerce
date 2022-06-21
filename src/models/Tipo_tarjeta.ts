import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/connection";

class Tipo_tarjeta extends Model {};

Tipo_tarjeta.init({
    id_tipo_tarjeta: {
        type: DataTypes.SMALLINT,
        primaryKey: true,   
        allowNull: true
    },
    nombre_tipo_tarjeta: {
        type: DataTypes.STRING(10),
        allowNull: true 
    }
}, {
    sequelize,
    modelName: "tipo_tarjeta",
    timestamps: false,
    freezeTableName: true
});

(async() => {
    try {
        await Tipo_tarjeta.sync();
    } catch (error) {
        console.log("Error en modelo Tipo_tarjeta");
        console.log(error);
}})();


export default Tipo_tarjeta;