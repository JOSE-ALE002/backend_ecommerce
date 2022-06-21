import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/connection";
import Tipo_usuario from "./Tipo_usuario";


class Usuario extends Model {};

Usuario.init({
    id_usuario: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id_tipo_usuario: {
        type: DataTypes.SMALLINT,
        allowNull: true,
        validate: {
            isInt: {
                msg: "Debe ingresar un numero entero"
            }
        } 
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: true,
        unique: true,
        validate: {
            isEmail: {
                msg: "Formato de correo electronico invalido"         
            }
        }
    },
    pass: {
        type: DataTypes.STRING(300),
        allowNull: true        
    },
    nombres: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    apellidos: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    fecha_nacimiento: {
        type: DataTypes.DATEONLY,
        allowNull: true
    }
}, {
    sequelize,
    modelName: "usuario",
    timestamps: true
});

Usuario.belongsTo(Tipo_usuario, {
    foreignKey: "id_tipo_usuario",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});


(async () => {
    try {
        await Usuario.sync();
    } catch (error) {
        console.log("Error en usuarios");
        console.log(error);
    }
})();

export default Usuario;