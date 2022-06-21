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
exports.deleteEnvio = exports.updateEnvio = exports.getEnvios = exports.saveEnvio = void 0;
const Envio_1 = __importDefault(require("../models/Envio"));
// SAVE ROLE FUNCTION
const saveEnvio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resp = yield Envio_1.default.create(req.body);
        return res.json({
            status: true,
            msj: "Envio guardado correctamente",
            resp
        });
    }
    catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar la Envio",
            error
        });
    }
});
exports.saveEnvio = saveEnvio;
// GET ROLES FUNCTION
const getEnvios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Promise<Response<any, Record<string, any>>>
    try {
        const detalles = yield Envio_1.default.findAll();
        return res.json({
            status: "Success",
            detalles
        });
    }
    catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
});
exports.getEnvios = getEnvios;
// UPDATE ROLE FUNCTION
const updateEnvio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = yield Envio_1.default.update(data, {
            where: {
                id_envio: id
            }
        });
        if (resp[0] === 0) {
            return res.status(402).json({
                status: false,
                msj: "Envio no encontrado"
            });
        }
        return res.json({
            status: true,
            msj: "Envio actualizado",
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
exports.updateEnvio = updateEnvio;
// DELETE ROLE FUNCTION
const deleteEnvio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const envio = yield Envio_1.default.findOne({
            where: {
                id_envio: id
            }
        });
        if (envio === null) {
            return res.status(402).json({
                status: false,
                msj: "Envio no encontrado"
            });
        }
        yield envio.destroy();
        return res.json({
            status: true,
            msj: "Envio eliminado",
            envio
        });
    }
    catch (error) {
        return res.json({
            status: false,
            error
        });
    }
});
exports.deleteEnvio = deleteEnvio;
