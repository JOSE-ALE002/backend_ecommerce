import DetalleOrden from "../models/Detalle_orden";
import { Request, Response } from "express";

// SAVE ROLE FUNCTION
export const saveDetalleOrden = async (req: Request, res: Response): Promise<Response> => {
    try {
        const resp = await DetalleOrden.create(req.body);
        return res.json({
            status: true,
            msj: "DetalleOrden guardado correctamente",
            resp
        })        
    } catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar la DetalleOrden",
            error
        })        
    }
};

// GET ROLES FUNCTION
export const getDetalleOrden = async (req: Request, res: Response): Promise<Response> => { 
    //Promise<Response<any, Record<string, any>>>
    try {
        const detalles = await DetalleOrden.findAll();        
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
export const updateDetalleOrden = async (req: Request, res: Response): Promise<Response> => {    
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = await DetalleOrden.update(data, {
            where: {
                id_detalle_orden: id
            }
        });
        
        if(resp[0] === 0) {
            return res.status(402).json({
                status: false,
                msj: "DetalleOrden no encontrado"
            });
        }

        return res.json({
            status: true,
            msj: "DetalleOrden actualizado",
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
export const deleteDetalleOrden = async (req: Request, res: Response): Promise<Response> => {
    const id = req.params.id;

    try {
        const detalles = await DetalleOrden.findOne({
            where: {
                id_detalle_orden: id
            }
        });        

        if(detalles === null) {
            return res.status(402).json({
                status: false,
                msj: "DetalleOrden no encontrado"
            });
        }

        await detalles.destroy();
        return res.json({
            status: true,
            msj: "DetalleOrden eliminado",
            detalles
        });
    } catch (error) {
        return res.json({
            status: false, 
            error
        });
    }
};
