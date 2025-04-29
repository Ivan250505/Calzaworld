import getConection from "../db/database.js"
const getClientes = async (req, res)=>{
    try{
        const conecction = await getConection();
        const result = await conecction.query("SELECT c_id_cliente , c_nombre_cliente,  c_apellido_cliente, c_direccion,c_telefono,c_correo  from clientes")
        res.json(result);
    }catch (error) {
        console.error("Error 500");
    }

} 

const postClientes = async(req,res) =>{
    try {
        const {c_id_cliente,c_nombre_cliente,c_apellido_cliente,c_direccion,c_telefono,c_correo } = req.body;
        const cliente = {c_id_cliente,c_nombre_cliente,c_apellido_cliente,c_direccion,c_telefono,c_correo }
        const conecction = await getConection();     
        const result = await conecction.query("INSERT INTO clientes SET ?", cliente)
        res.json(result)
    } catch (error) {
        console.error("Error 500");
    }
}
const getCliente= async (req, res)=>{
    try{
        console.log(req.params);
        const {id_c} = req.params
        const conecction = await getConection();
        const result = await conecction.query("SELECT c_id_cliente,c_nombre_cliente,c_apellido_cliente,c_direccion,c_telefono,c_correo from clientes WHERE c_id_cliente = ? ",id_c)
        res.json(result);
    }catch (error){
        console.error("Error 500");
    }

} 

const updateCliente = async(req,res) =>{
    try {
        const {id_c} = req.params
        const {c_id_cliente,c_nombre_cliente,c_apellido_cliente,c_direccion,c_telefono,c_correo } = req.body;
        const cliente = {c_id_cliente,c_nombre_cliente,c_apellido_cliente,c_direccion,c_telefono,c_correo }
        const conecction = await getConection();
        const result = await conecction.query("UPDATE clientes SET ? WHERE c_id_cliente = ? ", [cliente,id_c])
        res.json(result)
    } catch (error) {
        console.error("Error 500");
    }
}
const deleteCliente = async (req, res)=>{
    try{
        console.log("Id del cliente a borrar: ",req.params);
        const {id_c} = req.params
        const conecction = await getConection();
        const result = await conecction.query("DELETE FROM clientes WHERE c_id_cliente = ? ",id_c)
        res.json(result);
    }catch (error){
        console.error("Error 500",error);
    }

}   


export const methodHTTP ={
    getClientes,
    postClientes,
    getCliente,
    deleteCliente,
    updateCliente
}
