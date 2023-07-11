// const  { registrarIngreso }= require("../services/opcaban_service");
class Productos{
  // obtener todos los productos
  static async getAllProducts(req, res) {
      try {
        const params = {
          usuarioId: req.usuario,
          ...req.body
        };
      //   const response= await registrarIngreso(params);
        return res.status(200).send(null);
      } catch (error) { //console.log("errorrrr ",error);
        return res.status(500).send({message:"error in  getAllProducts -> ",error});
      }
  }

  static async getProduct(req,res){
    try {
      
    } catch (error) {
      return res.status(500).send({message:"error in  getProduct -> ",error});
    }
  }

    // para insertar cantidad actual
  static async updateQtyProduct(req,res){
    try {
      
    } catch (error) {
      return res.status(500).send({message:"error in updateQtyProduct -> ",error});
    }
  }
}
module.exports = Productos;