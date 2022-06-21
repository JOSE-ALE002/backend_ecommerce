import Departamento from "../models/Departamento";
import { Request, Response } from "express";

// SAVE ROLE FUNCTION
export const saveDepartamento = async (req: Request, res: Response): Promise<Response> => {
    try {
        const resp = await Departamento.create(req.body);
        return res.json({
            status: true,
            msj: "Departamento guardado correctamente",
            resp
        })        
    } catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar la Departamento",
            error
        })        
    }
};

// GET ROLES FUNCTION
export const getDepartamentos = async (req: Request, res: Response): Promise<Response> => { 
    //Promise<Response<any, Record<string, any>>>
    try {
        const dptos = await Departamento.findAll();        
        return res.json({
            status: "Success",
            dptos
        })
    } catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
};

// UPDATE ROLE FUNCTION
export const updateDepartamento = async (req: Request, res: Response): Promise<Response> => {    
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = await Departamento.update(data, {
            where: {
                codigo_departamento: id
            }
        });
        
        if(resp[0] === 0) {
            return res.status(402).json({
                status: false,
                msj: "Departamento no encontrado"
            });
        }

        return res.json({
            status: true,
            msj: "Departamento actualizado",
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
export const deleteDepartamento = async (req: Request, res: Response): Promise<Response> => {
    const id = req.params.id;

    try {
        const departamento = await Departamento.findOne({
            where: {
                codigo_departamento: id
            }
        });        

        if(departamento === null) {
            return res.status(402).json({
                status: false,
                msj: "Departamento no encontrado"
            });
        }

        await departamento.destroy();
        return res.json({
            status: true,
            msj: "Departamento eliminado",
            departamento
        });
    } catch (error) {
        return res.json({
            status: false, 
            error
        });
    }
};
