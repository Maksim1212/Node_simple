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

    /**
     * @exports
     * @method createUser
     * @param {email, fullname}
     * @summary create new user
     * @returns Promise<UserModel[]>
     */
    async createUser(user) {
        return await UserModel.create(user);
    },

    /**
     * @exports
     * @method findUser
     * @param {email}
     * @summary find one user
     * @returns Promise<UserModel[]>
     */
    async findUser(email) {
        return await UserModel.findOne({ email })
            // return await UserModel.find({ email }) // find all users fith searching email
    },

    /**
     * @exports
     * @method updateUser
     * @param {email,fullName}
     * @summary update one user
     * @returns Promise<UserModel[]>
     */
    async updateUser(user) {
        return await UserModel.updateOne({ email: user.email }, {
            fullName: user.fullName
        });
    },

    /**
     * @exports
     * @method updateUser
     * @param {email}
     * @summary delete one user
     * @returns Promise<UserModel[]>
     */
    async deleteUser(email) {
        return await UserModel.deleteOne({ email })
    }
};