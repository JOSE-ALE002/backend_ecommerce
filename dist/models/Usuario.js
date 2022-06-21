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
const Tipo_usuario_1 = __importDefault(require("./Tipo_usuario"));
class Usuario extends sequelize_1.Model {
}
;
Usuario.init({
    id_usuario: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    id_tipo_usuario: {
        type: sequelize_1.DataTypes.SMALLINT,
        allowNull: true,
        validate: {
            isInt: {
                msg: "Debe ingresar un numero entero"
            }
        }
    },
    email: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: true,
        unique: true,
        validate: {
            isEmail: {
                msg: "Formato de correo electronico invalido"
            }
        }
    },
    pass: {
        type: sequelize_1.DataTypes.STRING(300),
        allowNull: true
    },
    nombres: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: true
    },
    apellidos: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: true
    },
    fecha_nacimiento: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: true
    }
}, {
    sequelize: connection_1.sequelize,
    modelName: "usuario",
    timestamps: true
});
Usuario.belongsTo(Tipo_usuario_1.default, {
    foreignKey: "id_tipo_usuario",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Usuario.sync();
    }
    catch (error) {
        console.log("Error en usuarios");
        console.log(error);
    }
}))();
exports.default = Usuario;
