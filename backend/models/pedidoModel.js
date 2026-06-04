// Pedido Model
const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
  id: String,
  cliente: String,
  items: Array,
  total: Number,
  estado: String,
  fecha: {
    type: Date,
    default: Date.now
  }
});

const Pedido = mongoose.model('Pedido', pedidoSchema);

module.exports = Pedido;
