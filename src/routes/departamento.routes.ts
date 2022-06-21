import { Router } from "express";
import * as DepartamentoCtrl from "../controllers/departamento.controller";

const router : Router = Router();

router.get("/", DepartamentoCtrl.getDepartamentos);

router.post("/save", DepartamentoCtrl.saveDepartamento);

router.put("/update/:id", DepartamentoCtrl.updateDepartamento);

router.delete("/delete/:id", DepartamentoCtrl.deleteDepartamento);

export default router;