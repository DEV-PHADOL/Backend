const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/testing');

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    age:Number,
    posts: []
});

module.exports = mongoose.model('user',userSchema); 