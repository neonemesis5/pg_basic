/* eslint no-param-reassign: ["warn", { "props": true }] */
const DetallePedido = require("../models/pedido");
const productoModel = require("../models/producto");

async function createItemPedido(params) {
  const response = {
    message: "item registration error for this pedido",
    status: 400,
    data: null,
  };
  try {
    const { productId, qty, usuarioId, sucursalId } = params;
    // console.log("param->",params);
    //  const {qty,productId} = await productoSchema.validateAsync( params);
    const prod = await productoModel.findOne({ where: { id: productId } });
    if (prod) {
      const res = await DetallePedido.create({
        cantidad: qty,
        productos_id: productId,
        user_id: usuarioId,
        sucursal_id: sucursalId,
        status: "P",
      });
      if (res) {
        // console.log("res-> ",res);
        // const res2= await ProductoTamanios
        response.message = "the produt has been created";
        response.status = 200;
        response.data = res;
      }
    } else {
      response.message = "error in item product isn't exists";
    }
  } catch (error) {
    // console.log("error --->",error);
    response.message = `error in regItemPedido : ${error.details[0].message}`;
  }
  return response;
}
async function createItemsPedido(params) {
  const response = {
    message: "the array is not in the correct format",
    status: 400,
    data: null,
  };
  try {
    // console.log("params-->",params);
    const { pedidos, usuarioId, sucursalId } = params;
    const promises = pedidos.map(async (pedido) => {
      pedido.usuarioId = usuarioId;
      pedido.sucursalId = sucursalId;
      const res = await createItemPedido(pedido);
      // console.log("res ->", res);
      return res;
    });
    const results = await Promise.all(promises);
    if (results.some((res) => res.data === null)) {
      response.message = "some products could not be created";
    } else {
      response.message = "the products have been created";
      response.status = 200;
    }
    response.data = results;
  } catch (error) {
    // console.log("error ->",error);
    response.message = `Error in function createItemsPedido${error.details[0].message}`;
  }
  return response;
}
module.exports = {
  createItemPedido,
  createItemsPedido,
};
