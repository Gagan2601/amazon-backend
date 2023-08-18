const mongoose = require('mongoose');
const addressSchema  = require("./address");
const { validateEmail } = require('../validations/common');
const sellerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate: validateEmail,
    },
    password: {
        type: String,
        required: true,
    },
    address: addressSchema,
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],
    createdAt: {
        type: Date, 
        default: Date.now
    },
    updatedAt: {
        type: Date, 
        default: Date.now
    },
});
const Seller = mongoose.model('Seller', sellerSchema);
module.exports = Seller;