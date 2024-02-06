const mongoose = require('mongoose');
const Day = require('./Day');

const { Schema, model } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 4
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 8,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate: {
            validator: (value) => {
                const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
                return emailRegex.test(value);
            },
            message: 'Invalid email address'
        }
    },
    touchySubs: {
        type: [String]
    },
    days: [
        {
            type: Schema.Types.ObjectId,
            ref: "Day"
        }
    ]
});

const User = mongoose.model("User", userSchema, "User");
module.exports = User