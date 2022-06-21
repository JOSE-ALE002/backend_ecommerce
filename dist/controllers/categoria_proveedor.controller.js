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
exports.findCategory = exports.getCategoria_Proveedores = exports.saveCategoria_Proveedor = void 0;
const Categoria_proveedor_1 = __importDefault(require("../models/Categoria_proveedor"));
// SAVE Categoria_Proveedor FUNCTION
const saveCategoria_Proveedor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resp = yield Categoria_proveedor_1.default.create(req.body);
        return res.json({
            status: true,
            msj: "Categoria_Proveedor guardado correctamente",
            resp
        });
    }
    catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar la Categoria_Proveedor",
            error
        });
    }
});
exports.saveCategoria_Proveedor = saveCategoria_Proveedor;
// GET Categoria_Proveedors FUNCTION
const getCategoria_Proveedores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Promise<Response<any, Record<string, any>>>
    try {
        const categorias_p = yield Categoria_proveedor_1.default.findAll();
        return res.json({
            status: "Success",
            categorias_p
        });
    }
    catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
});
exports.getCategoria_Proveedores = getCategoria_Proveedores;
const findCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const categorias_p = yield Categoria_proveedor_1.default.findOne({
            where: {
                id_categoria_proveedor: id
            }
        });
        if (categorias_p === null) {
            return res.status(402).json({
                status: false,
                msj: "Categoria_Proveedor no encontrado"
            });
        }
        return res.json({
            status: true,
            categorias_p
        });
    }
    catch (error) {
        return res.json({
            status: false,
            error
        });
    }
});
exports.findCategory = findCategory;
// UPDATE Categoria_Proveedor FUNCTION
/* export const updateCategoria_Proveedor = async (req: Request, res: Response): Promise<Response> => {
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = await Categoria_Proveedor.update(data, {
            where: {
                id_Categoria_Proveedor: id
            }
        });
        
        if(resp[0] === 0) {
            return res.status(402).json({
                status: false,
                msj: "Categoria_Proveedor no encontrado"
            });
        }

        return res.json({
            status: true,
            msj: "Categoria_Proveedor actualizada",
            resp
        });
    } catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
}; */
// DELETE Categoria_Proveedor FUNCTION
/* export const deleteCategoria_Proveedor = async (req: Request, res: Response): Promise<Response> => {
    const id = req.params.id;

    try {
        const categorias_p = await Categoria_Proveedor.findOne({
            where: {
                id_categoria_Proveedor: id
            }
        });

        if(categorias_p === null) {
            return res.status(402).json({
                status: false,
                msj: "Categoria_Proveedor no encontrado"
            });
        }

        await categorias_p.destroy();
        return res.json({
            status: true,
            msj: "Categoria_Proveedor eliminado",
            categorias_p
        });
    } catch (error) {
        return res.json({
            status: false,
            error
        });
    }
};

 */
