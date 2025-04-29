/*Ïmportamos al framework exprres*/
import express from "express";
import usuariosRouter from "./routes/usuarios.routes.js"
import clientesRouter from "./routes/clientes.routes.js"
import productosRouter from "./routes/productos.routes.js"
import proveedoresRouter from "./routes/proveedores.routes.js"
import ventasRouter from "./routes/ventas.routes.js"
import cors from "cors"


/*asignamos a pp toda la funcionalidad para mi sever web*/
const app=express();



/*seterar un puerto a mi web server */
app.set("port",5000)
app.use(cors());


/*routes */
app.use("/api/usuarios",usuariosRouter);
app.use(express.json());
app.use("/api/clientes",clientesRouter);
app.use(express.json());
app.use("/api/productos",productosRouter);
app.use(express.json());
app.use("/api/proveedores",proveedoresRouter);
app.use(express.json());
app.use("/api/ventas",ventasRouter);
app.use(express.json());


/*hacemos dispobinle a mis erver app para toda la aplicación */
export default app;

