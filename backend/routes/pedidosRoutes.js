// Pedidos Routes
const express = require('express');
const router = express.Router();
const pedidosController = require('../controllers/pedidosController');

// Get all pedidos
router.get('/pedidos', pedidosController.getPedidos);

// Create new pedido
router.post('/pedidos', pedidosController.crearPedido);

module.exports = router;
