import React from 'react'
import { connect } from 'dva'
import { routerRedux } from 'dva/router'

import ContentIntroduction from './components/contentIntroduction'
import CloseContent from './components/closeContent'

import style from "./index.scss";
//设置气泡
const text = <span>Title</span>;
const content = (
    <div>
        <p>Content</p>
        <p>Content</p>
    </div>
);

const buttonWidth = 70;

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            closeEye: "block",
            openEye: "none",
            eyeWords: "none",
            isOpen: "none",//介绍的内容
            isOpen2: "none",//关闭按钮,
            wordsDisplay: 0
        }
        this.addMyIntroduction = this.addMyIntroduction.bind(this);
        this.removeMyIntroduction = this.removeMyIntroduction.bind(this);
        this.addIntroductionContent = this.addIntroductionContent.bind(this);
        this.close = this.close.bind(this);
    }
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({
            type: 'app/updateState',
            payload: {
                opacityTop: 'flex',//控制top的透明度
                hiddenDivDisplay: 'flex',//控制隐藏头部的display
                footerDisplay: 'flex'//控制footer的display
            }
        });
        const addOpenDiv = document.querySelector("#open");
        // addOpenDiv.dispatchEvent(new Event('onmouseenter'));//无法模拟hover
        setTimeout(() => {
            addOpenDiv.style.width = "18.75rem";
            this.setState({
                closeEye: "none",
                openEye: "block",
                eyeWords: "block"
            }, () => {
                // addOpenDiv.appendChild(node);
                addOpenDiv.style.justifyContent = "space-around";
                addOpenDiv.style.alignItems = "center";
                setTimeout(() => {
                    addOpenDiv.click();
                }, 1000);
            }); 
        }, 1000);
        // this.addIntroductionContent();
    }   
    //模拟坚持几秒
    sleep(time) {
        var hoverStart = new Date().getTime();
        while (new Date().getTime < hoverStart + time) {
            //do thing
        }
    }
    //加入我的话
    addMyWords() {
        this.setState({
            wordsDisplay: 1
        });
    }
    removeWords() {
        this.setState({
            wordsDisplay: 0
        });
    }
    // hover open加入我的简要介绍
    addMyIntroduction(e) {
        const addOpenDiv = document.querySelector("#open");
        if (addOpenDiv && addOpenDiv.className == style.open) {
            addOpenDiv.style.width = "18.75rem";
            this.setState({
                closeEye: "none",
                openEye: "block",
                eyeWords: "block"
            }, () => {
                addOpenDiv.style.justifyContent = "space-around";
                addOpenDiv.style.alignItems = "center";
            });
        }
    }
    //移除我的简要介绍
    removeMyIntroduction(e) {
        const addOpenDiv = document.querySelector("." + style.open);

        if (addOpenDiv && addOpenDiv.className == style.open) {
            addOpenDiv.style.width = "4.375rem";
            this.setState({
                closeEye: "block",
                openEye: "none",
                eyeWords: "none"
            }, () => {
                addOpenDiv.style.justifyContent = "center";
                addOpenDiv.style.alignItems = "flex-end";
            });
        }
    }

    // 点击Open
    addIntroductionContent(e) {
        
        let openDiv = document.querySelector("#open");
        // openDiv.onMouseEnter = "return false";
        // openDiv.onMouseLeave = "return false";//不知道为什么明明把这个属性弄失效了，还是会触发这个属性的函数
        openDiv.style.width = "90%";
        openDiv.style.height = "44rem";
        openDiv.className = style.openNew;
        openDiv.style.justifyContent = "space-between";
        openDiv.style.borderRadius = 0;
        
        const that = this;
        this.setState({
            closeEye: "none",
            openEye: "none",
            eyeWords: "none",
            isOpen: "flex"
        }, () => {
            setTimeout(() => {
                that.setState({
                    isOpen2: "flex"
                });
            }, 1000);
        });
    }
    
    //点击close按钮
    close(e) {
        e.stopPropagation();

        this.setState({
            isOpen: "none",
            isOpen2: "none",
            openEye: "block",
            eyeWords: "block"
        });

        const addOpenDiv = document.querySelector("#open");
        addOpenDiv.style.width = "18.75rem";
        addOpenDiv.style.height = "4.375rem";
        addOpenDiv.style.borderRadius = "2.1875rem";
        addOpenDiv.style.justifyContent = "space-around";
        addOpenDiv.style.alignItems = "center";   
        setTimeout(() => {
            addOpenDiv.style.width = "4.375rem";
            addOpenDiv.className = style.open;
            addOpenDiv.style.alignItems = "flex-end";  
            this.setState({
                isOpen: "none",
                isOpen2: "none",
                openEye: "none",
                closeEye: "block",
                eyeWords: "none"
            });
        }, 1000);   

    }
    render() {
        return (
            <div className={ style.homeContainer}>
        
                <div className={style.open} id="open" onClick={ this.addIntroductionContent } onMouseEnter={this.addMyIntroduction} onMouseLeave={this.removeMyIntroduction}>
                    <ContentIntroduction display={ this.state.isOpen }/>
                    <CloseContent display={this.state.isOpen2} close={this.close}/>
                    <i className={style.iconfont} style={{ display: this.state.closeEye }}>&#xe6e6;</i>
                    <i className={style.iconfont} style={{ display: this.state.openEye}} >&#xe704;</i>
                    <h4 style={{ display: this.state.eyeWords, lineHeight: "1.5", fontWeight: "600", marginBottom: "0" }}>WELCOME TO MY BLOG</h4>
                </div>

                <div className={style.me} onMouseEnter={this.addMyWords.bind(this)} onMouseLeave={this.removeWords.bind(this)}></div>
                <div className={style.words} style={{ opacity: this.state.wordsDisplay }}>
                    <div className={style.arrow}></div>
                    <div className={style.content} >
                        <p>Welcome to my blog house, yes, this charming girl is me! In my blog home, you will have a deeper understanding of me, and discuss the front-end technology and life issues with me. Secondly, thank you very much for visiting my blog, and welcome your valuable comments.</p>
                    </div>
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
})(Home)