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
class Tipo_tarjeta extends sequelize_1.Model {
}
;
Tipo_tarjeta.init({
    id_tipo_tarjeta: {
        type: sequelize_1.DataTypes.SMALLINT,
        primaryKey: true,
        allowNull: true
    },
    nombre_tipo_tarjeta: {
        type: sequelize_1.DataTypes.STRING(10),
        allowNull: true
    }
}, {
    sequelize: connection_1.sequelize,
    modelName: "tipo_tarjeta",
    timestamps: false,
    freezeTableName: true
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Tipo_tarjeta.sync();
    }
    catch (error) {
        console.log("Error en modelo Tipo_tarjeta");
        console.log(error);
    }
}))();
exports.default = Tipo_tarjeta;
