import React from 'react';
import { NavLink } from "dva/router";
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import pathToRegexp from 'path-to-regexp';

import style from "./index.scss";


class Footer extends React.Component {
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
            <div className={ style.footContainer } >
                <div className={ style.space }>
                    <div className={ style.contact }>
                        <span>CONTACT</span>
                    </div>
                    <marquee direction="left" loop="-1">如果你觉得对我感兴趣，有意找我为你公司下一员，请联系我！QQ:1154846989 Tel:18883196059</marquee>
                </div>
                {/* <img src="public/img/cai.png" className={ style.cai }/> */}
                <div className={ style.contact }>
                    <div>
                        <i className={style.iconfont} style={{ color: "#FFDC00" }}>&#xe62a;</i>
                        <img src="public/img/space.jpg" />
                    </div>
                    <div>
                        <i className={style.iconfont} style={{ color: "#D1525C" }}>&#xe60f;</i>
                        <img src="public/img/space.jpg" />
                    </div>
                    <div>
                        <i className={style.iconfont} style={{ color: "#3988FF" }}>&#xe64a;</i>
                        <img src="public/img/zhiFu.jpg" />
                    </div>  
                </div>
            </div>
        )
        
    }
}


export default connect(({ app }) => {
    return { ...app }
})(Footer);