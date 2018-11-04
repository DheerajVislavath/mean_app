const express = require('express');
const router = express.Router();

// Retrieving contact list
router.get('/contacts', (req, res, next) => {
    res.send('Contact List')
});

//adding contact
router.post('/contacts', (req, res, next) => {
    
})

// Removing contact
router.delete('contacts/:id', (req, res, next) => {
    
})
module.exports = router;