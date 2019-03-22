module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index')
    })
    //登录
    app.use('/api/login', require('./login'))
    //主页联系
    app.use('/api/home/contact', require('./contact'))
    //主页背景
    app.use('/api/home/back', require('./homeBack'))
    //主页网页
    app.use('/api/home/web', require('./homeWeb'))
    //生活博客
    app.use('/api/life', require('./lifeBlog'))
    //技术博客
    app.use('/api/tec', require('./tecBlog'))
    //草稿
    app.use('/api/manu', require('./manuscript'))
    //个人介绍技能
    app.use('/api/introduction/skill', require('./skills'))
    //个人介绍画作
    app.use('/api/introduction/draw', require('./draw'))
    //个人介绍视频
    app.use('/api/introduction/guitar', require('./login'))
    //个人介绍获奖
    app.use('/api/introduction/award', require('./awards'))
    // 404 page
    app.use(function (req, res) {
        if (!res.headersSent) {
            res.status(404).render('404')
        }
    })
}