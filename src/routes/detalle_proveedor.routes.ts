import { Router } from "express";
import { verifyUser } from './../Middlewares/verifyUser';
import { verifyToken } from './../Middlewares/verifyToken';
import * as Dir_ProveedorCtr from "../controllers/dir_proveedor.controller";

const router : Router = Router();

router.get("/", verifyToken, verifyUser, Dir_ProveedorCtr.getDirProveedores);

router.post("/save", verifyToken, verifyUser, Dir_ProveedorCtr.saveDirProveedor);

router.put("/update/:id", verifyToken, verifyUser, Dir_ProveedorCtr.updateDirProveedor);   

router.delete("/delete/:id", verifyToken, verifyUser, Dir_ProveedorCtr.deleteDirProveedor);

export default router;