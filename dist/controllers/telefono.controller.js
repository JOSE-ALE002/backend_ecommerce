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
exports.deleteTelefono = exports.updateTelefono = exports.getTelefonos = exports.saveTelefono = void 0;
const Telefono_1 = __importDefault(require("../models/Telefono"));
// SAVE ROLE FUNCTION
const saveTelefono = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resp = yield Telefono_1.default.create(req.body);
        return res.json({
            status: true,
            msj: "Telefono guardado correctamente",
            resp
        });
    }
    catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar la Telefono",
            error
        });
    }
});
exports.saveTelefono = saveTelefono;
// GET ROLES FUNCTION
const getTelefonos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Promise<Response<any, Record<string, any>>>
    try {
        const telefonos = yield Telefono_1.default.findAll();
        return res.json({
            status: "Success",
            telefonos
        });
    }
    catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
});
exports.getTelefonos = getTelefonos;
// UPDATE ROLE FUNCTION
const updateTelefono = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = yield Telefono_1.default.update(data, {
            where: {
                id_telefono: id
            }
        });
        if (resp[0] === 0) {
            return res.status(402).json({
                status: false,
                msj: "Telefono no encontrado"
            });
        }
        return res.json({
            status: true,
            msj: "Telefono actualizado",
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
exports.updateTelefono = updateTelefono;
// DELETE ROLE FUNCTION
const deleteTelefono = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const tel = yield Telefono_1.default.findOne({
            where: {
                id_telefono: id
            }
        });
        if (tel === null) {
            return res.status(402).json({
                status: false,
                msj: "Telefono no encontrado"
            });
        }
        yield tel.destroy();
        return res.json({
            status: true,
            msj: "Telefono eliminado",
            tel
        });
    }
    catch (error) {
        return res.json({
            status: false,
            error
        });
    }
});
exports.deleteTelefono = deleteTelefono;
