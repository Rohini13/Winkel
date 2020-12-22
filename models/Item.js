const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    price: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true,
        default: "I'm not your toy (not your toy).You stupid boy(stupid boy).I'll take you down now, make you watch me.Dancing with my dolls on the motha- bucka beat.Not your toy…"
    },
});

module.exports.ItemSchema = ItemSchema
module.exports.Item = mongoose.model('Item', ItemSchema);