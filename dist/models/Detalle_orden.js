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
const Producto_1 = __importDefault(require("./Producto"));
const Orden_1 = __importDefault(require("./Orden"));
class Detalle_orden extends sequelize_1.Model {
}
Detalle_orden.init({
    id_detalle_orden: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_orden: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        validate: {
            isInt: {
                msg: "Debe ingresar un numero entero"
            }
        }
    },
    id_producto: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        validate: {
            isInt: {
                msg: "Debe ingresar un numero entero"
            }
        }
    },
    cantidad_producto: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    descuento: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: true,
        defaultValue: 0
    },
    subtotal: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: true
    }
}, {
    sequelize: connection_1.sequelize,
    modelName: "detalle_orden",
    timestamps: false,
    freezeTableName: true
});
Detalle_orden.belongsTo(Orden_1.default, {
    foreignKey: "id_orden",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});
Detalle_orden.belongsTo(Producto_1.default, {
    foreignKey: "id_producto",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Detalle_orden.sync();
    }
    catch (error) {
        console.log("Error en modelo Detalle_orden");
        console.log(error);
    }
}))();
exports.default = Detalle_orden;
