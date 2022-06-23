import Orden from "../models/Orden";
import { Request, Response } from "express";

// SAVE ROLE FUNCTION
export const saveOrden = async (req: Request, res: Response): Promise<Response> => {
    try {
        const resp = await Orden.create(req.body);
        return res.json({
            status: true,
            msj: "Orden guardado correctamente",
            resp
        })        
    } catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar la Orden",
            error
        })        
    }
};

export const findOrden = async (req: Request, res: Response): Promise<Response> => {
    const id = req.params.id;

    try {
        const orden = await Orden.findOne({
            where: {
                id_orden: id
            }
        });

        if(orden === null) {
            return res.status(402).json({
                status: false,
                msj: "Orden no encontrado"
            });
        };
        
        return res.json({
            status: "Success",
            orden
        })
    } catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
};

// GET ROLES FUNCTION
export const getOrdenes = async (req: Request, res: Response): Promise<Response> => { 
    //Promise<Response<any, Record<string, any>>>
    try {
        const Ordens = await Orden.findAll();        
        return res.json({
            status: "Success",
            Ordens
        })
    } catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
};

// UPDATE ROLE FUNCTION
export const updateOrden = async (req: Request, res: Response): Promise<Response> => {    
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = await Orden.update(data, {
            where: {
                id_orden: id
            }
        });
        
        if(resp[0] === 0) {
            return res.status(402).json({
                status: false,
                msj: "Orden no encontrado"
            });
        }

        return res.json({
            status: true,
            msj: "Orden actualizado",
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
export const deleteOrden = async (req: Request, res: Response): Promise<Response> => {
    const id = req.params.id;

    try {
        const orden = await Orden.findOne({
            where: {
                id_orden: id
            }
        });        

        if(orden === null) {
            return res.status(402).json({
                status: false,
                msj: "Orden no encontrado"
            });
        }

        await orden.destroy();
        return res.json({
            status: true,
            msj: "Orden eliminado",
            orden
        });
    } catch (error) {
        return res.json({
            status: false, 
            error
        });
    }
};


