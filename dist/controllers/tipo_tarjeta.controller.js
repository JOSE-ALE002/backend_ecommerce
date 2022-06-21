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
exports.deleteTipoTarjeta = exports.updateTipoTarjeta = exports.getTipoTarjetas = exports.saveTipoTarjeta = void 0;
const Tipo_tarjeta_1 = __importDefault(require("../models/Tipo_tarjeta"));
// SAVE tipo_tarjeta FUNCTION
const saveTipoTarjeta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resp = yield Tipo_tarjeta_1.default.create(req.body);
        return res.json({
            status: true,
            msj: "tipo_tarjeta guardado correctamente",
            resp
        });
    }
    catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar el tipo_tarjeta",
            error
        });
    }
});
exports.saveTipoTarjeta = saveTipoTarjeta;
// GET tipo_tarjetaS FUNCTION
const getTipoTarjetas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Promise<Response<any, Record<string, any>>>
    try {
        const tipo_tarjetas = yield Tipo_tarjeta_1.default.findAll();
        return res.json({
            status: "Success",
            tipo_tarjetas
        });
    }
    catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
});
exports.getTipoTarjetas = getTipoTarjetas;
// UPDATE tipo_tarjeta FUNCTION
const updateTipoTarjeta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = yield Tipo_tarjeta_1.default.update(data, {
            where: {
                id_tipo_tarjeta: id
            }
        });
        if (resp[0] === 0) {
            return res.status(402).json({
                status: false,
                msj: "tipo_tarjeta no encontrado"
            });
        }
        return res.json({
            status: true,
            msj: "tipo_tarjeta actualizado",
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
exports.updateTipoTarjeta = updateTipoTarjeta;
// DELETE tipo_tarjeta FUNCTION
const deleteTipoTarjeta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const tipo_t = yield Tipo_tarjeta_1.default.findOne({
            where: {
                id_tipo_tarjeta: id
            }
        });
        if (tipo_t === null) {
            console.log("Si es nulo");
            return res.status(402).json({
                status: false,
                msj: "tipo_tarjeta no encontrado"
            });
        }
        else {
            console.log("No es nulo");
            yield tipo_t.destroy();
            return res.json({
                status: true,
                msj: "tipo_tarjeta eliminado",
                tipo_t
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
exports.deleteTipoTarjeta = deleteTipoTarjeta;
