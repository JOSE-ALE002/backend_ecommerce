import { Router } from "express";
import { verifyUser } from './../Middlewares/verifyUser';
import { verifyToken } from './../Middlewares/verifyToken';
import * as ProveedorCtrl from "../controllers/proveedor.controller";

const router : Router = Router();

router.get("/", verifyToken, verifyUser, ProveedorCtrl.getProveedores);

router.post("/save", verifyToken, verifyUser, ProveedorCtrl.saveProveedor);

router.put("/update/:id", verifyToken, verifyUser, ProveedorCtrl.updateProveedor);

router.delete("/delete/:id", verifyToken, verifyUser, ProveedorCtrl.deleteProveedor);

export default router;