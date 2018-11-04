const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema('contact', {
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    phone_no: {
        type: String,
        required: true  
    }
})


const Contact = module.exports = mongoose.model('Contacts', ContactSchema)