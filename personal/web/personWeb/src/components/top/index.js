import React from 'react';
import { NavLink } from "dva/router";
import { connect } from 'dva'
import { routerRedux } from 'dva/router'
import pathToRegexp from 'path-to-regexp';

import { Modal, Button, Input, Icon } from 'antd'

import style from "./index.scss";


class Top extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMe: "flex",
            localPath: props.locationPathname,
            // 设置路由的顺序
            routeIndex: ['/home', '/technology', '/life', '/introduction', '/write', '/management'],
            opacityTop: 1,
            loading: false,
            visible: false,
            userName: ''
        }
    }
    componentDidMount() {
        this.changeRouteNav();
    }

    componentWillReceiveProps(nextProps, nextState) {
        this.setState({
            localPath: nextProps.locationPathname,
            opacityTop: nextProps.opacityTop
        }, () => {
            this.changeRouteNav();
        })
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 3000);
    }

    handleCancel = () => {
        this.setState({ visible: false });
    }
    emitEmpty = () => {
        this.userNameInput.focus();
        this.setState({ userName: '' });
    }

    onChangeUserName = (e) => {
        this.setState({ userName: e.target.value });
    }
    // 改变路由，添加navTitle的样式
    changeRouteNav() {
        // 获取当前路由并获取索引
        const navLink = document.querySelectorAll('*[name="link"]');
        navLink.forEach((content) => {
            content.className = style.navLink;
        });
        
        this.state.routeIndex.map((content, i, array) => {
            if (content == this.state.localPath) {
                navLink[i].className = style.active;
                return;
            }
        });
    }

    render() {
        const { userName } = this.state;
        const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
        return (
            <div className={style.topContainer} style={{display: this.state.opacityTop}}>
                <div className={style.logo} onClick={this.showModal}>
                    <span>
                        Richie Huang i-blog<br/>
                        MadeBy 2018
                    </span>
                    <span>
                        login
                    </span>
                </div>
                <div className={ style.nav }>
                    <ul className={ style.webTitle }>
                        <li><NavLink to='/home' name="link" className={style.navLink}>HOME</NavLink></li>
                        <li><NavLink to='/technology' name="link" className={style.navLink}>TRCHNOLOGY</NavLink></li>
                        <li><NavLink to='/life' name="link" className={style.navLink} >LIFE</NavLink></li>
                        <li><NavLink to='/introduction' name="link" className={style.navLink}>INTRODUCTION</NavLink></li>
                        <li style={{ display: this.state.isMe }}><NavLink to='/write' name="link" className={style.navLink}> WRITE </NavLink></li>
                        <li style={{ display: this.state.isMe }}><NavLink to='/management' name="link" className={style.navLink}>MANAGEMENT</NavLink></li>
                    </ul>
                    <ul className={ style.linkTitle }>
                        <li>                           
                            < a href='javascript:;' onClick={() => { window.open( 'https://blog.csdn.net/weixin_38398698')}}> < img src="img/csdn.jpg" /> &nbsp;&nbsp;CSDN</a >
                        </li>
                        <li>
                            
                            < a href='javascript:;' onClick={() => { window.open('https://m.weibo.cn/p/1005053136900547') }}> < img src="/img/weBlog.jpg" /> &nbsp;&nbsp;WE BLOG</a >
                        </li>
                    </ul>
                </div>
                <Modal
                    visible={this.state.visible}
                    title="LOGIN"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="back" onClick={this.handleCancel}>Return</Button>,
                        <Button key="submit" type="primary" loading={this.state.loading} onClick={this.handleOk}>
                            Submit
                        </Button>,
                ]}>
                    <Input
                        placeholder="Enter your username"
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="user"
                        suffix={suffix}
                        value={userName}
                        onChange={this.onChangeUserName}
                        ref={node => this.userNameInput = node}
                    />
                    <Input
                        placeholder="Enter your password"
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        suffix={suffix}
                        value={userName}
                        onChange={this.onChangeUserName}
                        ref={node => this.userNameInput = node}
                    />
                </Modal>
            </div>
        )
    }
}


export default connect(({app}) => {
    return {...app}
})(Top);