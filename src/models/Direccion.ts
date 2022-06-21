import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/connection";
import Municipio from "./Municipio";
import Usuario from "./Usuario";

class Direccion extends Model {}

Direccion.init({
    id_direccion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true,            
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
    codigo_postal: {
        type: DataTypes.STRING(5),
        allowNull: true
    },
    linea_direccion: {
        type: DataTypes.TEXT,
        allowNull: true
    },    
    numero_casa: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    referencia: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    sequelize,
    modelName: "direcciones",
    timestamps: true
});

Direccion.belongsTo(Usuario, {
    foreignKey: "id_usuario",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

Direccion.belongsTo(Municipio, {
    foreignKey: "codigo_postal",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});


(async() => {
    try {
        await Direccion.sync();
    } catch (error) {
        console.log("Error en modelo Direccion");
        console.log(error);
}})();

export default Direccion;