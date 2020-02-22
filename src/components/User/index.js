const UserService = require('./service');
const Joi = require('./validation');

/**
 * @function find all users
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

/**
 * @function create one user
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function createUser(req, res, next) {
    try {
        const { error } = await Joi.creationSchema.validate(req.body);
        if (error) {
            res.status(400).send(error);
        }
        const user = {
            email: req.body.email,
            fullName: req.body.fullName
        }; // pars user data email and fullName
        await UserService.createUser(user) // create new user
        res.status(200).json(user);
        console.log(user);
    } catch (error) {
        next(error);
    }
};

/**
 * @function find one user 
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function findUser(req, res, next) {
    try {
        const { error } = await Joi.findSchema.validate(req.body);
        if (error) {
            res.status(400).send(error);
        }
        const user = await UserService.findUser(req.body.email) //find user to user Email
        console.log(user);
        res.status(200).json(user);
    } catch (error) {
        // res.status(400).send(error);
        next(error);
    }
}

/**
 * @function update one user
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function updateUser(req, res, next) {
    try {
        const { error } = await Joi.creationSchema.validate(req.body);
        if (error) {
            res.status(400).send(error);
        }
        const user = {
            email: req.body.email,
            fullName: req.body.fullName
        };
        await UserService.updateUser(user) // update user data
        console.log(user);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

/**
 * @function delete one user
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 * @returns {Promise < void >}
 */
async function deleteUser(req, res, next) {
    try {
        const { error } = await Joi.findSchema.validate(req.body); // use validation
        if (error) {
            res.status(400).send(error);
        }
        const user = await UserService.deleteUser(req.body.email) // delete one user 
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