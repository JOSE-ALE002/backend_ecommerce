import { genSalt, hash } from 'bcrypt';
import Usuario from "../models/Usuario";
import { Request, Response } from "express";

// SAVE ROLE FUNCTION
export const saveUsuario = async (req: Request, res: Response): Promise<Response> => {

    req.body.pass = await hash(req.body.pass, await genSalt(10)); 
    try {       
        const resp = await Usuario.create(req.body);
    
        return res.status(200).json({
            status: true,
            msj: "Usuario guardado correctamente",
            resp,
        })        
    } catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar la Usuario",
            error
        })        
    }
};

// GET ROLES FUNCTION
export const getUsuarios = async (req: Request, res: Response): Promise<Response> => { 
    //Promise<Response<any, Record<string, any>>>
    try {
        const users = await Usuario.findAll();        
        return res.json({
            status: "Success",
            users
        })
    } catch (error) {
        return res.json({
            status: "Failed",
            error
        });
    }
};

// UPDATE ROLE FUNCTION
export const updateUsuario = async (req: Request, res: Response): Promise<Response> => {    
    const data = req.body;
    const id = req.params.id;
    try {
        const resp = await Usuario.update(data, {
            where: {
                id_usuario: id
            }
        });
        
        if(resp[0] === 0) {
            return res.status(402).json({
                status: false,
                msj: "Usuario no encontrado"
            });
        }

        return res.json({
            status: true,
            msj: "Usuario actualizado",
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
export const deleteUsuario = async (req: Request, res: Response): Promise<Response> => {
    const id = req.params.id;

    try {
        const user = await Usuario.findOne({
            where: {
                id_usuario: id
            }
        });        

        if(user === null) {
            return res.status(402).json({
                status: false,
                msj: "Usuario no encontrado"
            });
        }

        await user.destroy();
        return res.json({
            status: true,
            msj: "Usuario eliminado",
            user
        });
    } catch (error) {
        return res.json({
            status: false, 
            error
        });
    }
};
