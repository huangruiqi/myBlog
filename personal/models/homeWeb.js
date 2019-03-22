 //主页展示页面
const mongoose = require('mongoose')

const WebSchema = new mongoose.Schema({
    "picUrlOne": String,
    "picUrlTwo": String,
    "picUrlThree": String,
    "attribute": String,
    "site": String,
    "intr": String
});
module.exports = Web = mongoose.model('Web', WebSchema)