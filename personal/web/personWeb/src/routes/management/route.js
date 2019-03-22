import React from 'react'
import { Route, Redirect,Switch } from 'dva/router'
import BackAward from './components/awards'
import BackDraw from './components/drawer'
import BackHome from './components/home'
import BackLife from './components/life'
import BackSkill from './components/skills'
import BackTec from './components/technology'
import BackVideo from './components/video'


const RouterMap = ({ match }) => {
        return (
            <div>  
                <Switch>
                    <Route path="/management/home" exact component={BackHome} />
                    <Route path="/management/Tec" exact component={BackTec} />
                    <Route path="/management/life" exact component={BackLife} />
                    <Route path="/management/skill" exact component={BackSkill} />
                    <Route path="/management/draw" exact component={BackDraw} />
                    <Route path="/management/video" exact component={BackVideo} />
                    <Route path="/management/award" exact component={BackAward} />
                    <Route path="/" render={() => (<Redirect to='/management/home' />)} />
                </Switch>
            </div>
        )
}
export default RouterMap;