import { verifyToken } from './../Middlewares/verifyToken';
import { Router } from "express";
import * as DetalleOrdenCtrl from "../controllers/detalle_orden.controller";

const router : Router = Router();

router.get("/", verifyToken, DetalleOrdenCtrl.getDetalleOrden);

router.post("/save", verifyToken, DetalleOrdenCtrl.saveDetalleOrden);

router.put("/update/:id", verifyToken, DetalleOrdenCtrl.updateDetalleOrden);

router.delete("/delete/:id", verifyToken, DetalleOrdenCtrl.deleteDetalleOrden);

router.get("/find/:id", verifyToken, DetalleOrdenCtrl.findPedidos);

export default router;