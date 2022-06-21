import { Router } from "express";
import * as CategoriaProveedorCtrl from "../controllers/categoria_proveedor.controller";

const router : Router = Router();

router.get("/", CategoriaProveedorCtrl.getCategoria_Proveedores);

router.post("/save", CategoriaProveedorCtrl.saveCategoria_Proveedor);

router.post("/find/:id", CategoriaProveedorCtrl.findCategory);

// router.put("/update/:id", CategoriaProveedorCtrl.updateCategoriaProveedor);

// router.delete("/delete/:id", CategoriaProveedorCtrl.deleteCategoriaProveedor);

export default router;