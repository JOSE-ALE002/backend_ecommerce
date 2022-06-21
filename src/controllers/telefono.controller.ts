import Telefono from "../models/Telefono";
import { Request, Response } from "express";

// SAVE ROLE FUNCTION
export const saveTelefono = async (req: Request, res: Response): Promise<Response> => {
    try {
        const resp = await Telefono.create(req.body);
        return res.json({
            status: true,
            msj: "Telefono guardado correctamente",
            resp
        })        
    } catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar la Telefono",
            error
        })        
    }
};

// GET ROLES FUNCTION
export const getTelefonos = async (req: Request, res: Response): Promise<Response> => { 
    //Promise<Response<any, Record<string, any>>>
    try {
        const telefonos = await Telefono.findAll();        
        return res.json({
            status: "Success",
            telefonos
        })
    } catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
};

// UPDATE ROLE FUNCTION
export const updateTelefono = async (req: Request, res: Response): Promise<Response> => {    
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = await Telefono.update(data, {
            where: {
                id_telefono: id
            }
        });
        
        if(resp[0] === 0) {
            return res.status(402).json({
                status: false,
                msj: "Telefono no encontrado"
            });
        }

        return res.json({
            status: true,
            msj: "Telefono actualizado",
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
export const deleteTelefono = async (req: Request, res: Response): Promise<Response> => {
    const id = req.params.id;

    try {
        const tel = await Telefono.findOne({
            where: {
                id_telefono: id
            }
        });        

        if(tel === null) {
            return res.status(402).json({
                status: false,
                msj: "Telefono no encontrado"
            });
        }

        await tel.destroy();
        return res.json({
            status: true,
            msj: "Telefono eliminado",
            tel
        });
    } catch (error) {
        return res.json({
            status: false, 
            error
        });
    }
};


