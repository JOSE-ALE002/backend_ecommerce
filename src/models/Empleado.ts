import { Model, DataTypes } from "sequelize";
import { sequelize } from "../db/connection";
import Departamento_empresa from "./Departamento_empresa";
import Puesto_empresa from "./Puesto_empresa";
import Usuario from "./Usuario";

class Empleado extends Model {}

Empleado.init({
    id_empleado: {
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
    id_departamento_empresa: {
        type: DataTypes.SMALLINT,
        allowNull: true,
        validate: {
            isInt: {
                msg: "Debe ingresar un numero entero"
            }
        } 
    },
    id_puesto_empresa: {
        type: DataTypes.SMALLINT,
        allowNull: true,
        validate: {
            isInt: {
                msg: "Debe ingresar un numero entero"
            }
        } 
    },    
    numero_contrato: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: true
    }    
}, {
    sequelize,
    modelName: "empleado",
    timestamps: true
});

Empleado.belongsTo(Usuario, {
    foreignKey: "id_usuario",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});

Empleado.belongsTo(Departamento_empresa, {
    foreignKey: "id_departamento_empresa",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});


Empleado.belongsTo(Puesto_empresa, {
    foreignKey: "id_puesto_empresa",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});



(async() => {
    try {
        await Empleado.sync();
    } catch (error) {
        console.log("Error en modelo Empleado");
        console.log(error);
}})();

export default Empleado;