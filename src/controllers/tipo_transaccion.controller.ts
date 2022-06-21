import Tipo_transaccion from "../models/Tipo_transaccion"; 
import { Request, Response } from "express";

// SAVE Tipo_transaccion FUNCTION
export const saveTipo_transaccion = async (req: Request, res: Response): Promise<Response> => {
    try {
        const resp = await Tipo_transaccion.create(req.body);
        return res.json({
            status: true,
            msj: "Tipo_transaccion guardado correctamente",
            resp
        })        
    } catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar el Tipo_transaccion",
            error
        })        
    }
};

// GET Tipo_transaccionS FUNCTION
export const getTipo_transacciones = async (req: Request, res: Response): Promise<Response> => { 
    //Promise<Response<any, Record<string, any>>>
    try {
        const Tipo_transacciones = await Tipo_transaccion.findAll();        
        return res.json({
            status: "Success",
            Tipo_transacciones
        })
    } catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
};

// UPDATE Tipo_transaccion FUNCTION
export const updateTipo_transaccion = async (req: Request, res: Response): Promise<Response> => {    
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = await Tipo_transaccion.update(data, {
            where: {
                id_tipo_transaccion: id
            }
        });
        
        if(resp[0] === 0) {
            return res.status(402).json({
                status: false,
                msj: "Tipo_transaccion no encontrado"
            });
        }

        return res.json({
            status: true,
            msj: "Tipo_transaccion actualizado",
            resp            
        });
    } catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
};

// DELETE Tipo_transaccion FUNCTION
export const deleteTipo_transaccion = async (req: Request, res: Response): Promise<Response> => {
    const id = req.params.id;

    try {
        const tipo_t = await Tipo_transaccion.findOne({
            where: {
                id_tipo_transaccion: id
            }
        });        

        if(tipo_t === null) {
            return res.status(402).json({
                status: false,
                msj: "Tipo_transaccion no encontrado"
            });
        }

        await tipo_t.destroy();
        return res.json({
            status: true,
            msj: "Tipo_transaccion eliminado",
            tipo_t
        });
    } catch (error) {
        return res.json({
            status: false, 
            error
        });
    }
};


