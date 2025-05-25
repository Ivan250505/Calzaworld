import getConection from "../db/database.js"
const getProveedores = async (req, res)=>{
    try{
        const conecction = await getConection();
        const result = await conecction.query("SELECT p_id_proveedor , p_nombre_proveedor,  p_apellido_proveedor, 	p_empresa,p_telefono,	p_correo  from proveedor")
        res.json(result);
    }catch(error){
        console.error("Error 500");
    }

}   
const postProveedores = async(req,res) =>{
    try {
        const {p_id_proveedor,p_nombre_proveedor,p_apellido_proveedor,p_empresa,p_telefono,p_correo } = req.body;
        const proveedor = {p_id_proveedor,p_nombre_proveedor,p_apellido_proveedor,p_empresa,p_telefono,p_correo }
        const conecction = await getConection();     
        const result = await conecction.query("INSERT INTO proveedor SET ?", proveedor)
        res.json(result)
    } catch (error) {
        console.error("Error 500");
    }
}
const getProveedor= async (req, res)=>{
    try{
        console.log(req.params);
        const {id_p} = req.params
        const conecction = await getConection();
        const result = await conecction.query("SELECT p_id_proveedor , p_nombre_proveedor,  p_apellido_proveedor, 	p_empresa,p_telefono,	p_correo  from proveedor WHERE p_id_proveedor = ? ",id_p)
        res.json(result);
    }catch (error){
        console.error("Error 500");
    }

} 

const updateProveedor = async(req,res) =>{
    try {
        const {id_p} = req.params
        const {p_id_proveedor,p_nombre_proveedor,p_apellido_proveedor,p_empresa,p_telefono,p_correo } = req.body;
        const proveedor = {p_id_proveedor,p_nombre_proveedor,p_apellido_proveedor,p_empresa,p_telefono,p_correo }
        const conecction = await getConection();
        const result = await conecction.query("UPDATE proveedor SET ? WHERE p_id_proveedor = ? ", [proveedor,id_p])
        res.json(result)
    } catch (error) {
        console.error("Error 500");
    }
}
const deleteProveedor= async (req, res)=>{
    try{
        console.log("Id del proveedor a borrar: ",req.params);
        const {id_p} = req.params
        const conecction = await getConection();
        const result = await conecction.query("DELETE FROM proveedor WHERE p_id_proveedor = ? ",id_p)
        res.json(result);
    }catch (error){ 
        console.error("Error 500");
    }
} 

export const methodHTTP ={
    getProveedores,
    postProveedores,
    getProveedor,
    updateProveedor,
    deleteProveedor
}
