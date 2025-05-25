import {Router} from "express";
import { methodHTTP as ventasController } from "../controllers/ventas.controllers.js"; 

const  router = Router();

/*get */
router.get("/",ventasController.getVentas)
router.post("/",ventasController.postVenta);
router.get("/:id_",ventasController.getVenta);
router.delete("/:id_v",ventasController.deleteVenta);
router.put("/:id_v",ventasController.UpdateVenta);
/*hacemos disponible el router en otda la app */
export default router;