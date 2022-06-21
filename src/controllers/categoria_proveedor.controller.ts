import Categoria_Proveedor from "../models/Categoria_proveedor";
import { Request, Response } from "express";

// SAVE Categoria_Proveedor FUNCTION
export const saveCategoria_Proveedor = async (req: Request, res: Response): Promise<Response> => {
    try {
        const resp = await Categoria_Proveedor.create(req.body);
        return res.json({
            status: true,
            msj: "Categoria_Proveedor guardado correctamente",
            resp
        })        
    } catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar la Categoria_Proveedor",
            error
        })        
    }
};

// GET Categoria_Proveedors FUNCTION
export const getCategoria_Proveedores = async (req: Request, res: Response): Promise<Response> => { 
    //Promise<Response<any, Record<string, any>>>
    try {
        const categorias_p = await Categoria_Proveedor.findAll();        
        return res.json({
            status: "Success",
            categorias_p
        })
    } catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
};
export const findCategory = async (req: Request, res: Response): Promise<Response> => { 
    const id = req.params.id;

    try {
        const categorias_p = await Categoria_Proveedor.findOne({
            where: {
                id_categoria_proveedor: id
            }
        });        

        if(categorias_p === null) {
            return res.status(402).json({
                status: false,
                msj: "Categoria_Proveedor no encontrado"
            });
        }

        return res.json({
            status: true,
            categorias_p
        });
    } catch (error) {
        return res.json({
            status: false, 
            error
        });
    }
};

// UPDATE Categoria_Proveedor FUNCTION
/* export const updateCategoria_Proveedor = async (req: Request, res: Response): Promise<Response> => {    
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = await Categoria_Proveedor.update(data, {
            where: {
                id_Categoria_Proveedor: id
            }
        });
        
        if(resp[0] === 0) {
            return res.status(402).json({
                status: false,
                msj: "Categoria_Proveedor no encontrado"
            });
        }

        return res.json({
            status: true,
            msj: "Categoria_Proveedor actualizada",
            resp            
        });
    } catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
}; */

// DELETE Categoria_Proveedor FUNCTION
/* export const deleteCategoria_Proveedor = async (req: Request, res: Response): Promise<Response> => {
    const id = req.params.id;

    try {
        const categorias_p = await Categoria_Proveedor.findOne({
            where: {
                id_categoria_Proveedor: id
            }
        });        

        if(categorias_p === null) {
            return res.status(402).json({
                status: false,
                msj: "Categoria_Proveedor no encontrado"
            });
        }

        await categorias_p.destroy();
        return res.json({
            status: true,
            msj: "Categoria_Proveedor eliminado",
            categorias_p
        });
    } catch (error) {
        return res.json({
            status: false, 
            error
        });
    }
};

 */
