import { Router } from "express";
import { verifyUser } from './../Middlewares/verifyUser';
import { verifyToken } from './../Middlewares/verifyToken';
import * as Tel_proveedorCtrl from "../controllers/tel_proveedor.controller";

const router : Router = Router();

router.get("/", verifyToken, verifyUser, Tel_proveedorCtrl.getTel_Proveedores);

router.post("/save", verifyToken, verifyUser, Tel_proveedorCtrl.saveTel_Proveedor);

router.put("/update/:id", verifyToken, verifyUser, Tel_proveedorCtrl.updateTel_Proveedor);   

router.delete("/delete/:id", verifyToken, verifyUser, Tel_proveedorCtrl.deleteTel_Proveedor);

export default router;