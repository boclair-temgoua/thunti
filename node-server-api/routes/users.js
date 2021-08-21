const express = require('express');
const userAuthMiddleware = require('../src/Middleware');
const UserController = require('../src/Controllers/user');

const router = express.Router();

router.get('/users', userAuthMiddleware.authMiddleware, UserController.index);
// router.get('/up/:id/:username', UserController.showpublic);
router.get('/users/:user', userAuthMiddleware.authMiddleware, UserController.show);
// router.get('/userinfo/:user', userAuthMiddleware.checkAuth, UserController.showuserSlugin);
router.put('/users/:user', userAuthMiddleware.authMiddleware, UserController.update);
// router.put('/users/:user/profile', userAuthMiddleware.checkAuth, UserController.updateProfile);

module.exports = router;
