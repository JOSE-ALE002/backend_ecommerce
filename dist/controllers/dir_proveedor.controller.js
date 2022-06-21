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
exports.deleteDirProveedor = exports.updateDirProveedor = exports.getDirProveedores = exports.saveDirProveedor = void 0;
const Detalle_proveedor_1 = __importDefault(require("../models/Detalle_proveedor"));
// SAVE ROLE FUNCTION
const saveDirProveedor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resp = yield Detalle_proveedor_1.default.create(req.body);
        return res.json({
            status: true,
            msj: "Direccion de proveedor guardado correctamente",
            resp
        });
    }
    catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar la direccion de proveedor",
            error
        });
    }
});
exports.saveDirProveedor = saveDirProveedor;
// GET ROLES FUNCTION
const getDirProveedores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Promise<Response<any, Record<string, any>>>
    try {
        const direcciones_p = yield Detalle_proveedor_1.default.findAll();
        return res.json({
            status: "Success",
            direcciones_p
        });
    }
    catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
});
exports.getDirProveedores = getDirProveedores;
// UPDATE ROLE FUNCTION
const updateDirProveedor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = yield Detalle_proveedor_1.default.update(data, {
            where: {
                id_detalle_proveedor: id
            }
        });
        if (resp[0] === 0) {
            return res.status(402).json({
                status: false,
                msj: "Direccion de proveedor no encontrada"
            });
        }
        return res.json({
            status: true,
            msj: "Direccion de proveedor actualizada",
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
exports.updateDirProveedor = updateDirProveedor;
// DELETE ROLE FUNCTION
const deleteDirProveedor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const dir = yield Detalle_proveedor_1.default.findOne({
            where: {
                id_detalle_proveedor: id
            }
        });
        if (dir === null) {
            return res.status(402).json({
                status: false,
                msj: "Direccion de proveedor no encontrado"
            });
        }
        yield dir.destroy();
        return res.json({
            status: true,
            msj: "Direccion de proveedor eliminada",
            dir
        });
    }
    catch (error) {
        return res.json({
            status: false,
            error
        });
    }
});
exports.deleteDirProveedor = deleteDirProveedor;
