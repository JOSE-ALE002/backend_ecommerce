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
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = require("../db/connection");
class Categoria extends sequelize_1.Model {
}
;
Categoria.init({
    id_categoria: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_categoria: {
        type: sequelize_1.DataTypes.STRING(100),
        allowNull: true
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: true
    }
}, {
    sequelize: connection_1.sequelize,
    modelName: "categoria",
    timestamps: true
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Categoria.sync();
    }
    catch (error) {
        console.log("Error en modelo Categoria");
        console.log(error);
    }
}))();
exports.default = Categoria;
