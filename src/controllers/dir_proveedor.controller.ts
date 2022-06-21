import DirProveedor from "../models/Detalle_proveedor";
import { Request, Response } from "express";

// SAVE ROLE FUNCTION
export const saveDirProveedor = async (req: Request, res: Response): Promise<Response> => {
    try {
        const resp = await DirProveedor.create(req.body);
        return res.json({
            status: true,
            msj: "Direccion de proveedor guardado correctamente",
            resp
        })        
    } catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar la direccion de proveedor",
            error
        })        
    }
};

// GET ROLES FUNCTION
export const getDirProveedores = async (req: Request, res: Response): Promise<Response> => { 
    //Promise<Response<any, Record<string, any>>>
    try {
        const direcciones_p = await DirProveedor.findAll();        
        return res.json({
            status: "Success",
            direcciones_p
        })
    } catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
};

// UPDATE ROLE FUNCTION
export const updateDirProveedor = async (req: Request, res: Response): Promise<Response> => {    
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = await DirProveedor.update(data, {
            where: {
                id_detalle_proveedor: id
            }
        });
        
        if(resp[0] === 0) {
            return res.status(402).json({
                status: false,
                msj: "Direccion de proveedor no encontrada"
            });
        }

        return res.json({
            status: true,
            msj: "Direccion de proveedor actualizada",
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
export const deleteDirProveedor = async (req: Request, res: Response): Promise<Response> => {
    const id = req.params.id;

    try {
        const dir = await DirProveedor.findOne({
            where: {
                id_detalle_proveedor: id
            }
        });        

        if(dir === null) {
            return res.status(402).json({
                status: false,
                msj: "Direccion de proveedor no encontrado"
            });
        }

        await dir.destroy();
        return res.json({
            status: true,
            msj: "Direccion de proveedor eliminada",
            dir
        });
    } catch (error) {
        return res.json({
            status: false, 
            error
        });
    }
};


