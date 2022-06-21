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
exports.deleteDptoEmpresa = exports.updateDptoEmpresa = exports.getDptosEmpresa = exports.saveDptoEmpresa = void 0;
const Departamento_empresa_1 = __importDefault(require("../models/Departamento_empresa"));
// SAVE ROLE FUNCTION
const saveDptoEmpresa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resp = yield Departamento_empresa_1.default.create(req.body);
        return res.json({
            status: true,
            msj: "DptoEmpresa guardado correctamente",
            resp
        });
    }
    catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar la DptoEmpresa",
            error
        });
    }
});
exports.saveDptoEmpresa = saveDptoEmpresa;
// GET ROLES FUNCTION
const getDptosEmpresa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Promise<Response<any, Record<string, any>>>
    try {
        const dptos = yield Departamento_empresa_1.default.findAll();
        return res.json({
            status: "Success",
            dptos
        });
    }
    catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
});
exports.getDptosEmpresa = getDptosEmpresa;
// UPDATE ROLE FUNCTION
const updateDptoEmpresa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = yield Departamento_empresa_1.default.update(data, {
            where: {
                id_departamento_empresa: id
            }
        });
        if (resp[0] === 0) {
            return res.status(402).json({
                status: false,
                msj: "DptoEmpresa no encontrado"
            });
        }
        return res.json({
            status: true,
            msj: "DptoEmpresa actualizado",
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
exports.updateDptoEmpresa = updateDptoEmpresa;
// DELETE ROLE FUNCTION
const deleteDptoEmpresa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const dptoEmpresa = yield Departamento_empresa_1.default.findOne({
            where: {
                id_departamento_empresa: id
            }
        });
        if (dptoEmpresa === null) {
            return res.status(402).json({
                status: false,
                msj: "DptoEmpresa no encontrado"
            });
        }
        yield dptoEmpresa.destroy();
        return res.json({
            status: true,
            msj: "DptoEmpresa eliminado",
            dptoEmpresa
        });
    }
    catch (error) {
        return res.json({
            status: false,
            error
        });
    }
});
exports.deleteDptoEmpresa = deleteDptoEmpresa;
