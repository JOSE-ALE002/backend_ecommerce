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
class Departamento extends sequelize_1.Model {
}
;
Departamento.init({
    codigo_departamento: {
        type: sequelize_1.DataTypes.STRING(5),
        primaryKey: true,
        unique: true
    },
    nombre_departamento: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: true,
        unique: true
    }
}, {
    sequelize: connection_1.sequelize,
    modelName: "departamento",
    timestamps: false
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Departamento.sync();
    }
    catch (error) {
        console.log("Error en Departamentos");
        console.log(error);
    }
}))();
exports.default = Departamento;
