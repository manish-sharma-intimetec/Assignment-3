const express = require('express');
const authenticationController = require('../controllers/authenticationController');

const router = express.Router();


router.post('/signup', authenticationController.signUp);
router.post('/signin', authenticationController.signIn);

module.exports = router;