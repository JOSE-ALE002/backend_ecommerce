import { Router } from "express";
import * as UsuarioCtrl from "../controllers/usuario.controller";

const router : Router = Router();

router.get("/", UsuarioCtrl.getUsuarios);

router.post("/save", UsuarioCtrl.saveUsuario);

router.put("/update/:id", UsuarioCtrl.updateUsuario);

router.delete("/delete/:id", UsuarioCtrl.deleteUsuario);

export default router;