import Direccion from "../models/Direccion";
import { Request, Response } from "express";

// SAVE ROLE FUNCTION
export const saveDireccion = async (req: Request, res: Response): Promise<Response> => {
    try {
        const resp = await Direccion.create(req.body);
        return res.json({
            status: true,
            msj: "Direccion guardada correctamente",
            resp
        })        
    } catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar la direccion",
            error
        })        
    }
};

// GET ROLES FUNCTION
export const getDirecciones = async (req: Request, res: Response): Promise<Response> => { 
    //Promise<Response<any, Record<string, any>>>
    try {
        const direcciones = await Direccion.findAll();        
        return res.json({
            status: "Success",
            direcciones
        })
    } catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
};

export const findDireccion = async (req: Request, res: Response): Promise<Response> => {
    const id = req.params.id;

    try {
        const direcciones = await Direccion.findAll({
            where: {
                id_usuario: id
            }
        });
        return res.json({
            status: "Success",
            direcciones
        })
    } catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
};

// UPDATE ROLE FUNCTION
export const updateDireccion = async (req: Request, res: Response): Promise<Response> => {    
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = await Direccion.update(data, {
            where: {
                id_direccion: id
            }
        });
        
        if(resp[0] === 0) {
            return res.status(402).json({
                status: false,
                msj: "Direccion no encontrado"
            });
        }

        return res.json({
            status: true,
            msj: "Direccion actualizada",
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
export const deleteDireccion = async (req: Request, res: Response): Promise<Response> => {
    const id = req.params.id;

    try {
        const dir = await Direccion.findOne({
            where: {
                id_direccion: id
            }
        });        

        if(dir === null) {
            return res.status(402).json({
                status: false,
                msj: "Direccion no encontrado"
            });
        }

        await dir.destroy();
        return res.json({
            status: true,
            msj: "Direccion eliminada",
            dir
        });
    } catch (error) {
        return res.json({
            status: false, 
            error
        });
    }
};


