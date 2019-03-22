//登陆
const mongoose = require('mongoose')

const loginSchema = new mongoose.Schema({
    "name": String,
    "password": String,

});
module.exports = Login = mongoose.model('Login', loginSchema)