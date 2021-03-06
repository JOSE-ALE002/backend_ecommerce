import DetalleOrden from "../models/Detalle_orden";
import Orden from "../models/Orden";
import Producto from "../models/Producto";
import { Request, Response } from "express";

// SAVE ROLE FUNCTION
export const saveDetalleOrden = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id_orden, codigo_producto, cantidad_producto } = req.body;

        const orden = await Orden.findOne({
            where: id_orden
        }) as Orden;

        if (orden.getDataValue("estado_orden") as boolean === false) {
            const producto = await Producto.findOne({
                where: {
                    codigo_producto
                }
            }) as Producto;

            if (parseInt(cantidad_producto) <= parseInt(producto.getDataValue("stock"))) {
                let total_orden: number = parseInt(orden.getDataValue("total"));

                const precio: number = parseFloat(producto.getDataValue("precio_unitario"));
                let descuento_orden: number = parseFloat(producto.getDataValue("descuento"));
                let total: number = precio * parseInt(cantidad_producto);
                const desc: number = descuento_orden * total;

                total -= desc;

                total_orden += total;
                descuento_orden += total * 0.13;

                const resp = await DetalleOrden.create({
                    id_orden,
                    codigo_producto,
                    cantidad_producto,
                    subtotal: total
                });

                await orden.update({ total: total_orden });
                await orden.update({ impuestos: descuento_orden });

                return res.json({
                    status: true,
                    msj: "Pedido guardado correctamente",
                    resp
                });
            } else {
                return res.json({
                    status: "Failed",
                    msj: "No es posible realizar el pedido porque la cantidad supera al stock disponible del producto",
                });
            }
        } else {
            return res.json({
                status: true,
                msj: "La orden ya ha sido cancelada",
            });
        }
    } catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar la Pedido",
            error
        })
    }
};

export const findPedidos = async (req: Request, res: Response): Promise<Response> => {
    const id = req.params.id;

    try {
        const pedidos = await DetalleOrden.findAll({
            where: {
                id_orden: id
            }
        });
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

// GET ROLES FUNCTION
export const getDetalleOrden = async (req: Request, res: Response): Promise<Response> => {
    //Promise<Response<any, Record<string, any>>>
    try {
        const detalles = await DetalleOrden.findAll();
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
export const updateDetalleOrden = async (req: Request, res: Response): Promise<Response> => {
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = await DetalleOrden.update(data, {
            where: {
                id_detalle_orden: id
            }
        });

        if (resp[0] === 0) {
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
export const deleteDetalleOrden = async (req: Request, res: Response): Promise<Response> => {
    const id = req.params.id;

    try {
        const detalles = await DetalleOrden.findOne({
            where: {
                id_detalle_orden: id
            }
        });

        if (detalles === null) {
            return res.status(402).json({
                status: false,
                msj: "Pedido no encontrado"
            });
        }

        await detalles.destroy();
        return res.json({
            status: true,
            msj: "Pedido eliminado",
            detalles
        });
    } catch (error) {
        return res.json({
            status: false,
            error
        });
    }
};
