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
const Detalle_proveedor_1 = __importDefault(require("./Detalle_proveedor"));
class Tel_proveedor extends sequelize_1.Model {
}
Tel_proveedor.init({
    id_telefono_proveedor: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_detalle_proveedor: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        validate: {
            isInt: {
                msg: "Debe ingresar un numero entero"
            }
        }
    },
    numero_telefono_proveedor: {
        type: sequelize_1.DataTypes.STRING(10),
        allowNull: true,
        unique: true
    }
}, {
    sequelize: connection_1.sequelize,
    modelName: "telefono_proveedor",
    timestamps: true,
    freezeTableName: true
});
Tel_proveedor.belongsTo(Detalle_proveedor_1.default, {
    foreignKey: "id_detalle_proveedor",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Tel_proveedor.sync();
    }
    catch (error) {
        console.log("Error en modelo Tel_proveedor");
        console.log(error);
    }
}))();
exports.default = Tel_proveedor;
