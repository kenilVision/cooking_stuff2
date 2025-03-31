const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true }, 
    password: { type: String, required: true },
});

const Profile = mongoose.model('Profile', ProfileSchema);
module.exports = Profile;
