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
const Departamento_1 = __importDefault(require("./Departamento"));
class Municipio extends sequelize_1.Model {
}
Municipio.init({
    codigo_postal: {
        type: sequelize_1.DataTypes.STRING(5),
        primaryKey: true,
        unique: true,
        allowNull: true
    },
    codigo_departamento: {
        type: sequelize_1.DataTypes.STRING(5),
        allowNull: true
    },
    nombre_municipio: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true
    },
}, {
    sequelize: connection_1.sequelize,
    modelName: "municipio",
    timestamps: false
});
Municipio.belongsTo(Departamento_1.default, {
    foreignKey: "codigo_departamento",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Municipio.sync();
    }
    catch (error) {
        console.log("Error en Municipio");
        console.log(error);
    }
}))();
exports.default = Municipio;
