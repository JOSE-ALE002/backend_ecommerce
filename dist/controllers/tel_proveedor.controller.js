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
exports.deleteTel_Proveedor = exports.updateTel_Proveedor = exports.getTel_Proveedores = exports.saveTel_Proveedor = void 0;
const Tel_proveedor_1 = __importDefault(require("../models/Tel_proveedor"));
// SAVE ROLE FUNCTION
const saveTel_Proveedor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resp = yield Tel_proveedor_1.default.create(req.body);
        return res.json({
            status: true,
            msj: "Tel_Proveedor guardado correctamente",
            resp
        });
    }
    catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar la Tel_Proveedor",
            error
        });
    }
});
exports.saveTel_Proveedor = saveTel_Proveedor;
// GET ROLES FUNCTION
const getTel_Proveedores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Promise<Response<any, Record<string, any>>>
    try {
        const telefonos_p = yield Tel_proveedor_1.default.findAll();
        return res.json({
            status: "Success",
            telefonos_p
        });
    }
    catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
});
exports.getTel_Proveedores = getTel_Proveedores;
// UPDATE ROLE FUNCTION
const updateTel_Proveedor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = yield Tel_proveedor_1.default.update(data, {
            where: {
                id_telefono_proveedor: id
            }
        });
        if (resp[0] === 0) {
            return res.status(402).json({
                status: false,
                msj: "Tel_Proveedor no encontrado"
            });
        }
        return res.json({
            status: true,
            msj: "Tel_Proveedor actualizado",
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
exports.updateTel_Proveedor = updateTel_Proveedor;
// DELETE ROLE FUNCTION
const deleteTel_Proveedor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const tel_p = yield Tel_proveedor_1.default.findOne({
            where: {
                id_telefono_proveedor: id
            }
        });
        if (tel_p === null) {
            return res.status(402).json({
                status: false,
                msj: "Tel_Proveedor no encontrado"
            });
        }
        yield tel_p.destroy();
        return res.json({
            status: true,
            msj: "Tel_Proveedor eliminado",
            tel_p
        });
    }
    catch (error) {
        return res.json({
            status: false,
            error
        });
    }
});
exports.deleteTel_Proveedor = deleteTel_Proveedor;
