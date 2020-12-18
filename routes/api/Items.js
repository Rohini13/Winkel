const express = require('express');
const router = express.Router();

//item model
const {Item} = require('../../models/Item');

//@route  GET api/items
//@desc   Get all items
//@access Public 
router.get('/', (req, res) => {
    Item.find()
        .sort({date: -1})
        .then(items => res.json(items))
});

//@route  POST api/items
//@desc   create an item
//@access Public
router.post('/', auth, (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        price: req.body.price
    });

    newItem.save().then(item => res.json(item));
});

//@route  DELETE api/items/:id
//@desc   Delete an item
//@access Public
router.delete('/:id', auth, (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

function auth(req, res, next) {
    //console.log(req.user)
    if (req.isAuthenticated()) {
        return next();
    } else {
        return res.status(401).json('Please login to make changes to cart')
    }
}

module.exports = router;