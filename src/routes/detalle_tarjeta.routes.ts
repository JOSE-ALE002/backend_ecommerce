import { Router } from "express";
import * as DetalleTarjetaCtrl from "../controllers/detalle_tarjeta.controller";

const router : Router = Router();

router.get("/", DetalleTarjetaCtrl.getDetallesTarjeta);

router.post("/save", DetalleTarjetaCtrl.saveDetalleTarjeta);

router.put("/update/:id", DetalleTarjetaCtrl.updateDetalleTarjeta);

router.delete("/delete/:id", DetalleTarjetaCtrl.deleteDetalleTarjeta);

export default router;