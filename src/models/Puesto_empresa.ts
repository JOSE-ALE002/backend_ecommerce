import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/connection";

class Puesto_empresa extends Model {}

Puesto_empresa.init({
    id_puesto_empresa: {
        type: DataTypes.SMALLINT,    
        primaryKey: true,
        allowNull: true,
        unique: true            
    },
    nombre_puesto_empresa: {
        type: DataTypes.STRING(150),
        allowNull: true
    }
}, {
    sequelize,
    modelName: "puesto_empresa",
    timestamps: true,
    freezeTableName: true
});

(async() => {
    try {
        await Puesto_empresa.sync();
    } catch (error) {
        console.log("Error en modelo Puesto_empresa");
        console.log(error);
}})();

export default Puesto_empresa;