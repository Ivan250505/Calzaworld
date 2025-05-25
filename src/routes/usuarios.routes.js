import {Router} from "express";
import { methodHTTP as usuariosController } from "../controllers/usuarios.controllers.js"; 

const  router = Router();

/*get */
router.get("/",usuariosController.getUsuarios)
router.post("/",usuariosController.postUsuario);
router.get("/:id_u",usuariosController.getUsuario);
router.delete("/:id_u",usuariosController.deleteUsuario);
router.put("/:id_u",usuariosController.updateUsuario);



/*hacemos disponible el router en otda la app */
export default router;