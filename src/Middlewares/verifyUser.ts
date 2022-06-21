import { verify } from "jsonwebtoken";
import Usuario from "../models/Usuario";
import e, { Request, Response, NextFunction } from "express";

interface IPayload {
    id: number,
    iat: number,
    exp: number
}

export const verifyUser = async (req: Request, res: Response, next: NextFunction) => {
    const user = await Usuario.findOne({
        where: {
            id_usuario: req.userId
        }
    }) as Usuario;
    
    if(user.getDataValue("id_tipo_usuario") as number == 3) {
        return res.json({
            status: false,
            msj: "Usuario no autorizado"            
        });     
    } else {
        next()
    }
};