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


export const methodHTTP = {
    getUsuarios,
};



