import PuestoEmpresa from "../models/Puesto_empresa"; 
import { Request, Response } from "express";

// SAVE PuestoEmpresa FUNCTION
export const savePuestoEmpresa = async (req: Request, res: Response): Promise<Response> => {
    try {
        const resp = await PuestoEmpresa.create(req.body);
        return res.json({
            status: true,
            msj: "PuestoEmpresa guardado correctamente",
            resp
        })        
    } catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar el PuestoEmpresa",
            error
        })        
    }
};

// GET PuestoEmpresaS FUNCTION
export const getPuestosEmpresa = async (req: Request, res: Response): Promise<Response> => { 
    //Promise<Response<any, Record<string, any>>>
    try {
        const puestos = await PuestoEmpresa.findAll();        
        return res.json({
            status: "Success",
            puestos
        })
    } catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
};

// UPDATE PuestoEmpresa FUNCTION
export const updatePuestoEmpresa = async (req: Request, res: Response): Promise<Response> => {    
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = await PuestoEmpresa.update(data, {
            where: {
                id_puesto_empresa: id
            }
        });
        
        if(resp[0] === 0) {
            return res.status(402).json({
                status: false,
                msj: "PuestoEmpresa no encontrado"
            });
        }

        return res.json({
            status: true,
            msj: "PuestoEmpresa actualizado",
            resp            
        });
    } catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
};

// DELETE PuestoEmpresa FUNCTION
export const deletePuestoEmpresa = async (req: Request, res: Response): Promise<Response> => {
    const id = req.params.id;

    try {
        const puesto = await PuestoEmpresa.findOne({
            where: {
                id_puesto_empresa: id
            }
        });        

        if(puesto === null) {
            return res.status(402).json({
                status: false,
                msj: "PuestoEmpresa no encontrado"
            });
        }

        await puesto.destroy();
        return res.json({
            status: true,
            msj: "Rol eliminado",
            puesto
        });
    } catch (error) {
        return res.json({
            status: false, 
            error
        });
    }
};


