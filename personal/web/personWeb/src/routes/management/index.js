import React from 'react'
import { connect } from 'dva'
import { Route, routerRedux, BrowserRouter as Router } from 'dva/router'
import { Layout, Menu, Icon } from 'antd';
import RouterMap from './route'

import style from './index.scss'

const {
    Header, Content, Sider,
} = Layout;
const SubMenu = Menu.SubMenu;


class Management extends React.Component {
    constructor(props) {
        super(props);
        const { dispatch } = this.props;
        dispatch({ 
            type: 'app/updateState' ,
            payload: {
                opacityTop: 'none',//控制top的透明度
                hiddenDivDisplay: 'none',//控制隐藏头部的display
                footerDisplay: 'none'//控制footer的display
            }
        });
    }
    componentDidMount() {
        
    }
    //点击logo返回主页
    back() {
        const { dispatch } = this.props
        dispatch(routerRedux.push('/home'))
    }
    //点击sider
    handleClick = (e) => {
        this.props.history.push(e.key);
    }
    renderLayout() {
        return(
            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={(broken) => { console.log(broken); }}
                    onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
                >
                    <div className="logo" onClick={this.back.bind(this)}>
                        Richie Huang
                    </div>
                    <Menu 
                        theme="dark" 
                        mode="inline" 
                        onClick={this.handleClick}
                        defaultSelectedKeys={['/management/home']}
                        defaultOpenKeys={['sub1']}>
                        <Menu.Item key="/management/home">
                            <Icon type="home" />
                            <span className="nav-text">HOME</span>
                        </Menu.Item>
                        <Menu.Item key="/management/Tec">
                            <Icon type="android" />
                            <span className="nav-text">TECHNOLOGY</span>
                        </Menu.Item>
                        <Menu.Item key="/management/life">
                            <Icon type="customer-service" />
                            <span className="nav-text">LIFE</span>
                        </Menu.Item>
                        <SubMenu key="sub1" title={<span><Icon type="tool" /><span>INTRODUCTION</span></span>}>
                            <Menu.Item key="/management/skill">
                                <Icon type="thunderbolt" />
                                <span className="nav-text">SKILLS</span>
                            </Menu.Item>
                            <Menu.Item key="/management/draw">
                                <Icon type="area-chart" />
                                <span className="nav-text">DRAWERS</span>
                            </Menu.Item>
                            <Menu.Item key="/management/video">
                                <Icon type="video-camera" />
                                <span className="nav-text">VIDEOS</span>
                            </Menu.Item>
                            <Menu.Item key="/management/award">
                                <Icon type="flag" />
                                <span className="nav-text">AWARDS</span>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    {/* <Header style={{ background: '#fff', padding: 0 }} /> */}
                    <Content style={{ margin: '24px 16px 0'}}>
                        <div style={{ padding: 60, background: '#fff', minHeight: 600 }}>
                            <RouterMap />
                            
                            {/* <BackAward/> */}
                        </div>
                    </Content>
                </Layout>
            </Layout>
        )
    }
    render() {
        return (
            <div className={style.mgtContainer}>
                {this.renderLayout()}
            </div>
        )
    }
}

export default connect(({ app, routing }) => {
    return {
        ...app,
        routing
    }
})(Management)