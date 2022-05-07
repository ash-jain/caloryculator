const express = require('express');
const app = express();

const config = require('dotenv').config();

const mongoose = require('mongoose');
const db = mongoose.connect(`${process.env.DB_URL}`);
const models = require('./schema.js');

// TODO: Authentication logic.

const logger = require('morgan');
const cors = require('cors');


app.use(logger('tiny'));
app.use(cors({'origin': 'https:/localhost'}));


// TODO: Serve react.
app.get('/', (req, res) => {
    res.send('Under construction 🏗...');
});

app.get('/workouts', cors(), (req, res) => {
    models.Exercise.find({}, (err, data) => {
        if (err)
            console.log(err)
        else
            return res.json(data);
    });
});

// TODO: Implement data saving option.
app.post('/save', (req, res) => {

});


app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}...`);
});
