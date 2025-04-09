import getConection from "../db/database.js"
const getProductos = async (req, res)=>{
    try{
        const conecction = await getConection();
        const result = await conecction.query("SELECT p_id_producto , p_color,  p_id_proveedor, p_cantidad,p_talla,p_marca,p_descripcion from producto")
        res.json(result);
    }catch{
        console.error("Error 500");
    }

}   


export const methodHTTP ={
    getProductos,
}
