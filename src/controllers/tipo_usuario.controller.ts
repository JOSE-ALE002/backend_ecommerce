import Tipo_usuario from "../models/Tipo_usuario";
import { Request, Response } from "express";

// SAVE Tipo_usuario FUNCTION
export const saveTipoUsuario = async (req: Request, res: Response): Promise<Response> => {
    try {
        const resp = await Tipo_usuario.create(req.body);
        return res.json({
            status: true,
            msj: "Tipo_usuario guardado correctamente",
            resp
        })
    } catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar el Tipo_usuario",
            error
        })
    }
};

// GET Tipo_usuarioS FUNCTION
export const getTipoUsuarios = async (req: Request, res: Response): Promise<Response> => {
    //Promise<Response<any, Record<string, any>>>
    try {
        const tipo_usuarios = await Tipo_usuario.findAll();
        return res.json({
            status: "Success",
            tipo_usuarios
        })
    } catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
};

// UPDATE Tipo_usuario FUNCTION
export const updateTipoUsuario = async (req: Request, res: Response): Promise<Response> => {
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = await Tipo_usuario.update(data, {
            where: {
                id_tipo_usuario: id
            }
        });

        if (resp[0] === 0) {
            return res.status(402).json({
                status: false,
                msj: "Tipo_usuario no encontrado"
            });
        }

        return res.json({
            status: true,
            msj: "Tipo_usuario actualizado",
            resp
        });
    } catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
};

// DELETE Tipo_usuario FUNCTION
export const deleteTipoUsuario = async (req: Request, res: Response) => {
    const id = req.params.id;

    try {
        const tipo_user = await Tipo_usuario.findOne({
            where: {
                id_tipo_usuario: id
            }
        });

        if (tipo_user === null) {
            console.log("Si es nulo");

            return res.status(402).json({
                status: false,
                msj: "Tipo_usuario no encontrado"
            });
        } else {

            console.log("No es nulo");
            await tipo_user.destroy();
            return res.json({
                status: true,
                msj: "Tipo_usuario eliminado",
                tipo_user
            });
        }

    } catch (error) {
        return res.json({
            status: false,
            error
        });
    }
};


