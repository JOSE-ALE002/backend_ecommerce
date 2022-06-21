import Producto from "../models/Producto";
import { Request, Response } from "express";

// SAVE ROLE FUNCTION
export const saveProducto = async (req: Request, res: Response): Promise<Response> => {
    try {
        const resp = await Producto.create(req.body);
        return res.json({
            status: true,
            msj: "Producto guardado correctamente",
            resp
        })        
    } catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar el Producto",
            error
        })        
    }
};

// GET ROLES FUNCTION
export const getProductos = async (req: Request, res: Response): Promise<Response> => { 
    //Promise<Response<any, Record<string, any>>>
    try {
        const productos = await Producto.findAll();        
        return res.json({
            status: "Success",
            productos
        })
    } catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
};

// UPDATE ROLE FUNCTION
export const updateProducto = async (req: Request, res: Response): Promise<Response> => {    
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = await Producto.update(data, {
            where: {
                id_producto: id
            }
        });
        
        if(resp[0] === 0) {
            return res.status(402).json({
                status: false,
                msj: "Producto no encontrado"
            });
        }

        return res.json({
            status: true,
            msj: "Producto actualizado",
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
export const deleteProducto = async (req: Request, res: Response): Promise<Response> => {
    const id = req.params.id;

    try {
        const producto = await Producto.findOne({
            where: {
                id_producto: id
            }
        });        

        if(producto === null) {
            return res.status(402).json({
                status: false,
                msj: "Producto no encontrado"
            });
        }

        await producto.destroy();
        return res.json({
            status: true,
            msj: "Producto eliminado",
            producto
        });
    } catch (error) {
        return res.json({
            status: false, 
            error
        });
    }
};


