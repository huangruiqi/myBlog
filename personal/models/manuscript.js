//草稿博客
const mongoose = require('mongoose')

const manuSchema = new mongoose.Schema({
    "pullTime": String,
    "content": String,
    "title": String
});
module.exports = Manu = mongoose.model('Manu', manuSchema)