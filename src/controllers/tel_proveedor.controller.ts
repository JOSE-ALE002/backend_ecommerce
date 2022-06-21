import Tel_Proveedor from "../models/Tel_proveedor";
import { Request, Response } from "express";

// SAVE ROLE FUNCTION
export const saveTel_Proveedor = async (req: Request, res: Response): Promise<Response> => {
    try {
        const resp = await Tel_Proveedor.create(req.body);
        return res.json({
            status: true,
            msj: "Tel_Proveedor guardado correctamente",
            resp
        })        
    } catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar la Tel_Proveedor",
            error
        })        
    }
};

// GET ROLES FUNCTION
export const getTel_Proveedores = async (req: Request, res: Response): Promise<Response> => { 
    //Promise<Response<any, Record<string, any>>>
    try {
        const telefonos_p = await Tel_Proveedor.findAll();        
        return res.json({
            status: "Success",
            telefonos_p
        })
    } catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
};

// UPDATE ROLE FUNCTION
export const updateTel_Proveedor = async (req: Request, res: Response): Promise<Response> => {    
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = await Tel_Proveedor.update(data, {
            where: {
                id_telefono_proveedor: id
            }
        });
        
        if(resp[0] === 0) {
            return res.status(402).json({
                status: false,
                msj: "Tel_Proveedor no encontrado"
            });
        }

        return res.json({
            status: true,
            msj: "Tel_Proveedor actualizado",
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
export const deleteTel_Proveedor = async (req: Request, res: Response): Promise<Response> => {
    const id = req.params.id;

    try {
        const tel_p = await Tel_Proveedor.findOne({
            where: {
                id_telefono_proveedor: id
            }
        });        

        if(tel_p === null) {
            return res.status(402).json({
                status: false,
                msj: "Tel_Proveedor no encontrado"
            });
        }

        await tel_p.destroy();
        return res.json({
            status: true,
            msj: "Tel_Proveedor eliminado",
            tel_p
        });
    } catch (error) {
        return res.json({
            status: false, 
            error
        });
    }
};


