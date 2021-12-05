const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    speialization: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    workingHours: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
});

// User Model 
const Profile = mongoose.model('Profile', ProfileSchema);
module.exports = Profile;