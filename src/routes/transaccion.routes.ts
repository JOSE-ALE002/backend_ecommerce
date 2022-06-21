import { Router } from "express";
import * as TransaccionCtrl from "../controllers/transaccion.controller";

const router : Router = Router();

router.get("/", TransaccionCtrl.getTransacciones);

router.post("/save", TransaccionCtrl.saveTransaccion);

router.put("/update/:id", TransaccionCtrl.updateTransaccion);

router.delete("/delete/:id", TransaccionCtrl.deleteTransaccion);

export default router;