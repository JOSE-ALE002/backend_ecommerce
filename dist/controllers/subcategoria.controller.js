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
exports.deleteSubcategoria = exports.updateSubcategoria = exports.getSubcategorias = exports.saveSubcategoria = void 0;
const Subcategoria_1 = __importDefault(require("../models/Subcategoria"));
// SAVE ROLE FUNCTION
const saveSubcategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resp = yield Subcategoria_1.default.create(req.body);
        return res.json({
            status: true,
            msj: "Subcategoria guardado correctamente",
            resp
        });
    }
    catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar la Subcategoria",
            error
        });
    }
});
exports.saveSubcategoria = saveSubcategoria;
// GET ROLES FUNCTION
const getSubcategorias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Promise<Response<any, Record<string, any>>>
    try {
        const subcategorias = yield Subcategoria_1.default.findAll();
        return res.json({
            status: "Success",
            subcategorias
        });
    }
    catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
});
exports.getSubcategorias = getSubcategorias;
// UPDATE ROLE FUNCTION
const updateSubcategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = yield Subcategoria_1.default.update(data, {
            where: {
                id_subcategoria: id
            }
        });
        if (resp[0] === 0) {
            return res.status(402).json({
                status: false,
                msj: "Subcategoria no encontrado"
            });
        }
        return res.json({
            status: true,
            msj: "Subcategoria actualizado",
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
exports.updateSubcategoria = updateSubcategoria;
// DELETE ROLE FUNCTION
const deleteSubcategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const subcategoria = yield Subcategoria_1.default.findOne({
            where: {
                id_subcategoria: id
            }
        });
        if (subcategoria === null) {
            return res.status(402).json({
                status: false,
                msj: "Subcategoria no encontrado"
            });
        }
        yield subcategoria.destroy();
        return res.json({
            status: true,
            msj: "Subcategoria eliminado",
            subcategoria
        });
    }
    catch (error) {
        return res.json({
            status: false,
            error
        });
    }
});
exports.deleteSubcategoria = deleteSubcategoria;
