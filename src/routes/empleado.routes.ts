import { Router } from "express";
import { verifyUser } from './../Middlewares/verifyUser';
import { verifyToken } from './../Middlewares/verifyToken';
import * as EmpleadoCtrl from "../controllers/empleado.controller";

const router : Router = Router();

router.get("/", verifyToken, verifyUser, EmpleadoCtrl.getEmpleados);

router.post("/save", verifyToken, verifyUser, EmpleadoCtrl.saveEmpleado);

router.put("/update/:id", verifyToken, verifyUser, EmpleadoCtrl.updateEmpleado);

router.delete("/delete/:id", verifyToken, verifyUser, EmpleadoCtrl.deleteEmpleado);

export default router;