import { Router } from "express";
import { verifyUser } from './../Middlewares/verifyUser';
import { verifyToken } from './../Middlewares/verifyToken';
import * as PuestoEmpresa from "../controllers/puesto_empresa.controller";

const router : Router = Router();

router.get("/", verifyToken, verifyUser, PuestoEmpresa.getPuestosEmpresa);

router.post("/save", verifyToken, verifyUser, PuestoEmpresa.savePuestoEmpresa);

router.put("/update/:id", verifyToken, verifyUser, PuestoEmpresa.updatePuestoEmpresa);   

router.delete("/delete/:id", verifyToken, verifyUser, PuestoEmpresa.deletePuestoEmpresa);

export default router;