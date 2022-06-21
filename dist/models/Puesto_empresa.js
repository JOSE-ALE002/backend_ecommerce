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
class Puesto_empresa extends sequelize_1.Model {
}
Puesto_empresa.init({
    id_puesto_empresa: {
        type: sequelize_1.DataTypes.SMALLINT,
        primaryKey: true,
        allowNull: true,
        unique: true
    },
    nombre_puesto_empresa: {
        type: sequelize_1.DataTypes.STRING(150),
        allowNull: true
    }
}, {
    sequelize: connection_1.sequelize,
    modelName: "puesto_empresa",
    timestamps: true,
    freezeTableName: true
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Puesto_empresa.sync();
    }
    catch (error) {
        console.log("Error en modelo Puesto_empresa");
        console.log(error);
    }
}))();
exports.default = Puesto_empresa;
