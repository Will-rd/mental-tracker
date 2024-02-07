const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const daySchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    spectrum: {
        type: Number,
        required: true,
        max: 2,
        min: 0,
        default: 0
    },
    entry: {
        type: String,
        default: "It's a beautiful day to be alive..."
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
},
    {
        timestamps: true
    }
);

const Day = mongoose.model("Day", daySchema, "Day");
module.exports = Day;
