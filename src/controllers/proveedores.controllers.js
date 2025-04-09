import getConection from "../db/database.js"
const getProveedores = async (req, res)=>{
    try{
        const conecction = await getConection();
        const result = await conecction.query("SELECT p_id_proveedor , p_nombre_proveedor,  p_apellido_proveedor, 	p_empresa,p_telefono,	p_correo,p_imagen  from proveedor")
        res.json(result);
    }catch{
        console.error("Error 500");
    }

}   


export const methodHTTP ={
    getProveedores,
}
