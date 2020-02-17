const { Schema } = require('mongoose');
const connections = require('../../config/connection');

const UserSchema = new Schema({
    email: {
        type: String,
        trim: true,
        default: 'default@default.df'
    },
    fullName: {
        type: String,
        requiredPaths: true,
        trim: true,
        default: 'default'
    }
}, {
    collection: 'usermodel',
    versionKey: false
});

module.exports = connections.model('UserModel', UserSchema);