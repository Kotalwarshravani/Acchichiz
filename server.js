require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

// Mock database
let orders = [];

// Routes
app.get('/', (req, res) => res.render('checkout'));

app.post('/process-payment', (req, res) => {
  const order = {
    id: Date.now(),
    name: req.body.name,
    email: req.body.email,
    amount: req.body.amount,
    status: 'success',
    date: new Date().toISOString()
  };
  orders.push(order);
  res.render('confirmation', { order });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});