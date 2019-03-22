import React from 'react'
import { connect } from 'dva'

import style from './index.scss'

class PickMe extends React.Component {

    render() {
        return (
            <div className={style.pickContainer}>
                <ul>
                    <li>NAME：RIECHIE HUANG</li>
                    <li>AGE：19 DEGREE：CQUPT</li>
                    
                </ul>
                <p>PICK ME UP</p>
                <ul>
                    <li>POST：WEB前端</li>
                    <li>INTERN：深圳市兴海物联</li>
                </ul>
            </div>
        )
    }
}

export default connect(({ app, routing }) => {
    return {
        ...app,
        routing
    }
})(PickMe)