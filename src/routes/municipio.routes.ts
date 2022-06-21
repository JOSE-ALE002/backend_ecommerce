import { Router } from "express";
import * as MunicipioCtrl from "../controllers/municipio.controller";

const router : Router = Router();

router.get("/", MunicipioCtrl.getMunicipios);

router.post("/save", MunicipioCtrl.saveMunicipio);

router.put("/update/:id", MunicipioCtrl.updateMunicipio);   

router.delete("/delete/:id", MunicipioCtrl.deleteMunicipio);

export default router;