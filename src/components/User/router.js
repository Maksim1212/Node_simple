const { Router } = require('express');
const UserComponent = require('../User');

/**
 * Express router to mount user related functions on.
 * @type {Express.Router}
 * @const
 */
const router = Router();

/**
 * Routes serving list of users and users CRUD
 * @name /v1/users
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
// find all users
router.get('/', UserComponent.findAll);
// find one user route
router.get('/find', UserComponent.findUser);
// creating user route
router.post('/create', UserComponent.createUser);
// update one user route
router.put('/update', UserComponent.updateUser);
// delete one user route
router.delete('/delete', UserComponent.deleteUser);

module.exports = router;