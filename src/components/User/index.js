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
        console.log('findAll ok')
    } catch (error) {
        next(error);
    }
}

async function createUser(req, res, next) {
    try {
        const user = {
            email: req.body.email,
            fullName: req.body.fullName
        };
        await UserService.createUser(user)
        res.status(200).json(user);
        console.log(user);

    } catch (error) {
        next(error);
        // res.status(500);
    }
};

module.exports = {
    findAll,
    createUser
}