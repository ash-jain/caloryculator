import mongoose from "mongoose";

const exerciseSchema = new mongoose.Schema({
    "_id": mongoose.SchemaTypes.ObjectId,
    "title": { type: String },
    "practice": String,
    "MET": String,
    "measure": String,
    "default-value": String,
    "focus": {
        "primary": [String],
        "secondary": [String],
    }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

export { Exercise, exerciseSchema };