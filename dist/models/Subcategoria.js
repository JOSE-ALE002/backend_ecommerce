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
const Categoria_1 = __importDefault(require("./Categoria"));
class Subcategoria extends sequelize_1.Model {
}
Subcategoria.init({
    id_subcategoria: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_categoria: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        validate: {
            isInt: {
                msg: "Debe ingresar un numero entero"
            }
        }
    },
    nombre_subcategoria: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: true
    }
}, {
    sequelize: connection_1.sequelize,
    modelName: "subcategorias",
    timestamps: true
});
Subcategoria.belongsTo(Categoria_1.default, {
    foreignKey: "id_categoria",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Subcategoria.sync();
    }
    catch (error) {
        console.log("Error en modelo Subcategoria");
        console.log(error);
    }
}))();
exports.default = Subcategoria;
