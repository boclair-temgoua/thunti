const express = require('express');
const AuthuserController = require('../src/Controllers/auth');

const router = express.Router();

router.post('/register', AuthuserController.register);
router.post('/login', AuthuserController.login);
router.post('/reset_password', AuthuserController.resetpassword);
router.put('/reset_password/:resetpassword', AuthuserController.resetpasswordupdate);

module.exports = router;
