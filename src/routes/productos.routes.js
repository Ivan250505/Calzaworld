import {Router} from "express";
import { methodHTTP as productosController } from "../controllers/productos.controllers.js"; 

const  router = Router();

/*get */
router.get("/",productosController.getProductos)
router.post("/",productosController.postProductos);
router.get("/:id_p",productosController.getProducto);
router.delete("/:id_p",productosController.deleteProducto);
router.put("/:id_p",productosController.updateProducto); 
/*hacemos disponible el router en otda la app */
export default router;