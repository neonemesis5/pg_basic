const movcajaban = require("../models/movcajaban");
// const UsuarioModel = require("../models/usuarios");


async function registrarIngreso(params){
    const response={
        message:"",
        status:404,
        data:null,
    }
    try {
        const {usuarioId,cop,usd,bss,observacion,sucursal}=params;
        const movimiento = await movcajaban.create({
            usuarios_id: usuarioId,
            tipooperacion_id: 1, // el codigo 1 es para ingresos y 2 para 
            sucursal_id: sucursal,
            fecha: new Date(),
            monto_cop: cop,
            monto_usd: usd,
            monto_bss: bss,
            observacion: observacion,
            status: "A"
          });
        if(movimiento){
            response.status=201;
            response.message="ok create";
            response.data=movimiento;
        }
    } catch (error) {
        // console.log("-->",error);
        response.message = error.details[0].message;
        response.status = 400;
    }
    return response;
}
module.exports = {
    registrarIngreso,
}
