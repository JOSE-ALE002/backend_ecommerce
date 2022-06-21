"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = require("../db/connection");
const Departamento_empresa_1 = __importDefault(require("./Departamento_empresa"));
const Puesto_empresa_1 = __importDefault(require("./Puesto_empresa"));
const Usuario_1 = __importDefault(require("./Usuario"));
class Empleado extends sequelize_1.Model {
}
Empleado.init({
    id_empleado: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_usuario: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        validate: {
            isInt: {
                msg: "Debe ingresar un numero entero"
            }
        }
    },
    id_departamento_empresa: {
        type: sequelize_1.DataTypes.SMALLINT,
        allowNull: true,
        validate: {
            isInt: {
                msg: "Debe ingresar un numero entero"
            }
        }
    },
    id_puesto_empresa: {
        type: sequelize_1.DataTypes.SMALLINT,
        allowNull: true,
        validate: {
            isInt: {
                msg: "Debe ingresar un numero entero"
            }
        }
    },
    numero_contrato: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        unique: true
    }
}, {
    sequelize: connection_1.sequelize,
    modelName: "empleado",
    timestamps: true
});
Empleado.belongsTo(Usuario_1.default, {
    foreignKey: "id_usuario",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});
Empleado.belongsTo(Departamento_empresa_1.default, {
    foreignKey: "id_departamento_empresa",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});
Empleado.belongsTo(Puesto_empresa_1.default, {
    foreignKey: "id_puesto_empresa",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Empleado.sync();
    }
    catch (error) {
        console.log("Error en modelo Empleado");
        console.log(error);
    }
}))();
exports.default = Empleado;
