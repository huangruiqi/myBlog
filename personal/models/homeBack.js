//主页背景
const mongoose = require('mongoose')

const BackSchema = new mongoose.Schema({
    "backgroundUrl": String
});
module.exports = Back = mongoose.model('Back', BackSchema);