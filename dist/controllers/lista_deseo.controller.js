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
exports.getListaDeseos = exports.saveListaDeseo = void 0;
const Lista_deseo_1 = __importDefault(require("../models/Lista_deseo"));
// SAVE ROLE FUNCTION
const saveListaDeseo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resp = yield Lista_deseo_1.default.create(req.body);
        return res.json({
            status: true,
            msj: "ListaDeseo guardado correctamente",
            resp
        });
    }
    catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar la ListaDeseo",
            error
        });
    }
});
exports.saveListaDeseo = saveListaDeseo;
// GET ROLES FUNCTION
const getListaDeseos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Promise<Response<any, Record<string, any>>>
    try {
        const detalles = yield Lista_deseo_1.default.findAll();
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
exports.getListaDeseos = getListaDeseos;
// UPDATE ROLE FUNCTION
/* export const updateListaDeseo = async (req: Request, res: Response): Promise<Response> => {
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = await ListaDeseo.update(data, {
            where: {
                id_ListaDeseo: id
            }
        });
        
        if(resp[0] === 0) {
            return res.status(402).json({
                status: false,
                msj: "ListaDeseo no encontrado"
            });
        }

        return res.json({
            status: true,
            msj: "ListaDeseo actualizado",
            resp
        });
    } catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
}; */
// DELETE ROLE FUNCTION
/* export const deleteListaDeseo = async (req: Request, res: Response): Promise<Response> => {
    const id = req.params.id;

    try {
        const ListaDeseo = await ListaDeseo.findOne({
            where: {
                id_ListaDeseo: id
            }
        });

        if(ListaDeseo === null) {
            return res.status(402).json({
                status: false,
                msj: "ListaDeseo no encontrado"
            });
        }

        await ListaDeseo.destroy();
        return res.json({
            status: true,
            msj: "ListaDeseo eliminado",
            ListaDeseo
        });
    } catch (error) {
        return res.json({
            status: false,
            error
        });
    }
}; */
