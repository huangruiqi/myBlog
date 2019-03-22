import React from 'react'
import { connect } from 'dva'

import PickMe from './components/pickMe/index'
import Skills from './components/skills/index'
import Drawer from './components/drawer/index'
import Guitar from './components/guitar/index'
import Awards from './components/awards/index'

import style from './index.scss'

class Introduction extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={ style.intrContainer }>
                <div className={ style.intrContent }>
                    <PickMe/>
                    <Skills/>
                    <Drawer/>
                    <Guitar/>
                    <Awards/>
                </div>
            </div>
        )
    }
}

export default connect(({ app, routing }) => {
    return {
        ...app,
        routing
    }
})(Introduction)