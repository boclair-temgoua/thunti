const express = require('express');
const userAuthMiddleware = require('../app/Middleware');
const UserController = require('../app/Controllers/user');

const router = express.Router();

// router.get('/user/profile', userAuthMiddleware.checkAuth, UserController.profile);
// router.get('/up/:id/:username', UserController.showpublic);
router.get('/users/:user', userAuthMiddleware.authMiddleware, UserController.show);
// router.get('/userinfo/:user', userAuthMiddleware.checkAuth, UserController.showuserSlugin);
router.put('/users/:user', userAuthMiddleware.authMiddleware, UserController.update);
// router.put('/users/:user/profile', userAuthMiddleware.checkAuth, UserController.updateProfile);

module.exports = router;
