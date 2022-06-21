import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/connection";
import Tipo_tarjeta from "./Tipo_tarjeta";
import Usuario from "./Usuario";

class Detalle_tarjeta extends Model {}

Detalle_tarjeta.init({
    numero_tarjeta: {
        type: DataTypes.STRING(25),
        allowNull: true,
        primaryKey: true, 
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
    id_tipo_tarjeta: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            isInt: {
                msg: "Debe ingresar un numero entero"
            }
        } 
    },     
    fecha_vencimiento: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    numero_cvv: {
        type: DataTypes.SMALLINT,
        allowNull: true
    }
}, {
    sequelize,
    modelName: "detalle_tarjeta",
    timestamps: true,
    freezeTableName: true
});

Detalle_tarjeta.belongsTo(Usuario, {
    foreignKey: "id_usuario",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

Detalle_tarjeta.belongsTo(Tipo_tarjeta, {
    foreignKey: "id_tipo_tarjeta",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});


(async() => {
    try {
        await Detalle_tarjeta.sync();
    } catch (error) {
        console.log("Error en modelo Detalle_tarjeta");
        console.log(error);
}})();

export default Detalle_tarjeta;