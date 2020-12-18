const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    /*image: {
        type: String
    },*/
    price: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports.ItemSchema = ItemSchema
module.exports.Item = mongoose.model('Item', ItemSchema);