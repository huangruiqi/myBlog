//生活博客
const mongoose = require('mongoose')

const LifeSchema = new mongoose.Schema({
    "cover": String,
    "pullTime": String,
    "content": String,
    "title": String
});
module.exports = Life = mongoose.model('Life', LifeSchema)