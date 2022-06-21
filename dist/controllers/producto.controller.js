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
exports.deleteProducto = exports.updateProducto = exports.getProductos = exports.saveProducto = void 0;
const Producto_1 = __importDefault(require("../models/Producto"));
// SAVE ROLE FUNCTION
const saveProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resp = yield Producto_1.default.create(req.body);
        return res.json({
            status: true,
            msj: "Producto guardado correctamente",
            resp
        });
    }
    catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar el Producto",
            error
        });
    }
});
exports.saveProducto = saveProducto;
// GET ROLES FUNCTION
const getProductos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Promise<Response<any, Record<string, any>>>
    try {
        const productos = yield Producto_1.default.findAll();
        return res.json({
            status: "Success",
            productos
        });
    }
    catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
});
exports.getProductos = getProductos;
// UPDATE ROLE FUNCTION
const updateProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = yield Producto_1.default.update(data, {
            where: {
                id_producto: id
            }
        });
        if (resp[0] === 0) {
            return res.status(402).json({
                status: false,
                msj: "Producto no encontrado"
            });
        }
        return res.json({
            status: true,
            msj: "Producto actualizado",
            resp
        });
    }
    catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
});
exports.updateProducto = updateProducto;
// DELETE ROLE FUNCTION
const deleteProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const producto = yield Producto_1.default.findOne({
            where: {
                id_producto: id
            }
        });
        if (producto === null) {
            return res.status(402).json({
                status: false,
                msj: "Producto no encontrado"
            });
        }
        yield producto.destroy();
        return res.json({
            status: true,
            msj: "Producto eliminado",
            producto
        });
    }
    catch (error) {
        return res.json({
            status: false,
            error
        });
    }
});
exports.deleteProducto = deleteProducto;
