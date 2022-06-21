import tipo_tarjeta from "../models/Tipo_tarjeta";
import { Request, Response } from "express";

// SAVE tipo_tarjeta FUNCTION
export const saveTipoTarjeta = async (req: Request, res: Response): Promise<Response> => {
    try {
        const resp = await tipo_tarjeta.create(req.body);
        return res.json({
            status: true,
            msj: "tipo_tarjeta guardado correctamente",
            resp
        })
    } catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar el tipo_tarjeta",
            error
        })
    }
};

// GET tipo_tarjetaS FUNCTION
export const getTipoTarjetas = async (req: Request, res: Response): Promise<Response> => {
    //Promise<Response<any, Record<string, any>>>
    try {
        const tipo_tarjetas = await tipo_tarjeta.findAll();
        return res.json({
            status: "Success",
            tipo_tarjetas
        })
    } catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
};

// UPDATE tipo_tarjeta FUNCTION
export const updateTipoTarjeta = async (req: Request, res: Response): Promise<Response> => {
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = await tipo_tarjeta.update(data, {
            where: {
                id_tipo_tarjeta: id
            }
        });

        if (resp[0] === 0) {
            return res.status(402).json({
                status: false,
                msj: "tipo_tarjeta no encontrado"
            });
        }

        return res.json({
            status: true,
            msj: "tipo_tarjeta actualizado",
            resp
        });
    } catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
};

// DELETE tipo_tarjeta FUNCTION
export const deleteTipoTarjeta = async (req: Request, res: Response) => {
    const id = req.params.id;

    try {
        const tipo_t = await tipo_tarjeta.findOne({
            where: {
                id_tipo_tarjeta: id
            }
        });

        if (tipo_t === null) {
            console.log("Si es nulo");

            return res.status(402).json({
                status: false,
                msj: "tipo_tarjeta no encontrado"
            });
        } else {

            console.log("No es nulo");
            await tipo_t.destroy();
            return res.json({
                status: true,
                msj: "tipo_tarjeta eliminado",
                tipo_t
            });
        }

    } catch (error) {
        return res.json({
            status: false,
            error
        });
    }
};


