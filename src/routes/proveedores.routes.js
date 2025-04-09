import {Router} from "express";
import { methodHTTP as proveedoresController } from "../controllers/proveedores.controllers.js"; 

const  router = Router();

/*get */
router.get("/",proveedoresController.getProveedores)

/*hacemos disponible el router en otda la app */
export default router;