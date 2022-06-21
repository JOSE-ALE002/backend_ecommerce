import { Router } from "express";
import * as DptoEmpresaCtrl from "../controllers/dpto_empresa.controller";

const router : Router = Router();

router.get("/", DptoEmpresaCtrl.getDptosEmpresa);

router.post("/save", DptoEmpresaCtrl.saveDptoEmpresa);

router.put("/update/:id", DptoEmpresaCtrl.updateDptoEmpresa);

router.delete("/delete/:id", DptoEmpresaCtrl.deleteDptoEmpresa);

export default router;