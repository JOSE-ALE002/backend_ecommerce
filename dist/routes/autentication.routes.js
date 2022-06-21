"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const verifyUser_1 = require("./../Middlewares/verifyUser");
const verifyToken_1 = require("./../Middlewares/verifyToken");
const express_1 = require("express");
const Usuario_1 = __importDefault(require("../models/Usuario"));
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const router = (0, express_1.Router)();
router.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    req.body.pass = yield (0, bcrypt_1.hash)(req.body.pass, yield (0, bcrypt_1.genSalt)(10));
    try {
        const resp = yield Usuario_1.default.create(req.body);
        return res.status(200).json({
            status: true,
            msj: "Usuario guardado correctamente",
            resp,
        });
    }
    catch (error) {
        return res.json({
            status: false,
            msj: "No se ha podido guardar la Usuario",
            error
        });
    }
}));
router.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, pass } = req.body;
    const user = yield Usuario_1.default.findOne({
        where: {
            email: email
        }
    });
    if (user === null) {
        return res.status(402).json({
            status: false,
            msj: "Usuario no encontrado"
        });
    }
    const resp = yield (0, bcrypt_1.compare)(pass, user.getDataValue("pass"));
    if (resp) {
        const token = (0, jsonwebtoken_1.sign)({ id: user.getDataValue("id_usuario") }, process.env.SECRET, {
            expiresIn: 60 * 60 * 24
        });
        return res.json({
            status: true,
            token
        });
    }
    else {
        return res.json({
            status: false,
            msj: "No autorizado",
            token: null
        });
    }
}));
router.get("/me", verifyToken_1.verifyToken, verifyUser_1.verifyUser, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield Usuario_1.default.findOne({
        where: {
            id_usuario: req.userId
        }
    });
    if (user !== null) {
        return res.json({
            profile: user
        });
    }
    else {
        console.log("Usuario no encontrado");
        return res.json({
            status: "false",
            user: null,
            msj: "Usuario no encontrado"
        });
    }
}));
exports.default = router;
