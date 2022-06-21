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
const Proveedor_1 = __importDefault(require("./Proveedor"));
class Categoria_Proveedor extends sequelize_1.Model {
}
;
Categoria_Proveedor.init({
    id_proveedor: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
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
}, {
    sequelize: connection_1.sequelize,
    modelName: "categoria_proveedor",
    timestamps: true,
    freezeTableName: true
});
Categoria_Proveedor.belongsTo(Proveedor_1.default, {
    foreignKey: "id_proveedor",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});
Categoria_Proveedor.belongsTo(Categoria_1.default, {
    foreignKey: "id_categoria",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Categoria_Proveedor.sync({ alter: true });
    }
    catch (error) {
        console.log("Error en modelo Categoria_Proveedor");
        console.log(error);
    }
}))();
exports.default = Categoria_Proveedor;
