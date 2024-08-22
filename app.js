const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/customerManagement', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method')); // for PUT and DELETE requests
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

const customerRoutes = require('./routes/customers');
const feedbackRoutes = require('./routes/feedbacks');

app.use('/customers', customerRoutes);
app.use('/feedbacks', feedbackRoutes);
