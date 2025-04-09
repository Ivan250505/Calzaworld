import {Router} from "express";
import { methodHTTP as usuariosController } from "../controllers/usuarios.controllers.js"; 

const  router = Router();

/*get */
router.get("/",usuariosController.getUsuarios)




/*hacemos disponible el router en otda la app */
export default router;