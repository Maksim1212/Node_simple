const UserService = require('./service');

/**
 * @function
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function findAll(req, res, next) {
    try {
        const users = await UserService.findAll();

        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
}

async function createUser(req, res, next) {
    const user = new UserModel(req.body)
    try {
        await user.save();
        res.send(user);
    } catch (err) {
        res.status(500).send(err);
    }
}

module.exports = {
    findAll,
    createUser
}