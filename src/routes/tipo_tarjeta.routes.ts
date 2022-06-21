import { Router } from "express";
import { verifyUser } from './../Middlewares/verifyUser';
import { verifyToken } from './../Middlewares/verifyToken';
import * as TipoTarjetaCtrl from "../controllers/tipo_tarjeta.controller";

const router : Router = Router();

router.get("/", verifyToken, verifyUser, TipoTarjetaCtrl.getTipoTarjetas);

router.post("/save", verifyToken, verifyUser, TipoTarjetaCtrl.saveTipoTarjeta);

router.put("/update/:id", verifyToken, verifyUser, TipoTarjetaCtrl.updateTipoTarjeta);

router.delete("/delete/:id", verifyToken, verifyUser, TipoTarjetaCtrl.deleteTipoTarjeta);

export default router;