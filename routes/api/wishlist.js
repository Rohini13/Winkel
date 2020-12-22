const express = require('express');
const router = express.Router();

const { Item } = require('../../models/Item');
const User = require('../../models/User');


router.get('/:id', auth, (req, res) => {
    User.findById(req.params.id)
        .then(user => {
            var list = user.wishlist;
            res.json(list);
        });
});


router.post('/:id1/:id2', auth, (req, res) => {
    User.findById(req.params.id1)
        .then(user => {
            Item.findById(req.params.id2)
                .then(item => {
                    var flag=false
                    user.wishlist.forEach(element => {
                        if(req.params.id2==element._id)
                        flag=true
                    });
                    if(!flag)
                    {
                        user.wishlist.unshift(item)
                        user.save()
                        var list = user.wishlist
                        return res.json(list)
                    }
                        
                    else
                    {
                        var list = user.wishlist
                        res.json(list)
                    }
                })
        })
});


router.delete('/:id1/:id2', auth, (req, res) => {
    User.findById(req.params.id1)
        .then(user => {
                    var index = 0
                    user.wishlist.forEach(element => {
                        if (req.params.id2 == element._id)
                            {
                                user.wishlist.splice(index, 1);
                                user.save()
                                return res.json(user.wishlist);
                            }
                        index++;
                })
        })
});

function auth(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        return res.status(401).json('Please login to add items to wishlist')
    }
}

module.exports = router;