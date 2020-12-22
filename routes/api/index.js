const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs');
const passport = require('passport');
const User = require('../../models/User')
const {Item} = require('../../models/Item')

router.post('/register', (req, res) => {
    const { username, email, password, address } = req.body
    if (!username || !email || !password || !address)
        res.status(400).json({ msg: "Please Enter All Details" })

    const { hno, city, state, pincode } = address

    if (!hno || !city || !state || !pincode)
        res.status(400).json({ msg: "Please Specify Complete Address" })

    User.findOne({ email })
        .then(user => {
            if (user) return res.status(400).json({ msg: 'User already exists' })
            User.findOne({ username })
                .then(user => {
                    if (user) return res.status(400).json({ msg: 'Username is taken' })
                    if (password.length < 8) return res.status(400).json({ msg: 'Password must be minimum 8 characters' })
                    const newUser = new User({
                        username,
                        email,
                        password,
                        address,
                    })

                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if (err) throw err
                            newUser.password = hash
                            newUser.save()
                                .then(user => {
                                    res.json({
                                        user: {
                                            id: user.id,
                                            username: user.username,
                                            email: user.email,
                                            address: user.email,
                                        }
                                    })
                                })
                        })
                    })

                })
        })
});

router.post('/login', function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
        if (err) { return next(err) }
        if (!user) return res.status(400).json({ msg: info })
        req.logIn(user, function (err) {
            if (err) { return next(err) }
            //console.log(req.user)
            return res.json({
                user: {
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    address: user.email,
                }
            })
            // res.redirect('/api/'+user._id)
        })
    })(req, res, next);
})

router.get('/logout', (req, res) => {
    req.logout();
    //res.json({msg:'logged out'})
    res.redirect('/api/items')
})

router.get('/:uid', auth, (req, res) => {
    User.findOne({ _id:req.params.uid })
        .then(user => {
            if (!user) return res.status(400).json({ msg: "No such user exists" })
            Item.find()
                .sort({ date: -1 })
                .then(items => res.json({user,items}))
        })
        .catch(err =>{res.json({msg:err.message})})
})

function auth(req, res, next) {
    if (req.isAuthenticated()&&(req.user._id==req.params.uid))
        return next();

    else return res.status(401).json('Unauthorized')
}

module.exports = router;