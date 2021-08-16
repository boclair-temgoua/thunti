const express = require('express');
const userAuthMiddleware = require('../app/Middleware');
const MessageController = require('../app/Controllers/messages');

const router = express.Router();

router.get('/messages', userAuthMiddleware.authMiddleware, MessageController.index);
router.get('/messages/:userto/:userfrom', userAuthMiddleware.authMiddleware, MessageController.userShow);

module.exports = router;
