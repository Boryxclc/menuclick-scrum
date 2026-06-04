// Pedidos Controller
const pedidosService = require('../services/pedidosService');

const getPedidos = (req, res) => {
  try {
    const pedidos = pedidosService.obtenerPedidos();
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const crearPedido = (req, res) => {
  try {
    const nuevoPedido = pedidosService.crearPedido(req.body);
    res.status(201).json(nuevoPedido);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getPedidos, crearPedido };
