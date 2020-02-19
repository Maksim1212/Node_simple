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
        res.status(500).send('Invalid JSON string');;
    }
};

async function findUser(req, res, next) {
    try {
        const user = await UserService.findUser(req.body.email)
        console.log(user);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

async function updateUser(req, res, next) {
    try {
        const user = {
            email: req.body.email,
            fullName: req.body.fullName
        };
        await UserService.updateUser(user)
        console.log(user);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }

}

async function deleteUser(req, res, next) {
    try {
        const user = await UserService.deleteUser(req.body.email)
        console.log(user);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    findAll,
    createUser,
    findUser,
    updateUser,
    deleteUser
}