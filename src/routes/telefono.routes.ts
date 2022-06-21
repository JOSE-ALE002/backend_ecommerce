import { verifyToken } from './../Middlewares/verifyToken';
import { Router } from "express";
import * as TelefonoCtrl from "../controllers/telefono.controller";

const router : Router = Router();
 
router.get("/", verifyToken, TelefonoCtrl.getTelefonos);

router.post("/save", verifyToken, TelefonoCtrl.saveTelefono);

router.put("/update/:id", verifyToken, TelefonoCtrl.updateTelefono);   

router.delete("/delete/:id", verifyToken, TelefonoCtrl.deleteTelefono);

export default router;