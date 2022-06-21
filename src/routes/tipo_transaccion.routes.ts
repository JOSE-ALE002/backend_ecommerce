import { Router } from "express";
import * as Tipo_TransaccionCtrl from "../controllers/tipo_transaccion.controller";

const router : Router = Router();

router.get("/", Tipo_TransaccionCtrl.getTipo_transacciones);

router.post("/save", Tipo_TransaccionCtrl.saveTipo_transaccion);

router.put("/update/:id", Tipo_TransaccionCtrl.updateTipo_transaccion);

router.delete("/delete/:id", Tipo_TransaccionCtrl.deleteTipo_transaccion);

export default router;