import DetalleTarjeta from "../models/Detalle_tarjeta";
import { Request, Response } from "express";

// SAVE ROLE FUNCTION
export const saveDetalleTarjeta = async (req: Request, res: Response): Promise<Response> => {
    try {
        const resp = await DetalleTarjeta.create(req.body);
        return res.json({
            status: true,
            msj: "DetalleTarjeta guardado correctamente",
            resp
        })        
    } catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar la DetalleTarjeta",
            error
        })        
    }
};

// GET ROLES FUNCTION
export const getDetallesTarjeta = async (req: Request, res: Response): Promise<Response> => { 
    //Promise<Response<any, Record<string, any>>>
    try {
        const detalles = await DetalleTarjeta.findAll();        
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
export const updateDetalleTarjeta = async (req: Request, res: Response): Promise<Response> => {    
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = await DetalleTarjeta.update(data, {
            where: {
                numero_tarjeta: id
            }
        });
        
        if(resp[0] === 0) {
            return res.status(402).json({
                status: false,
                msj: "DetalleTarjeta no encontrado"
            });
        }

        return res.json({
            status: true,
            msj: "DetalleTarjeta actualizado",
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
export const deleteDetalleTarjeta = async (req: Request, res: Response): Promise<Response> => {
    const id = req.params.id;

    try {
        const detalles = await DetalleTarjeta.findOne({
            where: {
                numero_tarjeta: id
            }
        });        

        if(detalles === null) {
            return res.status(402).json({
                status: false,
                msj: "DetalleTarjeta no encontrado"
            });
        }

        await detalles.destroy();
        return res.json({
            status: true,
            msj: "DetalleTarjeta eliminado",
            detalles
        });
    } catch (error) {
        return res.json({
            status: false, 
            error
        });
    }
};
