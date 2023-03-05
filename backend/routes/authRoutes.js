const router = require('express').Router();
const {createUser,loginUser} = require('../controllers/authController')

router.post('/register',createUser)
router.post('/login',loginUser);

module.exports = router;