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
exports.deleteTipo_transaccion = exports.updateTipo_transaccion = exports.getTipo_transacciones = exports.saveTipo_transaccion = void 0;
const Tipo_transaccion_1 = __importDefault(require("../models/Tipo_transaccion"));
// SAVE Tipo_transaccion FUNCTION
const saveTipo_transaccion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resp = yield Tipo_transaccion_1.default.create(req.body);
        return res.json({
            status: true,
            msj: "Tipo_transaccion guardado correctamente",
            resp
        });
    }
    catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar el Tipo_transaccion",
            error
        });
    }
});
exports.saveTipo_transaccion = saveTipo_transaccion;
// GET Tipo_transaccionS FUNCTION
const getTipo_transacciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Promise<Response<any, Record<string, any>>>
    try {
        const Tipo_transacciones = yield Tipo_transaccion_1.default.findAll();
        return res.json({
            status: "Success",
            Tipo_transacciones
        });
    }
    catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
});
exports.getTipo_transacciones = getTipo_transacciones;
// UPDATE Tipo_transaccion FUNCTION
const updateTipo_transaccion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = yield Tipo_transaccion_1.default.update(data, {
            where: {
                id_tipo_transaccion: id
            }
        });
        if (resp[0] === 0) {
            return res.status(402).json({
                status: false,
                msj: "Tipo_transaccion no encontrado"
            });
        }
        return res.json({
            status: true,
            msj: "Tipo_transaccion actualizado",
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
exports.updateTipo_transaccion = updateTipo_transaccion;
// DELETE Tipo_transaccion FUNCTION
const deleteTipo_transaccion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const tipo_t = yield Tipo_transaccion_1.default.findOne({
            where: {
                id_tipo_transaccion: id
            }
        });
        if (tipo_t === null) {
            return res.status(402).json({
                status: false,
                msj: "Tipo_transaccion no encontrado"
            });
        }
        yield tipo_t.destroy();
        return res.json({
            status: true,
            msj: "Tipo_transaccion eliminado",
            tipo_t
        });
    }
    catch (error) {
        return res.json({
            status: false,
            error
        });
    }
});
exports.deleteTipo_transaccion = deleteTipo_transaccion;
