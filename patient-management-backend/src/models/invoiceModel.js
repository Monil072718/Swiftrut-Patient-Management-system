const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
    hospitalName: {type: String,required: true},
    billNumber: {type: String,required: true,unique: true},
    patientName: {type: String,required: true},
    phoneNumber: {type: String,required: true},
    doctorName: {type: String,required: true},
    diseaseName: {type: String,required: true},
    billDate: {type: Date,required: true},
    billTime: {type: String,required: true},
    subTotal: {type: Number,required: true},
    tax: {type: Number,required: true},
    totalAmount: {type: Number,required: true},
    items: [
        {
            description: {
                type: String,
                required: true
            },
            qty: {
                type: Number,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            total: {
                type: Number,
                required: true
            }
        }
    ],
    payment: {
        paymentMethod: {
            type: String,
            enum: ['Online', 'Credit Card', 'Cash'], // Limiting the values to these payment methods
            required: true
        },
        bankName: {
            type: String,
            required: function () { return this.paymentMethod !== 'Cash'; }
        },
        accountNumber: {
            type: String,
            required: function () { return this.paymentMethod !== 'Cash'; }
        },
        transactionId: {
            type: String,
            required: function () { return this.paymentMethod === 'Online' || this.paymentMethod === 'Credit Card'; }
        },
        paymentStatus: {
            type: String,
            enum: ['Pending', 'Completed'],
            default: 'Pending'
        }
    }
}, { timestamps: true });

module.exports = mongoose.model('Invoice', invoiceSchema);