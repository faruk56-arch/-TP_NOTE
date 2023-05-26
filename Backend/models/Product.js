const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'cant be blank'],
    },
    description: {
        type: String,
        required: [true, 'cant be blank'],
    },
    price: {
        type: String,
        required: [true, 'cant be blank'],
    },
    category: {
        type: String,
        required: [true, 'cant be blank'],
    },
    pictures: {
        type: Array,
        required: true,
    },
}, { minimize: false });

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
