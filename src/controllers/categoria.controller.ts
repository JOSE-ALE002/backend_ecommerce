import Categoria from "../models/Categoria";
import { Request, Response } from "express";

// SAVE Categoria FUNCTION
export const saveCategoria = async (req: Request, res: Response): Promise<Response> => {
    try {
        const resp = await Categoria.create(req.body);
        return res.json({
            status: true,
            msj: "Categoria guardada correctamente",
            resp
        })        
    } catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar la categoria",
            error
        })        
    }
};

// GET Categorias FUNCTION
export const getCategorias = async (req: Request, res: Response): Promise<Response> => { 
    //Promise<Response<any, Record<string, any>>>
    try {
        const categorias = await Categoria.findAll();        
        return res.json({
            status: "Success",
            categorias
        })
    } catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
};

// UPDATE Categoria FUNCTION
export const updateCategoria = async (req: Request, res: Response): Promise<Response> => {    
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = await Categoria.update(data, {
            where: {
                id_categoria: id
            }
        });
        
        if(resp[0] === 0) {
            return res.status(402).json({
                status: false,
                msj: "Categoria no encontrada"
            });
        }

        return res.json({
            status: true,
            msj: "Categoria actualizada",
            resp            
        });
    } catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
};

// DELETE Categoria FUNCTION
export const deleteCategoria = async (req: Request, res: Response): Promise<Response> => {
    const id = req.params.id;

    try {
        const categoria = await Categoria.findOne({
            where: {
                id_categoria: id
            }
        });        

        if(categoria === null) {
            return res.status(402).json({
                status: false,
                msj: "Categoria no encontrada"
            });
        }

        await categoria.destroy();
        return res.json({
            status: true,
            msj: "Categoria eliminada",
            categoria
        });
    } catch (error) {
        return res.json({
            status: false, 
            error
        });
    }
};


