const express = require('express');
const router = express.Router();
const Feedback = require('../models/feedback');
const Customer = require('../models/customer');

// Index - Show all feedbacks
router.get('/', async (req, res) => {
    const feedbacks = await Feedback.find({}).populate('customerId');
    res.render('feedbacks/index', { feedbacks });
});

// New - Show form to create new feedback
router.get('/new', async (req, res) => {
    const customers = await Customer.find({});
    res.render('feedbacks/new', { customers });
});

// Create - Add new feedback to DB
router.post('/', async (req, res) => {
    await Feedback.create(req.body.feedback);
    res.redirect('/feedbacks');
});

// Delete - Delete a particular feedback
router.delete('/:id', async (req, res) => {
    await Feedback.findByIdAndRemove(req.params.id);
    res.redirect('/feedbacks');
});

module.exports = router;
