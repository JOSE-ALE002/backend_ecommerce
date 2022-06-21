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
exports.deleteDetalleTarjeta = exports.updateDetalleTarjeta = exports.getDetallesTarjeta = exports.saveDetalleTarjeta = void 0;
const Detalle_tarjeta_1 = __importDefault(require("../models/Detalle_tarjeta"));
// SAVE ROLE FUNCTION
const saveDetalleTarjeta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resp = yield Detalle_tarjeta_1.default.create(req.body);
        return res.json({
            status: true,
            msj: "DetalleTarjeta guardado correctamente",
            resp
        });
    }
    catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar la DetalleTarjeta",
            error
        });
    }
});
exports.saveDetalleTarjeta = saveDetalleTarjeta;
// GET ROLES FUNCTION
const getDetallesTarjeta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Promise<Response<any, Record<string, any>>>
    try {
        const detalles = yield Detalle_tarjeta_1.default.findAll();
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
exports.getDetallesTarjeta = getDetallesTarjeta;
// UPDATE ROLE FUNCTION
const updateDetalleTarjeta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = yield Detalle_tarjeta_1.default.update(data, {
            where: {
                numero_tarjeta: id
            }
        });
        if (resp[0] === 0) {
            return res.status(402).json({
                status: false,
                msj: "DetalleTarjeta no encontrado"
            });
        }
        return res.json({
            status: true,
            msj: "DetalleTarjeta actualizado",
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
exports.updateDetalleTarjeta = updateDetalleTarjeta;
// DELETE ROLE FUNCTION
const deleteDetalleTarjeta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const detalles = yield Detalle_tarjeta_1.default.findOne({
            where: {
                numero_tarjeta: id
            }
        });
        if (detalles === null) {
            return res.status(402).json({
                status: false,
                msj: "DetalleTarjeta no encontrado"
            });
        }
        yield detalles.destroy();
        return res.json({
            status: true,
            msj: "DetalleTarjeta eliminado",
            detalles
        });
    }
    catch (error) {
        return res.json({
            status: false,
            error
        });
    }
});
exports.deleteDetalleTarjeta = deleteDetalleTarjeta;
