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

async function createUser(req, res) {
    console.log(req.body);

};


module.exports = {
    findAll,
    createUser
}