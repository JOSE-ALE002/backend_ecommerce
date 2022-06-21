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
exports.deletePuestoEmpresa = exports.updatePuestoEmpresa = exports.getPuestosEmpresa = exports.savePuestoEmpresa = void 0;
const Puesto_empresa_1 = __importDefault(require("../models/Puesto_empresa"));
// SAVE PuestoEmpresa FUNCTION
const savePuestoEmpresa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resp = yield Puesto_empresa_1.default.create(req.body);
        return res.json({
            status: true,
            msj: "PuestoEmpresa guardado correctamente",
            resp
        });
    }
    catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar el PuestoEmpresa",
            error
        });
    }
});
exports.savePuestoEmpresa = savePuestoEmpresa;
// GET PuestoEmpresaS FUNCTION
const getPuestosEmpresa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Promise<Response<any, Record<string, any>>>
    try {
        const puestos = yield Puesto_empresa_1.default.findAll();
        return res.json({
            status: "Success",
            puestos
        });
    }
    catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
});
exports.getPuestosEmpresa = getPuestosEmpresa;
// UPDATE PuestoEmpresa FUNCTION
const updatePuestoEmpresa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = yield Puesto_empresa_1.default.update(data, {
            where: {
                id_puesto_empresa: id
            }
        });
        if (resp[0] === 0) {
            return res.status(402).json({
                status: false,
                msj: "PuestoEmpresa no encontrado"
            });
        }
        return res.json({
            status: true,
            msj: "PuestoEmpresa actualizado",
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
exports.updatePuestoEmpresa = updatePuestoEmpresa;
// DELETE PuestoEmpresa FUNCTION
const deletePuestoEmpresa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const puesto = yield Puesto_empresa_1.default.findOne({
            where: {
                id_puesto_empresa: id
            }
        });
        if (puesto === null) {
            return res.status(402).json({
                status: false,
                msj: "PuestoEmpresa no encontrado"
            });
        }
        yield puesto.destroy();
        return res.json({
            status: true,
            msj: "Rol eliminado",
            puesto
        });
    }
    catch (error) {
        return res.json({
            status: false,
            error
        });
    }
});
exports.deletePuestoEmpresa = deletePuestoEmpresa;
