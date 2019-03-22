// 学生
const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    "contact": String
});
module.exports = Contact = mongoose.model('Contact', contactSchema)