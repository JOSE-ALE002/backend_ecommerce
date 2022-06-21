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
class Producto extends sequelize_1.Model {
}
Producto.init({
    id_producto: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true,
    },
    id_categoria: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    },
    nombre_producto: {
        type: sequelize_1.DataTypes.STRING(150),
        allowNull: true,
    },
    descripcion: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    id_proveedor: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    precio_unitario: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: true,
    },
    stock: {
        type: sequelize_1.DataTypes.SMALLINT,
        allowNull: true,
    },
    descuento: {
        type: sequelize_1.DataTypes.DECIMAL,
        allowNull: true,
        defaultValue: 0
    },
    estado: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: true,
    }
}, {
    sequelize: connection_1.sequelize,
    modelName: "productos",
    timestamps: true
});
Producto.belongsTo(Categoria_1.default, {
    foreignKey: "id_categoria",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});
Producto.belongsTo(Proveedor_1.default, {
    foreignKey: "id_proveedor",
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Producto.sync();
    }
    catch (error) {
        console.log("Error en modelo Producto");
        console.log(error);
    }
}))();
exports.default = Producto;
