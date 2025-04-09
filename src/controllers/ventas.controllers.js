import getConection from "../db/database.js"
const getVentas = async (req, res)=>{
    try{
        const conecction = await getConection();
        const result = await conecction.query("SELECT v_id_venta , v_id_producto,  v_id_cliente , v_estado_pago,v_precio,v_cantidad,v_ciudad_envio,v_correo,v_estado_despacho  from ventas")
        res.json(result);
    }catch{
        console.error("Error 500");
    }

}   


export const methodHTTP = {
    getVentas,
};



