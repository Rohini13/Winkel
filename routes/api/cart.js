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

//@route  POST api/cart/:id
//@desc   create an item in user's cart
//@access Private
router.post('/:id', auth, (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        price: req.body.price
    });
    User.findById(req.params.id)
        .then(user => {
            user.cartItems.push(newItem);
            user.save();
            res.json(user);
        });
});

//@route  DELETE api/items/:id1:id2
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
    //console.log(req.user)
    if (req.isAuthenticated()) {
        return next();
    } else {
        return res.status(401).json('Please login to make changes to cart')
    }
}

module.exports = router;