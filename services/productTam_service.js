const { productosSchema, productoSchema
} = require("../middlewares/validations/producTam");
const ProductoTamanios = require("../models/productoTamanio");


async function setQTYProductById(params){
    const response = {
        message:"product not found",
        status:400,
        data:null
    }
    try { 
        //  console.log("param->",params);
        const {qty,productId} = await productoSchema.validateAsync( params);
        const res=await ProductoTamanios.update( { cantidad: qty },{ where: { productos_id: productId } });
        if(res>0){ console.log("resup ",res);
            // const res2= await ProductoTamanios
            response.message="the produt has been updated";
            response.status=200;
            response.data=res;
        }
    } catch (error) { // console.log("error setqty ->",error);
        response.message=error.detail[0].message;
    }
    return response;
}
//para procesar mas un producto recibe un array
async function setQTYProductsById(params){
    const response = {
      message: "the array is not in the correct format",
      status: 400,
      data: null,
    };
    try {
    //   console.log("llego --->",params );
      const { productos } = await productosSchema.validateAsync(params);
      const promises = productos.map(async (producto) => {
        const res = await setQTYProductById(producto);
        // console.log("res ->", res);
        return res;
      });
      const results = await Promise.all(promises);
      if (results.some((res) => res.data === null)) {
        response.message = "some products could not be updated";
      } else {
        response.message = "the products have been updated";
        response.status = 200;
      }
      response.data = results;
    } catch (error) {
      response.message = "Error in function setQTYProductsById" + error.details[0].message;
    }
    return response;
  }

module.exports ={
    setQTYProductById,
    setQTYProductsById
}