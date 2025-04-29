import {Router} from "express";
import { methodHTTP as proveedoresController } from "../controllers/proveedores.controllers.js"; 

const  router = Router();

/*get */
router.get("/",proveedoresController.getProveedores)
router.post("/",proveedoresController.postProveedores);
router.get("/:id_p",proveedoresController.getProveedor);
router.delete("/:id_p",proveedoresController.deleteProveedor);
router.put("/:id_p",proveedoresController.updateProveedor);
/*hacemos disponible el router en otda la app */
export default router;