const mongoose = require('mongoose')

// all the user-required fields
const userSchema = mongoose.Schema({
    name: {
        type: String, 
        required: [true, 'Please add a name']
    },
    email: {
        type: String, 
        required: [true, 'Please add an email'],
        unique: true
    },
    password: {
        type: String, 
        required: [true, 'Please add a password']
    },
    
    // I need to further add role, phone number here later
}, 
{
    timestamps: true
}
)

module.exports = mongoose.model('User', userSchema)