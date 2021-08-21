const express = require('express');
const userAuthMiddleware = require('../src/Middleware');
const MessageController = require('../src/Controllers/messages');

const router = express.Router();

router.get('/messages', userAuthMiddleware.authMiddleware, MessageController.index);
router.get('/messages/:userto/:userfrom', userAuthMiddleware.authMiddleware, MessageController.userShow);

module.exports = router;
