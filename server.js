const express = require('express');
const mongoose = require('mongoose');
const config = require('config')

const items = require('./routes/api/items');

const app = express();

//body-parser middleware
app.use(express.json());

//db config 
const db = config.get('mongoURI');

//connect to mongo
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

//use routes
app.use('/api/items', items);

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