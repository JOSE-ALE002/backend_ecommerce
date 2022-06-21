import { verifyUser } from './../Middlewares/verifyUser';
import { verifyToken } from './../Middlewares/verifyToken';
import { Router } from "express";
import * as UsuarioCtrl from "../controllers/usuario.controller";

const router : Router = Router();

router.get("/", verifyToken, verifyUser, UsuarioCtrl.getUsuarios);

router.post("/save", verifyToken, verifyUser, UsuarioCtrl.saveUsuario);

router.put("/update/:id", verifyToken, UsuarioCtrl.updateUsuario);

router.delete("/delete/:id", verifyToken, verifyUser, UsuarioCtrl.deleteUsuario);

export default router;