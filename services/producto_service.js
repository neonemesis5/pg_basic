const productoModel = require("../models/producto");

async function getallProductos(params){
    const response={
        message:"No data found",
        data:null,
        status:400,
    }
    try {
        const resp=await productoModel.findAll();
        if(resp){
            response.data=resp;
            response.message="data found";
            response.status=200;
        } 
    } catch (error) { //console.log("===>",error);
        response.message = error.details[0].message;
    }
    return response;
}
async function getProductoByID(params){
    const response={
        message:"No data found",
        data:null,
        status:400,
    }
    try {
        // console.log("---->",params);
        const {
            productoId,
        }=params;
        const resp=await productoModel.findOne({where:{id:productoId}});
        if(resp){
            response.data=resp;
            response.message="data found";
            response.status=200;
        } 
    } catch (error) { //console.log("===>",error);
        response.message = error.details[0].message;
    }
    return response;
}
async function getProductoByName(params){

}

async function setProductoById(params){

}


module.exports={
    getallProductos,
    getProductoByID,
    getProductoByName,
    setProductoById,
}