import { Router } from "express";
import * as Lista_DeseoCtrl from "../controllers/lista_deseo.controller";

const router : Router = Router();

router.get("/", Lista_DeseoCtrl.getListaDeseos);

router.post("/save", Lista_DeseoCtrl.saveListaDeseo);

router.get("/find/:id", Lista_DeseoCtrl.findListaDeseo);

// router.put("/update/:id", Lista_DeseoCtrl.updateListaDeseo);

// router.delete("/delete/:id", Lista_DeseoCtrl.deleteListaDeseo);

export default router;