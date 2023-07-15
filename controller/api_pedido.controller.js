const { createItemPedido, createItemsPedido } = require("../services/detpedido_service");

class PedidoDetalle{
    static async regPedido(req, res) {
        try { 
        // console.log("--->>>>",req.body);
        let resp;
          if (req.body.hasOwnProperty('pedido')) {
            resp= await createItemPedido({ usuarioId: req.usuario,
              sucursalId: req.sucursal,...req.body.pedido
            });
          }else if (req.body.hasOwnProperty('pedidos')) {
            resp= await createItemsPedido({
              usuarioId: req.usuario,
              sucursalId: req.sucursal,
              pedidos:req.body.pedidos,
            });
          }else{
            resp.message="Error this json not contained products by this pedido"
            resp.status=400;
          }
          return res.status(resp.status).send(resp);
        } catch (error) { //console.log("error --->>",error);
          return res.status(500).send({message:"error -> ",error});
        }
    }

}
module.exports = PedidoDetalle;