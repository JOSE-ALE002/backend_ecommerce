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
const Tipo_tarjeta_1 = __importDefault(require("./Tipo_tarjeta"));
const Usuario_1 = __importDefault(require("./Usuario"));
class Detalle_tarjeta extends sequelize_1.Model {
}
Detalle_tarjeta.init({
    numero_tarjeta: {
        type: sequelize_1.DataTypes.STRING(25),
        allowNull: true,
        primaryKey: true,
    },
    id_usuario: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        validate: {
            isInt: {
                msg: "Debe ingresar un numero entero"
            }
        }
    },
    id_tipo_tarjeta: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        validate: {
            isInt: {
                msg: "Debe ingresar un numero entero"
            }
        }
    },
    fecha_vencimiento: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: true
    },
    numero_cvv: {
        type: sequelize_1.DataTypes.SMALLINT,
        allowNull: true
    }
}, {
    sequelize: connection_1.sequelize,
    modelName: "detalle_tarjeta",
    timestamps: true,
    freezeTableName: true
});
Detalle_tarjeta.belongsTo(Usuario_1.default, {
    foreignKey: "id_usuario",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});
Detalle_tarjeta.belongsTo(Tipo_tarjeta_1.default, {
    foreignKey: "id_tipo_tarjeta",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Detalle_tarjeta.sync();
    }
    catch (error) {
        console.log("Error en modelo Detalle_tarjeta");
        console.log(error);
    }
}))();
exports.default = Detalle_tarjeta;
