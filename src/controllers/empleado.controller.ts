import Empleado from "../models/Empleado";
import { Request, Response } from "express";

// SAVE ROLE FUNCTION
export const saveEmpleado = async (req: Request, res: Response): Promise<Response> => {
    try {
        const resp = await Empleado.create(req.body);
        return res.json({
            status: true,
            msj: "Empleado guardado correctamente",
            resp
        })        
    } catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar la Empleado",
            error
        })        
    }
};

// GET ROLES FUNCTION
export const getEmpleados = async (req: Request, res: Response): Promise<Response> => { 
    //Promise<Response<any, Record<string, any>>>
    try {
        const detalles = await Empleado.findAll();        
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
export const updateEmpleado = async (req: Request, res: Response): Promise<Response> => {    
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = await Empleado.update(data, {
            where: {
                id_empleado: id
            }
        });
        
        if(resp[0] === 0) {
            return res.status(402).json({
                status: false,
                msj: "Empleado no encontrado"
            });
        }

        return res.json({
            status: true,
            msj: "Empleado actualizado",
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
export const deleteEmpleado = async (req: Request, res: Response): Promise<Response> => {
    const id = req.params.id;

    try {
        const empleado = await Empleado.findOne({
            where: {
                id_empleado: id
            }
        });        

        if(empleado === null) {
            return res.status(402).json({
                status: false,
                msj: "Empleado no encontrado"
            });
        }

        await empleado.destroy();
        return res.json({
            status: true,
            msj: "Empleado eliminado",
            empleado
        });
    } catch (error) {
        return res.json({
            status: false, 
            error
        });
    }
};
