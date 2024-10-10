const Invoice = require('../models/invoiceModel');
const { generateInvoicePDF } = require('../utils/invoiceGenerator');

//create bill
const createInvoice = async (req, res) => {
    try {
        const invoiceData = req.body;

        // Save invoice to DB
        const invoice = new Invoice(invoiceData);
        await invoice.save();

        // Generate PDF
        const invoicePDF = await generateInvoicePDF(invoice);

        res.status(201).json({ success: true, invoice, invoicePDF });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

//get invoice
const getInvoice = async (req, res) => {
    try {
        const invoice = await Invoice.find();
        res.status(200).json(invoice);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//update invoice
const updateInvoice = async (req, res) => {
    const { invoiceID } = req.body;
    try {
        const invoice = await Invoice.findByIdUpdate(invoiceID, req.body, { new: true });
        if (!invoice) return res.status(400).json({ message: 'Bill not update' });

        res.status(200).json({ message: 'Bill updated', invoice });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//delete invoice
const deleteInvoice = async (req, res) => {
    const { invoiceID } = req.body;
    try {
        const invoice = await Invoice.findByIdDelete(invoiceID);
        if (!invoice) return res.status(400).json({ message: 'Bill not delete' });

        res.status(200).json({ message: 'Bill deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    createInvoice,
    getInvoice,
    updateInvoice,
    deleteInvoice
}