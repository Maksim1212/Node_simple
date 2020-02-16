const { Router } = require('express');
const UserComponent = require('../User');

/**
 * Express router to mount user related functions on.
 * @type {Express.Router}
 * @const
 */
const router = Router();

/**
 * Route serving list of users.
 * @name /v1/users
 * @function
 * @inner
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get('/', UserComponent.findAll);
// router.get('/v1/users/find', UserComponent.findUser);
router.post('/v1/users/create', UserComponent.createUser);
// router.put('/v1/users/update', UserComponent.updateUser);
// router.delete('/v1/users/delete', UserComponent.deleteUser);

module.exports = router;