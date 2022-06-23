import PedidoProveedor from "../models/Pedido_proveedor";
import { Request, Response } from "express";

// SAVE ROLE FUNCTION
export const savePedidoProveedor = async (req: Request, res: Response): Promise<Response> => {
    try {
        const resp = await PedidoProveedor.create(req.body);
        return res.json({
            status: true,
            msj: "Pedido guardado correctamente",
            resp
        })        
    } catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar la Pedido",
            error
        })        
    }
};

// GET ROLES FUNCTION
export const getPedidosProveedor = async (req: Request, res: Response): Promise<Response> => { 
    //Promise<Response<any, Record<string, any>>>
    try {
        const pedidos = await PedidoProveedor.findAll();        
        return res.json({
            status: "Success",
            pedidos
        })
    } catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
};

// UPDATE ROLE FUNCTION
export const updatePedidoProveedor = async (req: Request, res: Response): Promise<Response> => {    
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = await PedidoProveedor.update(data, {
            where: {
                id_pedido: id
            }
        });
        
        if(resp[0] === 0) {
            return res.status(402).json({
                status: false,
                msj: "Pedido no encontrado"
            });
        }

        return res.json({
            status: true,
            msj: "Pedido actualizado",
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
export const deletePedidoProveedor = async (req: Request, res: Response): Promise<Response> => {
    const id = req.params.id;

    try {
        const pedido = await PedidoProveedor.findOne({
            where: {
                id_pedido: id
            }
        });        

        if(pedido === null) {
            return res.status(402).json({
                status: false,
                msj: "Pedido no encontrado"
            });
        }

        await pedido.destroy();
        return res.json({
            status: true,
            msj: "Pedido eliminado",
            pedido
        });
    } catch (error) {
        return res.json({
            status: false, 
            error
        });
    }
};


