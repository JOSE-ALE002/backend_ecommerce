import { Router } from "express";
import * as DireccionCtrl from "../controllers/direccion.controller";

const router : Router = Router();

router.get("/", DireccionCtrl.getDirecciones);

router.post("/save", DireccionCtrl.saveDireccion);

router.put("/update/:id", DireccionCtrl.updateDireccion);   

router.delete("/delete/:id", DireccionCtrl.deleteDireccion);

export default router;