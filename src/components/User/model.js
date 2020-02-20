const { Schema } = require('mongoose');
const connections = require('../../config/connection');

const UserSchema = new Schema({
    email: {
        type: String,
        trim: true,
        default: 'test@default.com' // default user email
    },
    fullName: {
        type: String,
        requiredPaths: true,
        trim: true,
        default: 'default' // default user name
    }
}, {
    collection: 'usermodel', // db collection
    versionKey: false
});

module.exports = connections.model('UserModel', UserSchema);