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
exports.deleteDireccion = exports.updateDireccion = exports.getDirecciones = exports.saveDireccion = void 0;
const Direccion_1 = __importDefault(require("../models/Direccion"));
// SAVE ROLE FUNCTION
const saveDireccion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resp = yield Direccion_1.default.create(req.body);
        return res.json({
            status: true,
            msj: "Direccion guardado correctamente",
            resp
        });
    }
    catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar la Direccion",
            error
        });
    }
});
exports.saveDireccion = saveDireccion;
// GET ROLES FUNCTION
const getDirecciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Promise<Response<any, Record<string, any>>>
    try {
        const direcciones = yield Direccion_1.default.findAll();
        return res.json({
            status: "Success",
            direcciones
        });
    }
    catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
});
exports.getDirecciones = getDirecciones;
// UPDATE ROLE FUNCTION
const updateDireccion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = yield Direccion_1.default.update(data, {
            where: {
                id_direccion: id
            }
        });
        if (resp[0] === 0) {
            return res.status(402).json({
                status: false,
                msj: "Direccion no encontrado"
            });
        }
        return res.json({
            status: true,
            msj: "Direccion actualizado",
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
exports.updateDireccion = updateDireccion;
// DELETE ROLE FUNCTION
const deleteDireccion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const dir = yield Direccion_1.default.findOne({
            where: {
                id_direccion: id
            }
        });
        if (dir === null) {
            return res.status(402).json({
                status: false,
                msj: "Direccion no encontrado"
            });
        }
        yield dir.destroy();
        return res.json({
            status: true,
            msj: "Direccion eliminado",
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
exports.deleteDireccion = deleteDireccion;
