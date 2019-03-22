//技术博客
const mongoose = require('mongoose')

const TecSchema = new mongoose.Schema({
    "cover": String,
    "pullTime": String,
    "content": String,
    "title": String
});
module.exports = Tec = mongoose.model('Tec', TecSchema)