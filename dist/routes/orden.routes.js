"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const verifyToken_1 = require("./../Middlewares/verifyToken");
const express_1 = require("express");
const OrdenCtrl = __importStar(require("../controllers/orden.controller"));
const router = (0, express_1.Router)();
router.get("/", verifyToken_1.verifyToken, OrdenCtrl.getOrdenes);
router.post("/save", verifyToken_1.verifyToken, OrdenCtrl.saveOrden);
router.put("/update/:id", verifyToken_1.verifyToken, OrdenCtrl.updateOrden);
router.delete("/delete/:id", OrdenCtrl.deleteOrden);
exports.default = router;
