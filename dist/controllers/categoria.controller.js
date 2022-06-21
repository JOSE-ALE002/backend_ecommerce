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
exports.deleteCategoria = exports.updateCategoria = exports.getCategorias = exports.saveCategoria = void 0;
const Categoria_1 = __importDefault(require("../models/Categoria"));
// SAVE Categoria FUNCTION
const saveCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resp = yield Categoria_1.default.create(req.body);
        return res.json({
            status: true,
            msj: "Categoria guardado correctamente",
            resp
        });
    }
    catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar la categoria",
            error
        });
    }
});
exports.saveCategoria = saveCategoria;
// GET Categorias FUNCTION
const getCategorias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Promise<Response<any, Record<string, any>>>
    try {
        const categorias = yield Categoria_1.default.findAll();
        return res.json({
            status: "Success",
            categorias
        });
    }
    catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
});
exports.getCategorias = getCategorias;
// UPDATE Categoria FUNCTION
const updateCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = yield Categoria_1.default.update(data, {
            where: {
                id_categoria: id
            }
        });
        if (resp[0] === 0) {
            return res.status(402).json({
                status: false,
                msj: "Categoria no encontrado"
            });
        }
        return res.json({
            status: true,
            msj: "Categoria actualizada",
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
exports.updateCategoria = updateCategoria;
// DELETE Categoria FUNCTION
const deleteCategoria = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const categoria = yield Categoria_1.default.findOne({
            where: {
                id_categoria: id
            }
        });
        if (categoria === null) {
            return res.status(402).json({
                status: false,
                msj: "Categoria no encontrado"
            });
        }
        yield categoria.destroy();
        return res.json({
            status: true,
            msj: "Categoria eliminado",
            categoria
        });
    }
    catch (error) {
        return res.json({
            status: false,
            error
        });
    }
});
exports.deleteCategoria = deleteCategoria;
