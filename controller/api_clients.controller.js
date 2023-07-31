const {
	createOneCLiente,
	// createManyCLientes,
	getAllClientes,
} = require('../services/cliente_service');

class clientController {
	static async getallClientes(req, res) {
		try {
			const resp = await getAllClientes(null);
			res.status(resp.status).send(resp);
		} catch (error) {
			// console.error("==> ", error);
			res.status(500).json({ message: 'Error in endpoint getallClientes' });
		}
	}

	static async createCliente(req, res) {
		try {
			let cliente;
			if (req.body.hasOwnProperty('cliente')) {
				// console.log("entro");
				cliente = await createOneCLiente({ ...req.body });
			} else if (req.body.hasOwnProperty('clientes')) {
				// cliente = await createManyCLientes({});
			} else {
			}
			res.status(cliente.status).json(cliente);
		} catch (error) {
			// console.error(error);
			res.status(500).json({ message: 'Error al crear el cliente' });
		}
	}

	//   static async updateCliente(req, res) {
	//     try {
	//       const { id } = req.params;
	//       const { nombre, apellido, cedula, telefono } = req.body;
	//       const [updated] = await Cliente.update({ nombre, apellido, cedula, telefono }, { where: { id } });
	//       if (updated) {
	//         const cliente = await Cliente.findOne({ where: { id } });
	//         res.status(200).json({ message: 'Cliente actualizado exitosamente', data: cliente });
	//       }
	//       throw new Error('Cliente no encontrado');
	//     } catch (error) {
	//       console.error(error);
	//       res.status(500).json({ message: 'Error al actualizar el cliente' });
	//     }
	//   }

	//   static async getCliente(req, res) {
	//     try {
	//       const { id } = req.params;
	//       const cliente = await Cliente.findOne({ where: { id } });
	//       if (cliente) {
	//         res.status(200).json({ message: 'Cliente encontrado', data: cliente });
	//       }
	//       throw new Error('Cliente no encontrado');
	//     } catch (error) {
	//       console.error(error);
	//       res.status(404).json({ message: 'Cliente no encontrado' });
	//     }
	//   }
}

module.exports = clientController;
