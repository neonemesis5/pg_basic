const  { registrarIngreso }= require("../services/opcaban_service");
class OpCajaBanco{

    static async aperturaCaja(req, res) {
        try {
          const params = {
            usuarioId: req.usuario,
            ...req.body
          };
          const response= await registrarIngreso(params);
          return res.status(response.status).send(response);
        } catch (error) { //console.log("errorrrr ",error);
          return res.status(500).send({message:"error -> ",error});
        }
    }
}
module.exports = OpCajaBanco;