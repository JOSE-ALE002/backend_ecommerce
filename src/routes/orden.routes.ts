import { Router } from "express";
import * as OrdenCtrl from "../controllers/orden.controller";

const router : Router = Router();

router.get("/", OrdenCtrl.getOrdenes);

router.post("/save", OrdenCtrl.saveOrden);

router.put("/update/:id", OrdenCtrl.updateOrden);

router.delete("/delete/:id", OrdenCtrl.deleteOrden);

export default router;