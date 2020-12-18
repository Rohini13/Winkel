const express = require('express');
const mongoose = require('mongoose');
const config = require('config')
const passport = require('passport');
const session = require('express-session')


const items = require('./routes/api/items');
const index = require('./routes/api/index');

const app = express();

//body-parser middleware
app.use(express.json());

app.use(session({
    secret: 'shopaholic' ,
    resave: true,
    saveUninitialized: true}))

//passport config
require('./config/passport')(passport);
// passport middleware
app.use(passport.initialize());
app.use(passport.session());


//db config 
const db = config.get('mongoURI');

//connect to mongo
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

//use routes
app.use('/api/items', items);
app.use('/api', index);

// serve static assets if in production
if(process.env.NODE_ENV == 'production') {
    //set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server started on port ' + port));