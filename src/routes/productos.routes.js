import {Router} from "express";
import { methodHTTP as productosController } from "../controllers/productos.controllers.js"; 

const  router = Router();

/*get */
router.get("/",productosController.getProductos)

/*hacemos disponible el router en otda la app */
export default router;