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
exports.deleteOrden = exports.updateOrden = exports.getOrdenes = exports.saveOrden = void 0;
const Orden_1 = __importDefault(require("../models/Orden"));
// SAVE ROLE FUNCTION
const saveOrden = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resp = yield Orden_1.default.create(req.body);
        return res.json({
            status: true,
            msj: "Orden guardado correctamente",
            resp
        });
    }
    catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar la Orden",
            error
        });
    }
});
exports.saveOrden = saveOrden;
// GET ROLES FUNCTION
const getOrdenes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Promise<Response<any, Record<string, any>>>
    try {
        const Ordens = yield Orden_1.default.findAll();
        return res.json({
            status: "Success",
            Ordens
        });
    }
    catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
});
exports.getOrdenes = getOrdenes;
// UPDATE ROLE FUNCTION
const updateOrden = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = yield Orden_1.default.update(data, {
            where: {
                id_orden: id
            }
        });
        if (resp[0] === 0) {
            return res.status(402).json({
                status: false,
                msj: "Orden no encontrado"
            });
        }
        return res.json({
            status: true,
            msj: "Orden actualizado",
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
exports.updateOrden = updateOrden;
// DELETE ROLE FUNCTION
const deleteOrden = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const orden = yield Orden_1.default.findOne({
            where: {
                id_orden: id
            }
        });
        if (orden === null) {
            return res.status(402).json({
                status: false,
                msj: "Orden no encontrado"
            });
        }
        yield orden.destroy();
        return res.json({
            status: true,
            msj: "Orden eliminado",
            orden
        });
    }
    catch (error) {
        return res.json({
            status: false,
            error
        });
    }
});
exports.deleteOrden = deleteOrden;
