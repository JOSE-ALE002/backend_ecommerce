import { verifyToken } from './../Middlewares/verifyToken';
import { Router } from "express";
import * as OrdenCtrl from "../controllers/orden.controller";

const router : Router = Router();

router.get("/", verifyToken, OrdenCtrl.getOrdenes);

router.get("/find/:id", verifyToken, OrdenCtrl.findOrden);

router.post("/save", verifyToken, OrdenCtrl.saveOrden);

router.put("/update/:id", verifyToken, OrdenCtrl.updateOrden);

router.delete("/delete/:id", OrdenCtrl.deleteOrden);

export default router;