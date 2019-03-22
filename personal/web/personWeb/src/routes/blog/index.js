import React from 'react'
import { connect } from 'dva'

import style from './index.scss'
class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }

    }
    componentDidMount() {
    }
    componentWillReceiveProps(nextProps) {
     
    }

    render() {
        return (
            <div className={style.tecContainer} >
                <div className={style.tecContent}>
                    <span>LIFE-BLOG</span>
                    <hr />
                    <div className={style.blogList}>

                        
                    
                    </div>

                </div>
            </div>
        )
    }
}
// const mapStateToProps = (state) => {
//     console.log(state.app);
//     return {
//         tecBloga: state.app
//     };
// };

export default connect(({ app, routing }) => {
    return {
        ...app,
        routing
    }
})(Blog)
