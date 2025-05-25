import getConection from "../db/database.js"
const getUsuarios = async (req, res)=>{
    try{
        const conecction = await getConection();
        const result = await conecction.query("SELECT u_id , u_nombre,  u_apellido, u_correo,u_direccion,u_usuario,u_contraseña,u_tipoAcceso  from usuario")
        res.json(result);
    }catch{
        console.error("Error 500");
    }

} 
const postUsuario = async(req,res) =>{
    try {
        const {u_id , u_nombre,  u_apellido, u_correo,u_direccion,u_usuario,u_contraseña,u_tipoAcceso  } = req.body;
        const usuario = {u_id , u_nombre,  u_apellido, u_correo,u_direccion,u_usuario,u_contraseña,u_tipoAcceso}
        const conecction = await getConection();     
        const result = await conecction.query("INSERT INTO usuario SET ?", usuario)
        res.json(result)
    } catch  (error) {
        console.error("Error al insertar usuario:", error);
        res.status(500).json({ error: "Error interno del servidor", detalles: error.message });
    }
}
const getUsuario= async (req, res)=>{
    try{
        console.log(req.params);
        const {id_u} = req.params
        const conecction = await getConection();
        const result = await conecction.query("SELECT u_id , u_nombre,  u_apellido, u_correo,u_direccion,u_usuario,u_contraseña,u_tipoAcceso  from usuario WHERE u_id = ? ",id_u)
        res.json(result);
    }catch (error){
        console.error("Error 500",error.message);
    }

} 

const updateUsuario = async(req,res) =>{
    try {
        const {id_u} = req.params
        const {u_id , u_nombre,  u_apellido, u_correo,u_direccion,u_usuario,u_contraseña,u_tipoAcceso } = req.body;
        const usuario = {u_id , u_nombre,  u_apellido, u_correo,u_direccion,u_usuario,u_contraseña,u_tipoAcceso  }
        const conecction = await getConection();
        const result = await conecction.query("UPDATE usuario SET ? WHERE u_id = ? ", [usuario,id_u])
        res.json(result)
    } catch (error) {
        console.error("Error 500");
    }
}
const deleteUsuario= async (req, res)=>{
    try{
        console.log("Id del proveedor a borrar: ",req.params);
        const {id_u} = req.params
        const conecction = await getConection();
        const result = await conecction.query("DELETE FROM usuario WHERE u_id = ? ",id_u)
        res.json(result);
    }catch (error){ 
        console.error("Error 500");
    }
}   

export const methodHTTP = {
    getUsuarios,
    deleteUsuario,
    updateUsuario,
    getUsuario,
    postUsuario
};



