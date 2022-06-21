import Transaccion from "../models/Transaccion"; 
import { Request, Response } from "express";

// SAVE Transaccion FUNCTION
export const saveTransaccion = async (req: Request, res: Response): Promise<Response> => {
    try {
        const resp = await Transaccion.create(req.body);
        return res.json({
            status: true,
            msj: "Transaccion guardado correctamente",
            resp
        })        
    } catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar el Transaccion",
            error
        })        
    }
};

// GET TransaccionS FUNCTION
export const getTransacciones = async (req: Request, res: Response): Promise<Response> => { 
    //Promise<Response<any, Record<string, any>>>
    try {
        const transacciones = await Transaccion.findAll();        
        return res.json({
            status: "Success",
            transacciones
        })
    } catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
};

// UPDATE Transaccion FUNCTION
export const updateTransaccion = async (req: Request, res: Response): Promise<Response> => {    
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = await Transaccion.update(data, {
            where: {
                id_transaccion: id
            }
        });
        
        if(resp[0] === 0) {
            return res.status(402).json({
                status: false,
                msj: "Transaccion no encontrado"
            });
        }

        return res.json({
            status: true,
            msj: "Transaccion actualizado",
            resp            
        });
    } catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
};

// DELETE Transaccion FUNCTION
export const deleteTransaccion = async (req: Request, res: Response): Promise<Response> => {
    const id = req.params.id;

    try {
        const transaccion = await Transaccion.findOne({
            where: {
                id_transaccion: id
            }
        });        

        if(transaccion === null) {
            return res.status(402).json({
                status: false,
                msj: "Transaccion no encontrado"
            });
        }

        await transaccion.destroy();
        return res.json({
            status: true,
            msj: "Transaccion eliminado",
            transaccion
        });
    } catch (error) {
        return res.json({
            status: false, 
            error
        });
    }
};


