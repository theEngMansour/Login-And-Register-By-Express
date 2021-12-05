/**
 * JsonWebToken
 */
const jwt = require('jsonwebtoken');

/**
 * User Model
 */
const User = require('../models/user');
const Profile = require('../models/profile');

/**
 * Create Account
 */
exports.register = (req, res, next) => {
    const get = req.body;
    const data = {
        name:       get.name,
        email:      get.email,
        password:   get.password,
        userType:   get.userType,
        latitude:   get.latitude,
        longitude:  get.longitude
    };
    const doctorData = {
        speialization: get.speialization,
        address:       get.address,
        workingHours:  get.workingHours,
        phone:         get.phone,
    };

    User.create(data)
    .then(user => {
        let token = jwt.sign({
            id: user._id, 
            name: user.name, 
            email: user.email,
        }, process.env.JWT_SECRET);

        if (user.userType === 'doctor'){
            Profile.create(doctorData);
        }
        res.json({token: token, _id: user._id, message: "تم إنشاء الحساب بنجاح"});
    }).catch(next);
};