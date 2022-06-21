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
const Direccion_1 = __importDefault(require("./Direccion"));
const Orden_1 = __importDefault(require("./Orden"));
class Envio extends sequelize_1.Model {
}
Envio.init({
    id_envio: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: true,
    },
    id_orden: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        validate: {
            isInt: {
                msg: "Debe ingresar un numero entero"
            }
        }
    },
    estado_envio: {
        type: sequelize_1.DataTypes.STRING(75),
        allowNull: true
    },
    fecha_inicio: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: true
    },
    fecha_final: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: true
    },
    costo: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: true
    },
    id_direccion: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    }
}, {
    sequelize: connection_1.sequelize,
    modelName: "envios",
    timestamps: true
});
Envio.belongsTo(Direccion_1.default, {
    foreignKey: "id_direccion",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});
Envio.belongsTo(Orden_1.default, {
    foreignKey: "id_orden",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Envio.sync();
    }
    catch (error) {
        console.log("Error en modelo Envio");
        console.log(error);
    }
}))();
exports.default = Envio;
