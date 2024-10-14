const stripe = require('../config/paymentGateway');
const Invoice = require('../models/invoiceModel');
const Payment = require('../models/paymentModel');

//handle stripe payment
const processPayment = async (req, res) => {
    const { invoiceId, paymentMethod, amount } = req.body;

    try {
        if (paymentMethod === 'Online') {
            // Process payment through Stripe
            const paymentIntent = await stripe.paymentIntents.create({
                amount: amount * 100, // Stripe uses cents
                currency: 'usd',
                payment_method_types: ['card'],
            });

            // Save online payment details in DB
            const payment = new Payment({
                invoiceId,
                paymentMethod: 'Online',
                amount,
                transactionId: paymentIntent.id,
            });
            await payment.save();

            return res.status(200).json({ success: true, clientSecret: paymentIntent.client_secret });
        } else if (paymentMethod === 'Cash') {
            // Handle cash payment, no transaction ID needed
            const payment = new Payment({
                invoiceId,
                paymentMethod: 'Cash',
                amount,
                paymentStatus: 'Completed',
            });
            await payment.save();

            return res.status(200).json({ success: true, message: 'Cash payment completed' });
        } else {
            return res.status(400).json({ success: false, message: 'Invalid payment method' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//get payment
const getPayment = async (req, res) => {
    try {
        const payment = await Payment.find();
        res.status(200).json(payment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//update payment
const updatePayment = async (req, res) => {
    const { paymentId } = req.body;
    try {
        const payment = await Payment.findByIdUpdate(paymentId, req.body, { new: true });
        if (!payment) return res.status(400).json({ message: 'Payment not update' });

        res.status(200).json({ message: 'Payment updated', payment });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//delete payment
const deletePayment = async (req, res) => {
    const { paymentId } = req.body;
    try {
        const payment = await Payment.findByIddelete(paymentId);
        if (!payment) return res.status(400).json({ message: 'Payment not delete' });

        res.status(200).json({ message: 'Payment deleted', payment });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    processPayment,
    getPayment,
    updatePayment,
    deletePayment
}