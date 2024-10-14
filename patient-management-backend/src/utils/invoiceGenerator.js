const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

// Helper function to draw a colored rectangle
const drawColoredRect = (doc, x, y, width, height, color) => {
    doc.rect(x, y, width, height).fill(color);
};

const generateInvoicePDF = async (invoice) => {
    const invoicesDir = path.join(__dirname, '../invoices');

    // Check if the directory exists, if not, create it
    if (!fs.existsSync(invoicesDir)) {
        fs.mkdirSync(invoicesDir, { recursive: true });
    }

    const filePath = path.join(invoicesDir, `invoice-${invoice.billNumber}.pdf`);
    const doc = new PDFDocument({ size: 'A4', margin: 50 });

    doc.pipe(fs.createWriteStream(filePath));

    // Header with logo and hospital details
    // doc.image('path/to/logo.png', 50, 40, { width: 100 }) // Add your logo here
    //    .fillColor('#008cba')
    //    .fontSize(20)
    //    .text('Hospital', 150, 50, { align: 'right' })
    //    .fontSize(10)
    //    .text('tagline here', { align: 'right' })
    //    .moveDown();

    doc.fillColor('#000')
       .fontSize(16)
       .text('Invoice', 50, 100)
       .fontSize(10)
       .text(`Invoice No: ${invoice.billNumber}`, 50, 120)
       .text(`Invoice Date: ${invoice.billDate}`, 50, 135)
       .text(`Total Due: $${invoice.totalAmount}`, 50, 150, { fillColor: '#008cba' });

    // Line separator
    doc.moveTo(50, 170).lineTo(550, 170).stroke();

    // Billing Information
    doc.fontSize(12)
       .text(`Invoice To:`, 50, 190)
       .fontSize(10)
       .text(invoice.patientName, 50, 205)
       .text(invoice.phoneNumber, 50, 220)
       .text(invoice.doctorName, 50, 235)
       .text(invoice.diseaseName, 50, 250);

    // Right-side billing information
    doc.fontSize(12)
       .text('Billing To:', 300, 190)
       .fontSize(10)
       .text(invoice.patientName, 300, 205)
       .text(invoice.phoneNumber, 300, 220)
       .text(invoice.doctorName, 300, 235)
       .text(invoice.diseaseName, 300, 250);

    // Invoice table headers
    const invoiceTableTop = 290;
    doc.fontSize(12).text('Description', 50, invoiceTableTop)
        .text('Qty', 250, invoiceTableTop)
        .text('Price', 300, invoiceTableTop)
        .text('Total', 400, invoiceTableTop);

    drawColoredRect(doc, 50, invoiceTableTop - 5, 500, 20, '#f0f0f0');

    // Adding items to the invoice
    let position = invoiceTableTop + 25;
    invoice.items.forEach((item, index) => {
        doc.fontSize(10)
            .text(item.description, 50, position)
            .text(item.qty, 250, position)
            .text(`$${item.price}`, 300, position)
            .text(`$${item.total}`, 400, position);
        position += 20;
    });

    // Subtotal and totals
    doc.fontSize(12)
       .text(`Subtotal: $${invoice.subTotal}`, 400, position + 20)
       .text(`Tax: $${invoice.tax}`, 400, position + 40)
       .text(`Total: $${invoice.totalAmount}`, 400, position + 60, { fillColor: '#008cba' });

    // Payment method and details
    position += 80;
    doc.fontSize(10)
       .text('Payment Method', 50, position)
       .text(`Bank Name: ${invoice.payment.bankName}`, 50, position + 15)
       .text(`Account No: ${invoice.payment.accountNumber}`, 50, position + 30);

    // Footer - Terms and Conditions
    doc.moveTo(50, doc.page.height - 100).lineTo(550, doc.page.height - 100).stroke();
    doc.fontSize(8).text('Terms and Conditions', 50, doc.page.height - 90)
       .text('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis turpis nulla.', 50, doc.page.height - 75, { align: 'justify' });

    doc.end();

    return filePath;
};

module.exports = { generateInvoicePDF };