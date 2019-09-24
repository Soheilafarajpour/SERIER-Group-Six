const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    affiliation: {
        //User Affiliation (institution or organisation)
        type: String,
        required: true
    },
    role: {
        //User role (admin, moderator, analyst, user, member of SDM class) can be multiple?
        type: String,
        default: 'user',
        required: true
    },
    gender: {
        type: String,
        required: false
    },
    age: {
        type: Number,
        required: false
    }
});

UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model('User', UserSchema)
export default User;
