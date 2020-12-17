const mongoose = require('mongoose');
const Schema = mongoose.Schema;
import ItemSchema from './Item';

//create schema
const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    cartItems: [ItemSchema],
    address: {
        type: String,
        required: true
    },
    register_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model('User', UserSchema);