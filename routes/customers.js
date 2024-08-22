const express = require('express');
const router = express.Router();
const Customer = require('../models/customer');

// Index - Show all customers
router.get('/', async (req, res) => {
    const customers = await Customer.find({});
    res.render('customers/index', { customers });
});

// New - Show form to create a new customer
router.get('/new', (req, res) => {
    res.render('customers/new');
});

// Create - Add new customer to DB
router.post('/', async (req, res) => {
    await Customer.create(req.body.customer);
    res.redirect('/customers');
});

// Edit - Show form to edit a customer
router.get('/:id/edit', async (req, res) => {
    const customer = await Customer.findById(req.params.id);
    res.render('customers/edit', { customer });
});

// Update - Update a particular customer
router.put('/:id', async (req, res) => {
    await Customer.findByIdAndUpdate(req.params.id, req.body.customer);
    res.redirect('/customers');
});

// Delete - Delete a particular customer
router.delete('/:id', async (req, res) => {
    await Customer.findByIdAndRemove(req.params.id);
    res.redirect('/customers');
});

module.exports = router;
