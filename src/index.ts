import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();    
import { sequelize } from "./db/connection";

import categoria_Proveedor from "./routes/categoria_proveedor.routes";
import categoria from "./routes/categoria.routes";
import dpto_empresa from './routes/departamento_empresa.routes';
import departamento from "./routes/departamento.routes";
import detalle_orden from "./routes/detalle_orden.routes";
import detalle_proveedor from "./routes/detalle_proveedor.routes";
import detalle_tarjeta from "./routes/detalle_tarjeta.routes";
import direccion from "./routes/direccion.routes";
import empleado from "./routes/empleado.routes";
import envio from "./routes/envio.routes";
import lista_deseo from "./routes/lista_deseo.routes";
import municipio from "./routes/municipio.routes";
import orden from "./routes/orden.routes";
import pedido_proveedor from "./routes/pedido_prov.routes";
import producto from "./routes/producto.routes";
import proveedor from "./routes/proveedor.routes";
import puesto_empresa from "./routes/puesto_empresa.routes";
import subcategoria from "./routes/subcategorias.routes";
import tel_proveedor from "./routes/tel_proveedor.routes";
import telefono from "./routes/telefono.routes";
import tipo_tarjeta from "./routes/tipo_tarjeta.routes";
import tipo_transaccion from './routes/tipo_transaccion.routes';
import tipo_usuario from './routes/tipo_usuario.routes';
import transaccion from "./routes/transaccion.routes";
import usuario from "./routes/usuario.routes"; 
import authentication from "./routes/autentication.routes"; 

const app = express();
const port = process.env.PORT || 3000;

(async () => {
    try {
        await sequelize.authenticate();
        console.log("conectado a la db", sequelize.config.database);        
    } catch (error) {
        console.log("error de conexion");        
    }
})();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/tipo_usuario", tipo_usuario);
app.use("/api/tipo_transaccion", tipo_transaccion);
app.use("/api/dpto", departamento);
app.use("/api/dpto_empresa", dpto_empresa);
app.use("/api/puesto", puesto_empresa);
app.use("/api/categoria", categoria);
app.use("/api/tipo_tarjeta", tipo_tarjeta);
app.use("/api/prov", proveedor);
app.use("/api/user", usuario);
app.use("/api/tel", telefono);
app.use("/api/detalle_tarjeta", detalle_tarjeta);
app.use("/api/municipio", municipio);
app.use("/api/direccion", direccion);
app.use("/api/empleado", empleado);
app.use("/api/detalle_prov", detalle_proveedor);
app.use("/api/tel_prov", tel_proveedor);
app.use("/api/categoria_prov", categoria_Proveedor);
app.use("/api/producto", producto);
app.use("/api/subcategoria", subcategoria);
app.use("/api/lista_deseo", lista_deseo);
app.use("/api/envio ", envio);
app.use("/api/orders", orden);
app.use("/api/detalle_orden", detalle_orden);
app.use("/api/transaccion", transaccion);
app.use("/api/pedido_prov", pedido_proveedor);
app.use("/api", authentication); // autenticacion


app.listen(port, () => {
    console.log("Server on port", port);    
});
