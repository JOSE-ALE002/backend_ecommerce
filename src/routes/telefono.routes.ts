import { Router } from "express";
import * as TelefonoCtrl from "../controllers/telefono.controller";

const router : Router = Router();

router.get("/", TelefonoCtrl.getTelefonos);

router.post("/save", TelefonoCtrl.saveTelefono);

router.put("/update/:id", TelefonoCtrl.updateTelefono);   

router.delete("/delete/:id", TelefonoCtrl.deleteTelefono);

export default router;