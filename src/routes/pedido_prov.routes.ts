import { Router } from "express";
import { verifyUser } from './../Middlewares/verifyUser';
import { verifyToken } from './../Middlewares/verifyToken';
import * as PedidoProveedorCtrl from "../controllers/pedido_prov.controller";

const router : Router = Router();

router.get("/", verifyToken, verifyUser, PedidoProveedorCtrl.getPedidosProveedor);

router.post("/save", verifyToken, verifyUser, PedidoProveedorCtrl.savePedidoProveedor);

router.put("/update/:id", verifyToken, verifyUser, PedidoProveedorCtrl.updatePedidoProveedor);

router.delete("/delete/:id", verifyToken, verifyUser, PedidoProveedorCtrl.deletePedidoProveedor);

export default router;