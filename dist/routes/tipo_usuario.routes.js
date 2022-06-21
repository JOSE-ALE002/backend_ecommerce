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
const verifyUser_1 = require("./../Middlewares/verifyUser");
const verifyToken_1 = require("./../Middlewares/verifyToken");
const express_1 = require("express");
const Tipo_usuario = __importStar(require("../controllers/tipo_usuario.controller"));
const router = (0, express_1.Router)();
router.get("/", verifyToken_1.verifyToken, verifyUser_1.verifyUser, Tipo_usuario.getTipoUsuarios);
router.post("/save", verifyToken_1.verifyToken, verifyUser_1.verifyUser, Tipo_usuario.saveTipoUsuario);
router.put("/update/:id", verifyToken_1.verifyToken, verifyUser_1.verifyUser, Tipo_usuario.updateTipoUsuario);
router.delete("/delete/:id", verifyToken_1.verifyToken, verifyUser_1.verifyUser, Tipo_usuario.deleteTipoUsuario);
exports.default = router;
