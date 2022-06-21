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
exports.deleteEmpleado = exports.updateEmpleado = exports.getEmpleados = exports.saveEmpleado = void 0;
const Empleado_1 = __importDefault(require("../models/Empleado"));
// SAVE ROLE FUNCTION
const saveEmpleado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resp = yield Empleado_1.default.create(req.body);
        return res.json({
            status: true,
            msj: "Empleado guardado correctamente",
            resp
        });
    }
    catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar la Empleado",
            error
        });
    }
});
exports.saveEmpleado = saveEmpleado;
// GET ROLES FUNCTION
const getEmpleados = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Promise<Response<any, Record<string, any>>>
    try {
        const detalles = yield Empleado_1.default.findAll();
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
exports.getEmpleados = getEmpleados;
// UPDATE ROLE FUNCTION
const updateEmpleado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = yield Empleado_1.default.update(data, {
            where: {
                id_empleado: id
            }
        });
        if (resp[0] === 0) {
            return res.status(402).json({
                status: false,
                msj: "Empleado no encontrado"
            });
        }
        return res.json({
            status: true,
            msj: "Empleado actualizado",
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
exports.updateEmpleado = updateEmpleado;
// DELETE ROLE FUNCTION
const deleteEmpleado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const empleado = yield Empleado_1.default.findOne({
            where: {
                id_empleado: id
            }
        });
        if (empleado === null) {
            return res.status(402).json({
                status: false,
                msj: "Empleado no encontrado"
            });
        }
        yield empleado.destroy();
        return res.json({
            status: true,
            msj: "Empleado eliminado",
            empleado
        });
    }
    catch (error) {
        return res.json({
            status: false,
            error
        });
    }
});
exports.deleteEmpleado = deleteEmpleado;
