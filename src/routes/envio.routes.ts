import { verifyUser } from './../Middlewares/verifyUser';
import { verifyToken } from './../Middlewares/verifyToken';
import { Router } from "express";
import * as EnvioCtrl from "../controllers/envio.controller";

const router : Router = Router();

router.get("/", verifyToken, verifyUser, EnvioCtrl.getEnvios);

router.post("/save", verifyToken, EnvioCtrl.saveEnvio);

router.put("/update/:id", verifyToken, verifyUser, EnvioCtrl.updateEnvio);

router.delete("/delete/:id", verifyToken, verifyUser, EnvioCtrl.deleteEnvio);

export default router;