//个人介绍吉他视频
const mongoose = require('mongoose')

const GuitarSchema = new mongoose.Schema({
    "videosSrc": String
});
module.exports = Guitar = mongoose.model('Guitar', GuitarSchema)