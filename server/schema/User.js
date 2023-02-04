import mongoose from 'mongoose';

const userSchema = new mongoose.Schema ({
  "_id": mongoose.SchemaTypes.ObjectId,
  "username": {
    type: String,
    required: true,
    immutable: true,
    lowercase: true,
    minLength: 8,
    maxLength: 32 },
  "e-mail": {
    type: String,
    required: true,
    lowercase: true,
    minLength: 10,
    maxLength: 32 },
  "password": { type: String, required: true },
  "weight": { type: Number, min: 10, max: 1000 },
  "height": { type: Number, min: 30, max: 300 },
  "age": { type: Number, min: 5, max: 150 },
  "gender": { type: String, lowercase: true },
  "routine": [{ type: mongoose.SchemaTypes.ObjectId, ref: "Exercise" }],
  "signupAt": { type: Date, default: () => Date.now() },
  "updatedAt": { type: Date, default: () => Date.now() }
});

const User = mongoose.model('User', userSchema);

module.exports = { User, userSchema };
