const express = require('express')
const router = express.Router()
const Login = require('../models/login');

// 用户登录
router.post('/login', function (req, res, next) {
    const { type, username, password } = req.body
    Login.find({ username, password: sha1(password) }, (err, docs) => {
        if (err) {
            res.json({
                status: 0,
                data: '登录失败'
            })
        }
        if (docs.length > 0) {
            if (!req.session.user) {
                req.session.user = {
                    type,
                    id: docs[0]._id
                }
            }
            res.json({
                status: 1,
                data: '登录成功'
            })
        } else {
            res.json({
                status: 0,
                data: '该用户不存在或密码错误'
            })
        }
    })
})

module.exports = router;