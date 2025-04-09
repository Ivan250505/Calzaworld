import {Router} from "express";
import { methodHTTP as clientesController } from "../controllers/clientes.controllers.js"; 

const  router = Router();

/*get */
router.get("/",clientesController.getClientes)



/*hacemos disponible el router en otda la app */
export default router;