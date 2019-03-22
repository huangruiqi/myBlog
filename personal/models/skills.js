//个人介绍技能
const mongoose = require('mongoose')

const SkillsSchema = new mongoose.Schema({
    "name": String,
    "value": Number,
    "color": String
});
module.exports = Skills = mongoose.model('Skills', SkillsSchema)