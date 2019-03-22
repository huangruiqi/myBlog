import React from 'react'
import { connect } from 'dva'
import {
    Table,
    Divider,
    Tag,
    Button,
    Modal
} from 'antd';

import Web from './components/web'
import Contact from './components/contact'
import Background from './components/background'

import style from './index.scss'

class BackHome extends React.Component {
    render() {
        return (
            <div className={style.pickContainer}>
                <Contact/>
                <Background/>
                <Web/>
            </div>
        )
    }
}

export default connect(({ app, routing }) => {
    return {
        ...app,
        routing
    }
})(BackHome)