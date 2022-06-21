import { Router } from "express";
import * as DetalleOrdenCtrl from "../controllers/detalle_orden.controller";

const router : Router = Router();

router.get("/", DetalleOrdenCtrl.getDetalleOrden);

router.post("/save", DetalleOrdenCtrl.saveDetalleOrden);

router.put("/update/:id", DetalleOrdenCtrl.updateDetalleOrden);

router.delete("/delete/:id", DetalleOrdenCtrl.deleteDetalleOrden);

export default router;