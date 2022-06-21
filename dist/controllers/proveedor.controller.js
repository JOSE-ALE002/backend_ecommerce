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
exports.deleteProveedor = exports.updateProveedor = exports.getProveedores = exports.saveProveedor = void 0;
const Proveedor_1 = __importDefault(require("../models/Proveedor"));
// SAVE Proveedor FUNCTION
const saveProveedor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resp = yield Proveedor_1.default.create(req.body);
        return res.json({
            status: true,
            msj: "Proveedor guardado correctamente",
            resp
        });
    }
    catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar el proveedor",
            error
        });
    }
});
exports.saveProveedor = saveProveedor;
// GET ProveedorS FUNCTION
const getProveedores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Promise<Response<any, Record<string, any>>>
    try {
        const proveedores = yield Proveedor_1.default.findAll();
        return res.json({
            status: "Success",
            proveedores
        });
    }
    catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
});
exports.getProveedores = getProveedores;
// UPDATE Proveedor FUNCTION
const updateProveedor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = yield Proveedor_1.default.update(data, {
            where: {
                id_proveedor: id
            }
        });
        if (resp[0] === 0) {
            return res.status(402).json({
                status: false,
                msj: "Proveedor no encontrado"
            });
        }
        return res.json({
            status: true,
            msj: "Proveedor actualizado",
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
exports.updateProveedor = updateProveedor;
// DELETE Proveedor FUNCTION
const deleteProveedor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const proveedor = yield Proveedor_1.default.findOne({
            where: {
                id_proveedor: id
            }
        });
        if (proveedor === null) {
            return res.status(402).json({
                status: false,
                msj: "Proveedor no encontrado"
            });
        }
        yield proveedor.destroy();
        return res.json({
            status: true,
            msj: "Proveedor eliminado",
            proveedor
        });
    }
    catch (error) {
        return res.json({
            status: false,
            error
        });
    }
});
exports.deleteProveedor = deleteProveedor;
