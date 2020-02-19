const UserModel = require('./model');

module.exports = {
    /**
     * @exports
     * @method findAll
     * @param {}
     * @summary get list of all users
     * @returns Promise<UserModel[]>
     */
    async findAll() {
        return await UserModel.find({});
    },

    async createUser(user) {
        return await UserModel.create(user);
    },

    async findUser(email) {
        return await UserModel.findOne({ email })
            // return await UserModel.find({ email }) // find all users fith searching email
    },

    async updateUser(user) {
        return await UserModel.updateOne({})
    },

    async deleteUser(email) {
        return await UserModel.deleteOne({ email })
    }
};