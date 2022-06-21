import { verifyToken } from './../Middlewares/verifyToken';
import { Router } from "express";
import * as DireccionCtrl from "../controllers/direccion.controller";

const router : Router = Router();

router.get("/", verifyToken, DireccionCtrl.getDirecciones);

router.post("/save", verifyToken, DireccionCtrl.saveDireccion);

router.put("/update/:id", verifyToken, DireccionCtrl.updateDireccion);   

router.delete("/delete/:id", verifyToken, DireccionCtrl.deleteDireccion);

export default router;