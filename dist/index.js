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
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const connection_1 = require("./db/connection");
const categoria_proveedor_routes_1 = __importDefault(require("./routes/categoria_proveedor.routes"));
const categoria_routes_1 = __importDefault(require("./routes/categoria.routes"));
const departamento_empresa_routes_1 = __importDefault(require("./routes/departamento_empresa.routes"));
const departamento_routes_1 = __importDefault(require("./routes/departamento.routes"));
const detalle_orden_routes_1 = __importDefault(require("./routes/detalle_orden.routes"));
const detalle_proveedor_routes_1 = __importDefault(require("./routes/detalle_proveedor.routes"));
const detalle_tarjeta_routes_1 = __importDefault(require("./routes/detalle_tarjeta.routes"));
const direccion_routes_1 = __importDefault(require("./routes/direccion.routes"));
const empleado_routes_1 = __importDefault(require("./routes/empleado.routes"));
const envio_routes_1 = __importDefault(require("./routes/envio.routes"));
// import historial_envio from "./routes/";
const lista_deseo_routes_1 = __importDefault(require("./routes/lista_deseo.routes"));
const municipio_routes_1 = __importDefault(require("./routes/municipio.routes"));
const orden_routes_1 = __importDefault(require("./routes/orden.routes"));
const pedido_prov_routes_1 = __importDefault(require("./routes/pedido_prov.routes"));
const producto_routes_1 = __importDefault(require("./routes/producto.routes"));
const proveedor_routes_1 = __importDefault(require("./routes/proveedor.routes"));
const puesto_empresa_routes_1 = __importDefault(require("./routes/puesto_empresa.routes"));
const subcategorias_routes_1 = __importDefault(require("./routes/subcategorias.routes"));
const tel_proveedor_routes_1 = __importDefault(require("./routes/tel_proveedor.routes"));
const telefono_routes_1 = __importDefault(require("./routes/telefono.routes"));
const tipo_tarjeta_routes_1 = __importDefault(require("./routes/tipo_tarjeta.routes"));
const tipo_transaccion_routes_1 = __importDefault(require("./routes/tipo_transaccion.routes"));
const tipo_usuario_routes_1 = __importDefault(require("./routes/tipo_usuario.routes"));
const transaccion_routes_1 = __importDefault(require("./routes/transaccion.routes"));
const usuario_routes_1 = __importDefault(require("./routes/usuario.routes"));
const autentication_routes_1 = __importDefault(require("./routes/autentication.routes"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield connection_1.sequelize.authenticate();
        console.log("conectado a la db", connection_1.sequelize.config.database);
    }
    catch (error) {
        console.log("error de conexion");
    }
}))();
// Middlewares
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Routes
app.use("/api/tipo_usuario", tipo_usuario_routes_1.default);
app.use("/api/tipo_transaccion", tipo_transaccion_routes_1.default);
app.use("/api/dpto", departamento_routes_1.default);
app.use("/api/dpto_empresa", departamento_empresa_routes_1.default);
app.use("/api/puesto", puesto_empresa_routes_1.default);
app.use("/api/categoria", categoria_routes_1.default);
app.use("/api/tipo_tarjeta", tipo_tarjeta_routes_1.default);
app.use("/api/prov", proveedor_routes_1.default);
app.use("/api/user", usuario_routes_1.default);
app.use("/api/tel", telefono_routes_1.default);
app.use("/api/detalle_tarjeta", detalle_tarjeta_routes_1.default);
app.use("/api/municipio", municipio_routes_1.default);
app.use("/api/direccion", direccion_routes_1.default);
app.use("/api/empleado", empleado_routes_1.default);
app.use("/api/detalle_prov", detalle_proveedor_routes_1.default);
app.use("/api/tel_prov", tel_proveedor_routes_1.default);
app.use("/api/categoria_prov", categoria_proveedor_routes_1.default);
app.use("/api/producto", producto_routes_1.default);
app.use("/api/subcategoria", subcategorias_routes_1.default);
app.use("/api/lista_deseo", lista_deseo_routes_1.default);
app.use("/api/envio ", envio_routes_1.default);
app.use("/api/orders", orden_routes_1.default);
app.use("/api/detalle_orden", detalle_orden_routes_1.default);
app.use("/api/transaccion", transaccion_routes_1.default);
app.use("/api/pedido_prov", pedido_prov_routes_1.default);
app.use("/api", autentication_routes_1.default); // autenticacion
app.listen(port, () => {
    console.log("Server on port", port);
});
