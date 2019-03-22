//个人介绍获奖
const mongoose = require('mongoose')

const AwardsSchema = new mongoose.Schema({
    "name": String,
    "class": Number
});
module.exports = Awards = mongoose.model('Awards', AwardsSchema)