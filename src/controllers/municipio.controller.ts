import Municipio from "../models/Municipio";
import { Request, Response } from "express";

// SAVE ROLE FUNCTION
export const saveMunicipio = async (req: Request, res: Response): Promise<Response> => {
    try {
        const resp = await Municipio.create(req.body);
        return res.json({
            status: true,
            msj: "Municipio guardado correctamente",
            resp
        })        
    } catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar la Municipio",
            error
        })        
    }
};

// GET ROLES FUNCTION
export const getMunicipios = async (req: Request, res: Response): Promise<Response> => { 
    //Promise<Response<any, Record<string, any>>>
    try {
        const municipios = await Municipio.findAll();        
        return res.json({
            status: "Success",
            municipios
        })
    } catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
};

// UPDATE ROLE FUNCTION
export const updateMunicipio = async (req: Request, res: Response): Promise<Response> => {    
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = await Municipio.update(data, {
            where: {
                codigo_postal: id
            }
        });
        
        if(resp[0] === 0) {
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
    } catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
};

// DELETE ROLE FUNCTION
export const deleteMunicipio = async (req: Request, res: Response): Promise<Response> => {
    const id = req.params.id;

    try {
        const municipio = await Municipio.findOne({
            where: {
                codigo_postal: id
            }
        });        

        if(municipio === null) {
            return res.status(402).json({
                status: false,
                msj: "Municipio no encontrado"
            });
        }

        await municipio.destroy();
        return res.json({
            status: true,
            msj: "Municipio eliminado",
            municipio
        });
    } catch (error) {
        return res.json({
            status: false, 
            error
        });
    }
};


