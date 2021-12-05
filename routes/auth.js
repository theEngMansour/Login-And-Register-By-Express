/**
 * Express Module
 */
var express = require('express');

/**
 * Express Router
 */
var router = express.Router();

/**
 * Auth Controller
 */
const controller = require('../controllers/login');

/**
 * Auth Middleware
 */
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/',authMiddleware.guest, controller.login);
router.get('/', authMiddleware.authenticated, controller.me);



module.exports = router;