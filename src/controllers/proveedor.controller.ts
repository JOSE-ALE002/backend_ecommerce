import Proveedor from "../models/Proveedor"; 
import { Request, Response } from "express";

// SAVE Proveedor FUNCTION
export const saveProveedor = async (req: Request, res: Response): Promise<Response> => {
    try {
        const resp = await Proveedor.create(req.body);
        return res.json({
            status: true,
            msj: "Proveedor guardado correctamente",
            resp
        })        
    } catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar el proveedor",
            error
        })        
    }
};

// GET ProveedorS FUNCTION
export const getProveedores = async (req: Request, res: Response): Promise<Response> => { 
    //Promise<Response<any, Record<string, any>>>
    try {
        const proveedores = await Proveedor.findAll();        
        return res.json({
            status: "Success",
            proveedores
        })
    } catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
};

// UPDATE Proveedor FUNCTION
export const updateProveedor = async (req: Request, res: Response): Promise<Response> => {    
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = await Proveedor.update(data, {
            where: {
                id_proveedor: id
            }
        });
        
        if(resp[0] === 0) {
            return res.status(402).json({
                status: false,
                msj: "Proveedor no encontrado"
            });
        }

        return res.json({
            status: true,
            msj: "Proveedor actualizado",
            resp            
        });
    } catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
};

// DELETE Proveedor FUNCTION
export const deleteProveedor = async (req: Request, res: Response): Promise<Response> => {
    const id = req.params.id;

    try {
        const proveedor = await Proveedor.findOne({
            where: {
                id_proveedor: id
            }
        });        

        if(proveedor === null) {
            return res.status(402).json({
                status: false,
                msj: "Proveedor no encontrado"
            });
        }

        await proveedor.destroy();
        return res.json({
            status: true,
            msj: "Proveedor eliminado",
            proveedor
        });
    } catch (error) {
        return res.json({
            status: false, 
            error
        });
    }
};


