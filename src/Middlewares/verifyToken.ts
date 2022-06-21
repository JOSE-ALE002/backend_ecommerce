import { verify } from "jsonwebtoken";
import e, { Request, Response, NextFunction } from "express";

interface IPayload {
    id: number,
    iat: number,
    exp: number
}

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('auth-token');    
    if(!token) return res.status(401).json({        
        status: "Failed", 
        msj: 'Acceso denegado'
    });

    const payload = verify(token, process.env.SECRET!) as IPayload;
    
    req.userId = payload.id;
    next();
};