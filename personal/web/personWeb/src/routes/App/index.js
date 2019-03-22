import React from 'react'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'

import Top from "../../components/top/index"
import Footer from "./components/foot/index"

import style from "./index.scss";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hiddenDivDisplay: 'flex',
            opacityTop: 1,
            footerDisplay: 'flex'
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            hiddenDivDisplay: nextProps.hiddenDivDisplay,
            footerDisplay: nextProps.footerDisplay
        });
    }
    componentDidMount () {
        //想让大盒子最低高度为可视区高度
        let index = document.querySelector('#appContainer');//外面包裹的大盒子
        index.style.minHeight = document.documentElement.clientHeight + 'px';
    }
    render() {
        const { children } = this.props;
        return (
            <div className={ style.appContainer } id='appContainer'>
                <div className={ style.appContent }><Top /><div className={ style.hiddenDiv } style={{ display: this.state.hiddenDivDisplay }}></div>{ children }</div>
                <div className={style.appFoot} id="footer" style={{ display: this.state.footerDisplay }}><Footer/></div>
            </div>
        )
    }
}

export default connect(({ app }) => {
    return { ...app }
})(App);