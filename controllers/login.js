const createError = require('http-errors');
var jwt = require('jsonwebtoken');
const User = require('../models/user');
/*
 * User Login
 */
exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email, password: req.body.password })
        .then(user => {
            if (!user)
                throw createError(401, "البريد الإكتروني أو كلمة المرور غير صحيحين");
            let data = {
                id: user._id,
                name: user.name,
                email: user.email
            };
            let token = jwt.sign(data, process.env.JWT_SECRET);
            res.json({ token: token, id: user._id });
        }).catch(next);
};

/**
 * User Details
 */
exports.me = (req, res, next) => {
    res.json(req.user);
};