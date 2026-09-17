const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const orderController = require('./controllers/orderController');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public')); // Serves the HTML file

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/buyforbachat', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected for Buy for Bachat"))
    .catch(err => console.log(err));

// The API Route for placing orders
app.post('/api/orders', orderController.placeOrder);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

