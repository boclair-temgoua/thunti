const express = require('express');
const AuthuserController = require('../app/Controllers/Auth');

const router = express.Router();

router.post('/register', AuthuserController.register);
router.post('/login', AuthuserController.login);

module.exports = router;
