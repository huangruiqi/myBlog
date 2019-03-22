import React from 'react'

import style from "./close.scss";


class CloseContent extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

    }
    render() {
        return (
            <div className={style.closeContainer} style={{ display: this.props.display }} onClick={ this.props.close }>
                <div>
                    <img src="public/img/close.png"/>
                </div> 
                <div>
                    <span>CLOSE</span>
                </div> 
            </div>
        )
    }
}

export default CloseContent;