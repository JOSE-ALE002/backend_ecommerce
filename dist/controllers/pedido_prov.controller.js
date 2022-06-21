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
exports.deletePedidoProveedor = exports.updatePedidoProveedor = exports.getPedidosProveedor = exports.savePedidoProveedor = void 0;
const Pedido_proveedor_1 = __importDefault(require("../models/Pedido_proveedor"));
// SAVE ROLE FUNCTION
const savePedidoProveedor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resp = yield Pedido_proveedor_1.default.create(req.body);
        return res.json({
            status: true,
            msj: "Pedido guardado correctamente",
            resp
        });
    }
    catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar la Pedido",
            error
        });
    }
});
exports.savePedidoProveedor = savePedidoProveedor;
// GET ROLES FUNCTION
const getPedidosProveedor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Promise<Response<any, Record<string, any>>>
    try {
        const pedidos = yield Pedido_proveedor_1.default.findAll();
        return res.json({
            status: "Success",
            pedidos
        });
    }
    catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
});
exports.getPedidosProveedor = getPedidosProveedor;
// UPDATE ROLE FUNCTION
const updatePedidoProveedor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = yield Pedido_proveedor_1.default.update(data, {
            where: {
                id_pedido: id
            }
        });
        if (resp[0] === 0) {
            return res.status(402).json({
                status: false,
                msj: "PedidoProveedor no encontrado"
            });
        }
        return res.json({
            status: true,
            msj: "Pedido actualizado",
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
exports.updatePedidoProveedor = updatePedidoProveedor;
// DELETE ROLE FUNCTION
const deletePedidoProveedor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const pedido = yield Pedido_proveedor_1.default.findOne({
            where: {
                id_pedido: id
            }
        });
        if (pedido === null) {
            return res.status(402).json({
                status: false,
                msj: "Pedido no encontrado"
            });
        }
        yield pedido.destroy();
        return res.json({
            status: true,
            msj: "Pedido eliminado",
            pedido
        });
    }
    catch (error) {
        return res.json({
            status: false,
            error
        });
    }
});
exports.deletePedidoProveedor = deletePedidoProveedor;
