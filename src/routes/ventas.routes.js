import {Router} from "express";
import { methodHTTP as ventasController } from "../controllers/ventas.controllers.js"; 

const  router = Router();

/*get */
router.get("/",ventasController.getVentas)

/*hacemos disponible el router en otda la app */
export default router;