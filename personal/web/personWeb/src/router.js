import React from 'react';
import { Switch, Route, Redirect, routerRedux, Router as HashRouter } from 'dva/router'
import dynamic from 'dva/dynamic'

import App from './routes/App/index'
import home from "./routes/home/index";
import technology from './routes/technology/index'
import life from './routes/life/index'
import conclusion from './routes/conclusion/index'
import introduction from './routes/introduction/index'
import write from './routes/write/index'
import management from './routes/management/index'
import blog from './routes/blog/index'


import createHistory from 'history/createHashHistory'
const history = createHistory();

var config = ({ history }) => {
  const routes = [
    {
      path: '/home',
      component: () => home
    },
    {
      path: '/technology',
      component: () => technology
    },
    {
      path: '/life',
      component: () => life
    },
    {
      path: '/conclusion',
      component: () => conclusion
    },
    {
      path: '/introduction',
      component: () => introduction
    },
    {
      path: '/write',
      component: () => write
    },
    {
      path: '/management',
      component: () => management
    },
    {
      path: '/blog',
      component: () => blog
    }
  ]
  return (
    <HashRouter history={history}>
      <App>
      <Switch>
        <Route exact path='/' render={() => (<Redirect to='/home' />)} />
        {
          routes.map(({ path, ...dynamics }, key) => {
            return (
              <Route key={key}
                path={path}
                component={dynamic({
                  App,
                  ...dynamics,
                })}
              />
            )
          })
        }
      </Switch>
      </App>
    </HashRouter>
  );
}

export default config;
