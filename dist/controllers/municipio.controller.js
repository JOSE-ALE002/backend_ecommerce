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
exports.deleteMunicipio = exports.updateMunicipio = exports.getMunicipios = exports.saveMunicipio = void 0;
const Municipio_1 = __importDefault(require("../models/Municipio"));
// SAVE ROLE FUNCTION
const saveMunicipio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resp = yield Municipio_1.default.create(req.body);
        return res.json({
            status: true,
            msj: "Municipio guardado correctamente",
            resp
        });
    }
    catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar la Municipio",
            error
        });
    }
});
exports.saveMunicipio = saveMunicipio;
// GET ROLES FUNCTION
const getMunicipios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //Promise<Response<any, Record<string, any>>>
    try {
        const municipios = yield Municipio_1.default.findAll();
        return res.json({
            status: "Success",
            municipios
        });
    }
    catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
});
exports.getMunicipios = getMunicipios;
// UPDATE ROLE FUNCTION
const updateMunicipio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = yield Municipio_1.default.update(data, {
            where: {
                codigo_postal: id
            }
        });
        if (resp[0] === 0) {
            return res.status(402).json({
                status: false,
                msj: "Municipio no encontrado"
            });
        }
        return res.json({
            status: true,
            msj: "Municipio actualizado",
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
exports.updateMunicipio = updateMunicipio;
// DELETE ROLE FUNCTION
const deleteMunicipio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const municipio = yield Municipio_1.default.findOne({
            where: {
                codigo_postal: id
            }
        });
        if (municipio === null) {
            return res.status(402).json({
                status: false,
                msj: "Municipio no encontrado"
            });
        }
        yield municipio.destroy();
        return res.json({
            status: true,
            msj: "Municipio eliminado",
            municipio
        });
    }
    catch (error) {
        return res.json({
            status: false,
            error
        });
    }
});
exports.deleteMunicipio = deleteMunicipio;
