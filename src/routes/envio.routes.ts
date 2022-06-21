import { Router } from "express";
import * as EnvioCtrl from "../controllers/envio.controller";

const router : Router = Router();

router.get("/", EnvioCtrl.getEnvios);

router.post("/save", EnvioCtrl.saveEnvio);

router.put("/update/:id", EnvioCtrl.updateEnvio);

router.delete("/delete/:id", EnvioCtrl.deleteEnvio);

export default router;