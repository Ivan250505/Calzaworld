import getConection from "../db/database.js"
const getProductos = async (req, res)=>{
    try{
        const conecction = await getConection();
        const result = await conecction.query("SELECT p_id_producto , p_color,  p_id_proveedor, p_cantidad,p_talla,p_marca,p_descripcion,p_precio from producto")
        res.json(result);
    }catch{
        console.error("Error 500");
    }

}   

const postProductos = async(req,res) =>{
    try {
        const {p_color,p_id_proveedor ,p_cantidad,p_talla,p_marca,p_descripcion,p_precio } = req.body;
        const producto = {p_color,p_id_proveedor ,p_cantidad,p_talla,p_marca,p_descripcion,p_precio }
        const conecction = await getConection();     
        const result = await conecction.query("INSERT INTO producto SET ?", producto)
        res.json(result)
    } catch (error) {
        console.error("Error 500");
    }
}

const getProducto= async (req, res)=>{
    try{
        console.log(req.params);
        const {id_p} = req.params
        const conecction = await getConection();
        const result = await conecction.query("SELECT p_id_producto,p_color,p_id_proveedor ,p_cantidad,p_talla,p_marca,p_descripcion,p_precio  from producto WHERE p_id_producto = ? ",[id_p])
        res.json(result);
    }catch (error){
        console.error("Error 500");
    }

} 

const updateProducto = async(req,res) =>{
    try {
        const {id_p} = req.params
        const {p_id_producto ,p_color,p_id_proveedor ,p_cantidad,p_talla,p_marca,p_descripcion,p_precio  } = req.body;
        const producto = {p_color,p_id_proveedor ,p_cantidad,p_talla,p_marca,p_descripcion,p_precio }
        const conecction = await getConection();
        const result = await conecction.query("UPDATE producto SET ? WHERE p_id_producto = ? ", [producto,id_p])
        res.json(result)
    } catch (error) {
    console.error("Error 500:", error);
    res.status(500).json({ message: "Error al actualizar producto" });
  }
}

const deleteProducto= async (req, res)=>{
    try{
        //console.log("Id del producto a borrar: ",req.params);
        const {id_p} = req.params
        const conecction = await getConection();
        const result = await conecction.query("DELETE FROM producto WHERE p_id_producto  = ? ",id_p)
        res.json(result);
    }catch (error){ 
        console.error("Error 500");
    }
} 

export const methodHTTP ={
    getProductos,
    postProductos,
    getProducto,
    updateProducto,
    deleteProducto
}
