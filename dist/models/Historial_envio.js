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
const Envio_1 = __importDefault(require("./Envio"));
class Historial_envio extends sequelize_1.Model {
}
Historial_envio.init({
    id_envio: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    estado_envio: {
        type: sequelize_1.DataTypes.STRING(75),
        allowNull: true
    },
}, {
    sequelize: connection_1.sequelize,
    modelName: "historial_envio",
    createdAt: true
});
Historial_envio.belongsTo(Envio_1.default, {
    foreignKey: "id_envio",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Historial_envio.sync();
    }
    catch (error) {
        console.log("Error en modelo Historial_envio");
        console.log(error);
    }
}))();
exports.default = Historial_envio;
