const express = require('express');
const router = express.Router();

//item model
const {Item} = require('../../models/Item');
//user model
const User = require('../../models/User');

//@route  GET api/cart/:id
//@desc   Get all items in user's cart
//@access Private
router.get('/:id', auth, (req, res) => {
    User.findById(req.params.id)
        .then(user => {
            var cart = user.cartItems;
            res.json(cart);
        });
});

//@route  POST api/cart/:id1/:id2
//@desc   add an item in user's cart
//@access Private
router.post('/:id1/:id2', auth, (req, res) => {
    Item.findById(req.params.id2)
        .then(item => {
            User.findById(req.params.id1)
                .then(user => {
                    user.cartItems.push(item);
                    user.save();
                    var cart = user.cartItems;
                    res.json(cart);
                });
        })
});

//@route  DELETE api/items/:id1/:id2
//@desc   Delete an item
//@access Private
router.delete('/:id1/:id2', auth, (req, res) => {
    User.findById(req.params.id1)
        .then(user => {
            Item.findById(req.params.id2)
                .then(item => {
                    var index = user.cartItems.indexOf(item);
                    user.cartItems.splice(index, 1);
                    res.json(user);
                })
        })
});

function auth(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        return res.status(401).json('Please login to make changes to cart')
    }
}

module.exports = router;