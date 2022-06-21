import ListaDeseo from "../models/Lista_deseo";
import { Request, Response } from "express";

// SAVE ROLE FUNCTION
export const saveListaDeseo = async (req: Request, res: Response): Promise<Response> => {
    try {
        const resp = await ListaDeseo.create(req.body);
        return res.json({
            status: true,
            msj: "ListaDeseo guardado correctamente",
            resp
        })        
    } catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar la ListaDeseo",
            error
        })        
    }
};

// GET ROLES FUNCTION
export const getListaDeseos = async (req: Request, res: Response): Promise<Response> => { 
    //Promise<Response<any, Record<string, any>>>
    try {
        const detalles = await ListaDeseo.findAll();        
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
/* export const updateListaDeseo = async (req: Request, res: Response): Promise<Response> => {    
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = await ListaDeseo.update(data, {
            where: {
                id_ListaDeseo: id
            }
        });
        
        if(resp[0] === 0) {
            return res.status(402).json({
                status: false,
                msj: "ListaDeseo no encontrado"
            });
        }

        return res.json({
            status: true,
            msj: "ListaDeseo actualizado",
            resp            
        });
    } catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
}; */

// DELETE ROLE FUNCTION
/* export const deleteListaDeseo = async (req: Request, res: Response): Promise<Response> => {
    const id = req.params.id;

    try {
        const ListaDeseo = await ListaDeseo.findOne({
            where: {
                id_ListaDeseo: id
            }
        });        

        if(ListaDeseo === null) {
            return res.status(402).json({
                status: false,
                msj: "ListaDeseo no encontrado"
            });
        }

        await ListaDeseo.destroy();
        return res.json({
            status: true,
            msj: "ListaDeseo eliminado",
            ListaDeseo
        });
    } catch (error) {
        return res.json({
            status: false, 
            error
        });
    }
}; */
