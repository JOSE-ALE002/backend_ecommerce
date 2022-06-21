import { Router } from "express";
import { verifyUser } from './../Middlewares/verifyUser';
import { verifyToken } from './../Middlewares/verifyToken';
import * as SubcategoriaCtrl from "../controllers/subcategoria.controller";

const router : Router = Router();

router.get("/", verifyToken, verifyUser, SubcategoriaCtrl.getSubcategorias);

router.post("/save", verifyToken, verifyUser, SubcategoriaCtrl.saveSubcategoria);

router.put("/update/:id", verifyToken, verifyUser, SubcategoriaCtrl.updateSubcategoria);

router.delete("/delete/:id", verifyToken, verifyUser, SubcategoriaCtrl.deleteSubcategoria);

export default router;