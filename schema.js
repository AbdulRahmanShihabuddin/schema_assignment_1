// Import Mongoose
const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    age: {
        type: Number
    },
    lastLogin: {
        type: Date
    }
});
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    roles: {
        type: [String]
    },
    profile : profileSchema
})

module.exports = mongoose.model('User', userSchema);
module.exports = mongoose.model('Profile', profileSchema);
