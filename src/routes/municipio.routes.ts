import { verifyUser } from './../Middlewares/verifyUser';
import { verifyToken } from './../Middlewares/verifyToken';
import { Router } from "express";
import * as MunicipioCtrl from "../controllers/municipio.controller";

const router : Router = Router();

router.get("/", verifyToken, verifyUser, MunicipioCtrl.getMunicipios);

router.post("/save", verifyToken, verifyUser, MunicipioCtrl.saveMunicipio);

router.put("/update/:id", verifyToken, verifyUser, MunicipioCtrl.updateMunicipio);   

router.delete("/delete/:id", verifyToken, verifyUser, MunicipioCtrl.deleteMunicipio);

export default router;