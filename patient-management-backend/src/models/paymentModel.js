const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    invoiceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Invoice', required: true },
    paymentMethod: { type: String, required: true },
    paymentStatus: { type: String, default: 'Pending' },
    amount: { type: Number, required: true },
    transactionId:{type:String},
    paymentDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Payment',PaymentSchema);