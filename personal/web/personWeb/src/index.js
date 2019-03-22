import dva from 'dva';
import { createBrowserHistory as createHistory } from 'history';

// import mavonEditor from 'mavon-editor'

import './styles/index.scss';//引入全局scss文件

import './utils/font.js'//引入改变REM值的文件
// import './assets/mditor/css/mditor.css'
// import './assets/mditor/js/mditor.js'


// 1. Initialize
const app = dva({
    history: createHistory()
});
// 2. Plugins
// app.use(mavonEditor);

// 3. Model
require('./models').default.forEach(key => app.model(key.default));

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
