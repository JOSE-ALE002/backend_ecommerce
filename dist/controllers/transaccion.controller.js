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
exports.deleteTransaccion = exports.updateTransaccion = exports.getTransacciones = exports.saveTransaccion = void 0;
const Transaccion_1 = __importDefault(require("../models/Transaccion"));
// SAVE Transaccion FUNCTION
const saveTransaccion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resp = yield Transaccion_1.default.create(req.body);
        return res.json({
            status: true,
            msj: "Transaccion guardado correctamente",
            resp
        });
    }
    catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar el Transaccion",
            error
        });
    }
});
exports.saveTransaccion = saveTransaccion;
// GET TransaccionS FUNCTION
const getTransacciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Promise<Response<any, Record<string, any>>>
    try {
        const transacciones = yield Transaccion_1.default.findAll();
        return res.json({
            status: "Success",
            transacciones
        });
    }
    catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
});
exports.getTransacciones = getTransacciones;
// UPDATE Transaccion FUNCTION
const updateTransaccion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = yield Transaccion_1.default.update(data, {
            where: {
                id_transaccion: id
            }
        });
        if (resp[0] === 0) {
            return res.status(402).json({
                status: false,
                msj: "Transaccion no encontrado"
            });
        }
        return res.json({
            status: true,
            msj: "Transaccion actualizado",
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
exports.updateTransaccion = updateTransaccion;
// DELETE Transaccion FUNCTION
const deleteTransaccion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const transaccion = yield Transaccion_1.default.findOne({
            where: {
                id_transaccion: id
            }
        });
        if (transaccion === null) {
            return res.status(402).json({
                status: false,
                msj: "Transaccion no encontrado"
            });
        }
        yield transaccion.destroy();
        return res.json({
            status: true,
            msj: "Transaccion eliminado",
            transaccion
        });
    }
    catch (error) {
        return res.json({
            status: false,
            error
        });
    }
});
exports.deleteTransaccion = deleteTransaccion;
