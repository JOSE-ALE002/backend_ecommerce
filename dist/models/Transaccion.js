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
const Orden_1 = __importDefault(require("./Orden"));
const Tipo_transaccion_1 = __importDefault(require("./Tipo_transaccion"));
class Transaccion extends sequelize_1.Model {
}
Transaccion.init({
    id_transaccion: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_orden: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    id_tipo_transaccion: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
}, {
    sequelize: connection_1.sequelize,
    modelName: "transacciones",
    timestamps: true
});
Transaccion.belongsTo(Tipo_transaccion_1.default, {
    foreignKey: "id_tipo_transaccion",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});
Transaccion.belongsTo(Orden_1.default, {
    foreignKey: "id_orden",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Transaccion.sync();
    }
    catch (error) {
        console.log("Error en modelo Transaccion");
        console.log(error);
    }
}))();
exports.default = Transaccion;
