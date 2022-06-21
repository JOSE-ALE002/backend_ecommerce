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
exports.deleteDepartamento = exports.updateDepartamento = exports.getDepartamentos = exports.saveDepartamento = void 0;
const Departamento_1 = __importDefault(require("../models/Departamento"));
// SAVE ROLE FUNCTION
const saveDepartamento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resp = yield Departamento_1.default.create(req.body);
        return res.json({
            status: true,
            msj: "Departamento guardado correctamente",
            resp
        });
    }
    catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar la Departamento",
            error
        });
    }
});
exports.saveDepartamento = saveDepartamento;
// GET ROLES FUNCTION
const getDepartamentos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Promise<Response<any, Record<string, any>>>
    try {
        const dptos = yield Departamento_1.default.findAll();
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
exports.getDepartamentos = getDepartamentos;
// UPDATE ROLE FUNCTION
const updateDepartamento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = yield Departamento_1.default.update(data, {
            where: {
                codigo_departamento: id
            }
        });
        if (resp[0] === 0) {
            return res.status(402).json({
                status: false,
                msj: "Departamento no encontrado"
            });
        }
        return res.json({
            status: true,
            msj: "Departamento actualizado",
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
exports.updateDepartamento = updateDepartamento;
// DELETE ROLE FUNCTION
const deleteDepartamento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const departamento = yield Departamento_1.default.findOne({
            where: {
                codigo_departamento: id
            }
        });
        if (departamento === null) {
            return res.status(402).json({
                status: false,
                msj: "Departamento no encontrado"
            });
        }
        yield departamento.destroy();
        return res.json({
            status: true,
            msj: "Departamento eliminado",
            departamento
        });
    }
    catch (error) {
        return res.json({
            status: false,
            error
        });
    }
});
exports.deleteDepartamento = deleteDepartamento;
