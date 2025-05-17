const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  items: [{
    productId: String,
    quantity: Number,
    price: Number
  }],
  totalAmount: Number,
  customerName: String,
  paymentStatus: { type: String, default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);