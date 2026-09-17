const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    address: { type: String, required: true },
    bookTitle: { type: String, required: true },
    amount: { type: Number, required: true },
    paymentMethod: { type: String, enum: ['COD', 'UPI'], required: true },
    upiTransactionId: { type: String }, 
    status: { type: String, default: 'Pending Verification' }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);

