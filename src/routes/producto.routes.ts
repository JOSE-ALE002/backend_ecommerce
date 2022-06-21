import { Router } from "express";
import { verifyUser } from './../Middlewares/verifyUser';
import { verifyToken } from './../Middlewares/verifyToken';
import * as ProductoCtrl from "../controllers/producto.controller";

const router : Router = Router();

router.get("/", verifyToken, verifyUser, ProductoCtrl.getProductos);

router.post("/save", verifyToken, verifyUser, ProductoCtrl.saveProducto);

router.put("/update/:id", verifyToken, verifyUser, ProductoCtrl.updateProducto);

router.delete("/delete/:id", verifyToken, verifyUser, ProductoCtrl.deleteProducto);

export default router;