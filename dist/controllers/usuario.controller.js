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
exports.deleteUsuario = exports.updateUsuario = exports.getUsuarios = exports.saveUsuario = void 0;
const bcrypt_1 = require("bcrypt");
const Usuario_1 = __importDefault(require("../models/Usuario"));
// SAVE ROLE FUNCTION
const saveUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    req.body.pass = yield (0, bcrypt_1.hash)(req.body.pass, yield (0, bcrypt_1.genSalt)(10));
    try {
        const resp = yield Usuario_1.default.create(req.body);
        return res.status(200).json({
            status: true,
            msj: "Usuario guardado correctamente",
            resp,
        });
    }
    catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar la Usuario",
            error
        });
    }
});
exports.saveUsuario = saveUsuario;
// GET ROLES FUNCTION
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Promise<Response<any, Record<string, any>>>
    try {
        const users = yield Usuario_1.default.findAll();
        return res.json({
            status: "Success",
            users
        });
    }
    catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
});
exports.getUsuarios = getUsuarios;
// UPDATE ROLE FUNCTION
const updateUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = yield Usuario_1.default.update(data, {
            where: {
                id_usuario: id
            }
        });
        if (resp[0] === 0) {
            return res.status(402).json({
                status: false,
                msj: "Usuario no encontrado"
            });
        }
        return res.json({
            status: true,
            msj: "Usuario actualizado",
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
exports.updateUsuario = updateUsuario;
// DELETE ROLE FUNCTION
const deleteUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const user = yield Usuario_1.default.findOne({
            where: {
                id_usuario: id
            }
        });
        if (user === null) {
            return res.status(402).json({
                status: false,
                msj: "Usuario no encontrado"
            });
        }
        yield user.destroy();
        return res.json({
            status: true,
            msj: "Usuario eliminado",
            user
        });
    }
    catch (error) {
        return res.json({
            status: false,
            error
        });
    }
});
exports.deleteUsuario = deleteUsuario;
