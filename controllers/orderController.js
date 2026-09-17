const Order = require('../models/Order');

exports.placeOrder = async (req, res) => {
    try {
        const { customerName, address, bookTitle, amount, paymentMethod, upiTransactionId } = req.body;
        
        // Ensure UPI ID is provided if UPI is selected
        if (paymentMethod === 'UPI' && !upiTransactionId) {
            return res.status(400).json({ error: "UPI Transaction ID is required." });
        }

        const newOrder = new Order({
            customerName,
            address,
            bookTitle,
            amount,
            paymentMethod,
            upiTransactionId
        });

        await newOrder.save();
        res.status(201).json({ message: "Order placed successfully!", orderId: newOrder._id });
    } catch (error) {
        res.status(500).json({ error: "Failed to place order. Please try again." });
    }
};

