const express = require('express');
const router = express.Router();

const Contact = require('../models/contact')

// Retrieving contact list
router.get('/contact', (req, res, next) => {
    Contact.find((err, contacts) => {
        res.json(contacts);
    })
});

//adding contact
router.post('/contact', (req, res, next) => {
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone_no: req.body.phone_no
    });

    newContact.save((err, contact) => {
        if(err) {
            res.json({msg: "Failed to add contact"});
        } else {
            res.json({msg: "Contact added Successfully"});
        }
    })
})

// Removing contact
router.delete('contact/:id', (req, res, next) => {
    let _id = req.params.id;

    Contact.remove({_id: _id }, (err, res) => {
        if(err) {
            res.json({msg: "Error while deleting contact"})      
        } else { 
            res.json(res);
        }
    })
})

module.exports = router;    