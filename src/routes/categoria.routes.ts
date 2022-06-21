import { Router } from "express";
import { verifyUser } from './../Middlewares/verifyUser';
import { verifyToken } from './../Middlewares/verifyToken';
import * as CategoriaCtrl from "../controllers/categoria.controller";

const router : Router = Router();

router.get("/", verifyToken, verifyUser, CategoriaCtrl.getCategorias);

router.post("/save", verifyToken, verifyUser, CategoriaCtrl.saveCategoria);

router.put("/update/:id", verifyToken, verifyUser, CategoriaCtrl.updateCategoria);

router.delete("/delete/:id", verifyToken, verifyUser, CategoriaCtrl.deleteCategoria);

export default router;