import { verifyUser } from './../Middlewares/verifyUser';
import { verifyToken } from './../Middlewares/verifyToken';
import { Router } from "express";
import Usuario from "../models/Usuario";
import { compare, hash,genSalt } from "bcrypt";
import { sign, verify } from 'jsonwebtoken';

const router: Router = Router();

router.post("/signup", async (req, res) => {
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
});

router.post("/login", async (req, res) => {
    const { email, pass } = req.body;
    const user = await Usuario.findOne({
        where: {
            email: email
        }
    }) as Usuario;
    
    if (user === null) {
        return res.status(402).json({
            status: false,
            msj: "Usuario no encontrado"
        });
    }
    
    const resp = await compare(pass, user.getDataValue("pass"))    ;

    if(resp) {    
        const token = sign({ id: user.getDataValue("id_usuario")}, process.env.SECRET!, {
            expiresIn: 60 * 60 * 24
        });        

        return res.json({
            status: true,
            token
        }); 
    } else {
        return res.json({
            status: false,
            msj: "No autorizado",
            token: null
        }); 
    }     
});

router.get("/me", verifyToken, verifyUser, async (req, res) => {
    const user = await Usuario.findOne({
        where: {
            id_usuario: req.userId
        }
    }) as Usuario;
    
    if(user !== null) {
        return res.json({
            profile: user
        });    
    } else {
        console.log("Usuario no encontrado");        
        return res.json({
            status: "false",
            user: null,
            msj: "Usuario no encontrado"
        })
    }
});

export default router;