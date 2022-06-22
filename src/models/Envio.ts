import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/connection";
import Direccion from "./Direccion";
import Orden from "./Orden";

class Envio extends Model {}

Envio.init({
    id_envio: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,        
        allowNull: true,        
    },
    id_orden: {
        type: DataTypes.INTEGER,       
        allowNull: true, 
        validate: {
            isInt: {
                msg: "Debe ingresar un numero entero"
            }
        }        
    },
    estado_envio: {
        type: DataTypes.STRING(75),
        allowNull: true
    },
    fecha_inicio: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    fecha_final: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    costo: {
        type: DataTypes.DECIMAL,
        allowNull: true
    },
    id_direccion: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    sequelize,
    modelName: "envios",
    timestamps: true,
    updatedAt: "fecha_actualizacion_estado"
});

Envio.belongsTo(Direccion, {
    foreignKey: "id_direccion",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

Envio.belongsTo(Orden, {
    foreignKey: "id_orden",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});



(async() => {
    try {
        await Envio.sync();
    } catch (error) {
        console.log("Error en modelo Envio");
        console.log(error);
}})();

export default Envio;