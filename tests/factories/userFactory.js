const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports = () => {
    return new User({}).save();
};

// const id = '6331ff74b80420b743ab214a';

