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
exports.deleteTipoUsuario = exports.updateTipoUsuario = exports.getTipoUsuarios = exports.saveTipoUsuario = void 0;
const Tipo_usuario_1 = __importDefault(require("../models/Tipo_usuario"));
// SAVE Tipo_usuario FUNCTION
const saveTipoUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resp = yield Tipo_usuario_1.default.create(req.body);
        return res.json({
            status: true,
            msj: "Tipo_usuario guardado correctamente",
            resp
        });
    }
    catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar el Tipo_usuario",
            error
        });
    }
});
exports.saveTipoUsuario = saveTipoUsuario;
// GET Tipo_usuarioS FUNCTION
const getTipoUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Promise<Response<any, Record<string, any>>>
    try {
        const tipo_usuarios = yield Tipo_usuario_1.default.findAll();
        return res.json({
            status: "Success",
            tipo_usuarios
        });
    }
    catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
});
exports.getTipoUsuarios = getTipoUsuarios;
// UPDATE Tipo_usuario FUNCTION
const updateTipoUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = yield Tipo_usuario_1.default.update(data, {
            where: {
                id_tipo_usuario: id
            }
        });
        if (resp[0] === 0) {
            return res.status(402).json({
                status: false,
                msj: "Tipo_usuario no encontrado"
            });
        }
        return res.json({
            status: true,
            msj: "Tipo_usuario actualizado",
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
exports.updateTipoUsuario = updateTipoUsuario;
// DELETE Tipo_usuario FUNCTION
const deleteTipoUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const tipo_user = yield Tipo_usuario_1.default.findOne({
            where: {
                id_tipo_usuario: id
            }
        });
        if (tipo_user === null) {
            console.log("Si es nulo");
            return res.status(402).json({
                status: false,
                msj: "Tipo_usuario no encontrado"
            });
        }
        else {
            console.log("No es nulo");
            yield tipo_user.destroy();
            return res.json({
                status: true,
                msj: "Tipo_usuario eliminado",
                tipo_user
            });
        }
    }
    catch (error) {
        return res.json({
            status: false,
            error
        });
    }
});
exports.deleteTipoUsuario = deleteTipoUsuario;
