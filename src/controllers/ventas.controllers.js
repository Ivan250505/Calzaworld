import getConection from "../db/database.js"
const getVentas = async (req, res)=>{
    try{
        const conecction = await getConection();
        const result = await conecction.query("SELECT v_id_venta , v_id_producto,  v_id_cliente , v_estado_pago,v_cantidad,v_precio_u,v_ciudad_envio,v_direccion_envio,v_Total,v_correo,v_estado_despacho  from ventas")
        res.json(result);
    }catch{
        console.error("Error 500");
    }

}  
const postVenta= async(req,res) =>{
    try {
        const {v_id_venta , v_id_producto,  v_id_cliente , v_estado_pago,v_cantidad,v_precio_u,v_ciudad_envio,v_direccion_envio,v_Total,v_correo,v_estado_despacho } = req.body;
        const venta = {v_id_venta , v_id_producto,  v_id_cliente , v_estado_pago,v_cantidad,v_precio_u,v_ciudad_envio,v_direccion_envio,v_Total,v_correo,v_estado_despacho }
        const conecction = await getConection();     
        const result = await conecction.query("INSERT INTO ventas SET ?", venta)
        res.json(result)
    } catch (error) {
        console.error("Error 500");
    }
}

const getVenta= async (req, res)=>{
    try{
        console.log(req.params);
        const {id_v} = req.params
        const conecction = await getConection();
        const result = await conecction.query("SELECT v_id_venta , v_id_producto,  v_id_cliente , v_estado_pago,v_cantidad,v_precio_u,v_ciudad_envio,v_direccion_envio,v_Total,v_correo,v_estado_despacho from ventas WHERE v_id_venta = ? ",[id_v])
        res.json(result);
    }catch (error){
        console.error("Error 500");
    }

} 

const UpdateVenta = async(req,res) =>{
    try {
        const {id_v} = req.params
        const { v_id_venta, v_id_producto,  v_id_cliente , v_estado_pago,v_cantidad,v_precio_u,v_ciudad_envio,v_direccion_envio,v_Total,v_correo,v_estado_despacho} = req.body;
        const venta = { v_id_producto,  v_id_cliente , v_estado_pago,v_cantidad,v_precio_u,v_ciudad_envio,v_direccion_envio,v_Total,v_correo,v_estado_despacho}
        const conecction = await getConection();
        const result = await conecction.query("UPDATE ventas SET ? WHERE v_id_venta = ? ", [venta,id_v])
        res.json(result)
    } catch (error) {
        console.error("Error 500");
    }
}

const deleteVenta= async (req, res)=>{
    try{
        //console.log("Id del producto a borrar: ",req.params);
        const {id_v} = req.params
        const conecction = await getConection();
        const result = await conecction.query("DELETE FROM  ventas WHERE v_id_venta  = ? ",id_v)
        res.json(result);
    }catch (error){ 
        console.error("Error 500");
    }
}  

export const methodHTTP = {
    getVentas,
    deleteVenta,
    UpdateVenta,
    getVenta,
    postVenta
};



