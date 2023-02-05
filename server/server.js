import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';

import { User } from './schema/User.js';
import { Exercise } from './schema/Exercise.js';

import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

dotenv.config();

const app = express();

mongoose.connect(`${process.env.DB_URL}`,
() => console.log('Connected to the database. ✅'),
(e) => console.log(e));
const models = { User, Exercise };

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, 'build')));
app.use(cors({ origin: 'https:/localhost' }));

// TODO: Authentication.

// TODO: Serve react.
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
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

app.get('*', (req, res) => {
  res.status(404);
  res.send("<h1>404 Not Found</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}. 👂`);
});
