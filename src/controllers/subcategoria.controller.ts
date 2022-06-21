import Subcategoria from "../models/Subcategoria";
import { Request, Response } from "express";

// SAVE ROLE FUNCTION
export const saveSubcategoria = async (req: Request, res: Response): Promise<Response> => {
    try {
        const resp = await Subcategoria.create(req.body);
        return res.json({
            status: true,
            msj: "Subcategoria guardado correctamente",
            resp
        })        
    } catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar la Subcategoria",
            error
        })        
    }
};

// GET ROLES FUNCTION
export const getSubcategorias = async (req: Request, res: Response): Promise<Response> => { 
    //Promise<Response<any, Record<string, any>>>
    try {
        const subcategorias = await Subcategoria.findAll();        
        return res.json({
            status: "Success",
            subcategorias
        })
    } catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
};

// UPDATE ROLE FUNCTION
export const updateSubcategoria = async (req: Request, res: Response): Promise<Response> => {    
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = await Subcategoria.update(data, {
            where: {
                id_subcategoria: id
            }
        });
        
        if(resp[0] === 0) {
            return res.status(402).json({
                status: false,
                msj: "Subcategoria no encontrado"
            });
        }

        return res.json({
            status: true,
            msj: "Subcategoria actualizado",
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
export const deleteSubcategoria = async (req: Request, res: Response): Promise<Response> => {
    const id = req.params.id;

    try {
        const subcategoria = await Subcategoria.findOne({
            where: {
                id_subcategoria: id
            }
        });        

        if(subcategoria === null) {
            return res.status(402).json({
                status: false,
                msj: "Subcategoria no encontrado"
            });
        }

        await subcategoria.destroy();
        return res.json({
            status: true,
            msj: "Subcategoria eliminado",
            subcategoria
        });
    } catch (error) {
        return res.json({
            status: false, 
            error
        });
    }
};


