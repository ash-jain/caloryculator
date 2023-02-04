import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';

import { User } from './schema/User.js';
import { Exercise } from './schema/Exercise.js';

dotenv.config();

const app = express();

mongoose.connect(`${process.env.DB_URL}`,
() => console.log('Connected to the database'),
(e) => console.log(e));
models = { User, Exercise };

app.use(morgan('tiny'));
app.use(cors({ origin: 'https:/localhost' }));

// TODO: Authentication.

// TODO: Serve react.
app.get('/', (req, res) => {
  res.send('Under construction 🏗...');
});

app.get('/workouts', cors(), (req, res) => {
  models.Exercise.find({}, (err, data) => {
    if (err) console.log(err);
    else return res.json(data);
  });
});

// TODO: Implement data saving option.
app.post('/save', (req, res) => {
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}...`);
});
