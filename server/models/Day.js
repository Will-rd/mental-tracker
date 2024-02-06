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
    }
},
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }
);

const Day = mongoose.model("Day", daySchema);
module.exports = Day;
