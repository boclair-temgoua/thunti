const express = require('express');
const AuthuserController = require('../app/Controllers/Auth');

const router = express.Router();

// router.post('/user_check/:slugin', userAuthMiddleware.checkAuth, AuthuserController.usercheck);
// router.post('/verify_email/:slugin', userAuthMiddleware.checkAuth, VerifyemailuserController.verifyemail);
// router.post('/resend_email/:slugin', userAuthMiddleware.checkAuth, VerifyemailuserController.resendemail);

router.post('/register', AuthuserController.register);
// router.post('/login', AuthuserController.login);

// router.post('/password/reset', ResetpasswordController.passwordreset);
// router.put('/password/update/:user', userAuthMiddleware.checkAuth, ResetpasswordController.changeresetupdate);
// router.put('/password/reset/:usertoken', ResetpasswordController.passwordresetupdate);

module.exports = router;
