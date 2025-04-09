import getConection from "../db/database.js"
const getClientes = async (req, res)=>{
    try{
        const conecction = await getConection();
        const result = await conecction.query("SELECT c_id_cliente , c_nombre_cliente,  c_apellido_cliente, c_direccion,c_telefono,c_correo,c_imagen  from clientes")
        res.json(result);
    }catch{
        console.error("Error 500");
    }

}   


export const methodHTTP ={
    getClientes,
}
