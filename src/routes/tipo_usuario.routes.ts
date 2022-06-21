import { verifyUser } from './../Middlewares/verifyUser';
import { verifyToken } from './../Middlewares/verifyToken';
import { Router } from "express";
import * as Tipo_usuario from "../controllers/tipo_usuario.controller";

const router : Router = Router();

router.get("/", verifyToken, verifyUser, Tipo_usuario.getTipoUsuarios);

router.post("/save", verifyToken, verifyUser, Tipo_usuario.saveTipoUsuario);

router.put("/update/:id", verifyToken, verifyUser, Tipo_usuario.updateTipoUsuario);

router.delete("/delete/:id", verifyToken, verifyUser, Tipo_usuario.deleteTipoUsuario);

export default router;