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
const Municipio_1 = __importDefault(require("./Municipio"));
const Proveedor_1 = __importDefault(require("./Proveedor"));
class Detalle_proveedor extends sequelize_1.Model {
}
Detalle_proveedor.init({
    id_detalle_proveedor: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
    },
    id_proveedor: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        validate: {
            isInt: {
                msg: "Debe ingresar un numero entero"
            }
        }
    },
    codigo_postal: {
        type: sequelize_1.DataTypes.STRING(5),
        allowNull: true
    },
    linea_direccion: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true
    },
    referencia: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true
    }
}, {
    sequelize: connection_1.sequelize,
    modelName: "detalle_proveedor",
    timestamps: true,
    freezeTableName: true
});
Detalle_proveedor.belongsTo(Proveedor_1.default, {
    foreignKey: "id_proveedor",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});
Detalle_proveedor.belongsTo(Municipio_1.default, {
    foreignKey: "codigo_postal",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Detalle_proveedor.sync();
    }
    catch (error) {
        console.log("Error en modelo Detalle_proveedor");
        console.log(error);
    }
}))();
exports.default = Detalle_proveedor;