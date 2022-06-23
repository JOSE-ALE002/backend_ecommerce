import DptoEmpresa from "../models/Departamento_empresa";
import { Request, Response } from "express";

// SAVE ROLE FUNCTION
export const saveDptoEmpresa = async (req: Request, res: Response): Promise<Response> => {
    try {
        const resp = await DptoEmpresa.create(req.body);
        return res.json({
            status: true,
            msj: "Dpto_Empresa guardado correctamente",
            resp
        })        
    } catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar la DptoEmpresa",
            error
        })        
    }
};

// GET ROLES FUNCTION
export const getDptosEmpresa = async (req: Request, res: Response): Promise<Response> => { 
    //Promise<Response<any, Record<string, any>>>
    try {
        const dptos = await DptoEmpresa.findAll();        
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
export const updateDptoEmpresa = async (req: Request, res: Response): Promise<Response> => {    
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = await DptoEmpresa.update(data, {
            where: {
                id_departamento_empresa: id
            }
        });
        
        if(resp[0] === 0) {
            return res.status(402).json({
                status: false,
                msj: "Dpto_Empresa no encontrado"
            });
        }

        return res.json({
            status: true,
            msj: "Dpto_Empresa actualizado",
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
export const deleteDptoEmpresa = async (req: Request, res: Response): Promise<Response> => {
    const id = req.params.id;

    try {
        const dptoEmpresa = await DptoEmpresa.findOne({
            where: {
                id_departamento_empresa: id
            }
        });        

        if(dptoEmpresa === null) {
            return res.status(402).json({
                status: false,
                msj: "Dpto_Empresa no encontrado"
            });
        }

        await dptoEmpresa.destroy();
        return res.json({
            status: true,
            msj: "Dpto_Empresa eliminado",
            dptoEmpresa
        });
    } catch (error) {
        return res.json({
            status: false, 
            error
        });
    }
};


