//个人介绍画作
const mongoose = require('mongoose')

const DrawsSchema = new mongoose.Schema({
    "drawSrc": String
});
module.exports = Draws = mongoose.model('Draws', DrawsSchema)