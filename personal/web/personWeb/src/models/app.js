import { queryTec, queryLife, querySkills, queryDrawers, queryVideos, queryAwards } from '../services/example'

export default {

    namespace: 'app',

    state: {
        locationPathname: '',
        backgroundImage: '',
        tecBlog: {},
        lifeBlog: {},
        error: '',
        scrollTopNow: 0,//上一个滚动条高度,
        skills: [],//个人介绍的技术
        drawers: [],//个人介绍的画作
        videos: [],//个人介绍的视频
        opacityTop: 'flex',//控制top的透明度
        hiddenDivpDisplay: 'flex',//控制隐藏头部的display
        footerDisplay: 'flex'//控制footer的display
    },

    subscriptions: {
        //监听路由
        route({ dispatch, history }) {  // eslint-disable-line
            history.listen((location) => {
                dispatch({
                    type: 'updateState',
                    payload: {
                        locationPathname: location.pathname
                    }
                })
            })
        },
        //监听滚动条

        scroll({ dispatch, history }) {
            window.onscroll = () => {
                let scrollTopNow = document.documentElement.scrollTop || document.body.scrollTop;
                dispatch({
                    type: 'updateState',
                    payload: {
                        scrollTopNow: scrollTopNow
                    }
                })
                //  = document.documentElement.scrollTop || document.body.scrollTop;
            }
        }
    },

    effects: {
        *getTecBlog(_, { put, call }) {  
            // yield put({ type: 'fetch/start' });
            try {
                const tecBlog = yield call(queryTec);
                yield put({ 
                    type: "updateState", 
                    payload: {
                        tecBlog: tecBlog
                    }
                });
            } catch (e) {
                yield put({ 
                    type: "updateState", 
                    payload: {
                        error: e.message
                    }
                });
            }
        },
        *getLifeBlog(_, { put, call }) {
            // yield put({ type: 'fetch/start' });
            try {
                const lifeBlog = yield call(queryLife);
                yield put({
                    type: "updateState",
                    payload: {
                        lifeBlog: lifeBlog
                    }
                });
            } catch (e) {
                yield put({
                    type: "updateState",
                    payload: {
                        error: e.message
                    }
                });
            }
        },
        //获取个人介绍技术
        *getSkills(_, { put, call }) {
            // yield put({ type: 'fetch/start' });
            try {
                const skillsNew = yield call(querySkills);
                yield put({
                    type: "updateState",
                    payload: {
                        skills: skillsNew.data
                    }
                });
            } catch (e) {
                yield put({
                    type: "updateState",
                    payload: {
                        error: e.message
                    }
                });
            }
        },
        //获取个人画
        *getDrawers(_, { put, call }) {
            // yield put({ type: 'fetch/start' });
            try {
                const drawersNew = yield call(queryDrawers);
                yield put({
                    type: "updateState",
                    payload: {
                        drawers: drawersNew
                    }
                });
            } catch (e) {
                yield put({
                    type: "updateState",
                    payload: {
                        error: e.message
                    }
                });
            }
        },
        //获取个人视频
        *getVideos(_, { put, call }) {
            // yield put({ type: 'fetch/start' });
            try {
                const videosNew = yield call(queryVideos);
                yield put({
                    type: "updateState",
                    payload: {
                        videos: videosNew.data
                    }
                });
            } catch (e) {
                yield put({
                    type: "updateState",
                    payload: {
                        error: e.message
                    }
                });
            }
        },
        //获取个人奖项
        *getAwards(_, { put, call }) {
            // yield put({ type: 'fetch/start' });
            try {
                const awardsNew = yield call(queryAwards);
                yield put({
                    type: "updateState",
                    payload: {
                        awards: awardsNew.data
                    }
                });
            } catch (e) {
                yield put({
                    type: "updateState",
                    payload: {
                        error: e.message
                    }
                });
            }
        },
    },

    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
        updateState(state, { payload }) {
            return {
                ...state,
                ...payload
            }
        },
        //获取当前state
        getScroll(state) {
            return {...state}
        }
    },

};
