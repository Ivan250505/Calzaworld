import {Router} from "express";
import { methodHTTP as clientesController } from "../controllers/clientes.controllers.js"; 

const  router = Router();

/*get */
router.get("/",clientesController.getClientes);
router.post("/",clientesController.postClientes);
router.get("/:id_c",clientesController.getCliente);
router.delete("/:id_c",clientesController.deleteCliente);
router.put("/:id_c",clientesController.updateCliente);




/*hacemos disponible el router en otda la app */
export default router;