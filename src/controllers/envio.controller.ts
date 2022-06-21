import Envio from "../models/Envio";
import { Request, Response } from "express";

// SAVE ROLE FUNCTION
export const saveEnvio = async (req: Request, res: Response): Promise<Response> => {
    try {
        const resp = await Envio.create(req.body);
        return res.json({
            status: true,
            msj: "Envio guardado correctamente",
            resp
        })        
    } catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar la Envio",
            error
        })        
    }
};

// GET ROLES FUNCTION
export const getEnvios = async (req: Request, res: Response): Promise<Response> => { 
    //Promise<Response<any, Record<string, any>>>
    try {
        const detalles = await Envio.findAll();        
        return res.json({
            status: "Success",
            detalles
        })
    } catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
};

// UPDATE ROLE FUNCTION
export const updateEnvio = async (req: Request, res: Response): Promise<Response> => {    
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = await Envio.update(data, {
            where: {
                id_envio: id
            }
        });
        
        if(resp[0] === 0) {
            return res.status(402).json({
                status: false,
                msj: "Envio no encontrado"
            });
        }

        return res.json({
            status: true,
            msj: "Envio actualizado",
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
export const deleteEnvio = async (req: Request, res: Response): Promise<Response> => {
    const id = req.params.id;

    try {
        const envio = await Envio.findOne({
            where: {
                id_envio: id
            }
        });        

        if(envio === null) {
            return res.status(402).json({
                status: false,
                msj: "Envio no encontrado"
            });
        }

        await envio.destroy();
        return res.json({
            status: true,
            msj: "Envio eliminado",
            envio
        });
    } catch (error) {
        return res.json({
            status: false, 
            error
        });
    }
};
