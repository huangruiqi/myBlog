import React from 'react'
import { connect } from 'dva'
import { Modal } from 'antd'
import { queryDrawers } from '../../../../services/example'

import style from './index.scss'

class Drawer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drawers: [],
            visible: false,
            clickSrc: '',
            drawersNow: []
        }
    }
    componentDidMount() {
        // const { dispatch } = this.props;
        // dispatch({ type: 'app/getDrawers' });
        queryDrawers().then((res) => {
            console.log(res.data);
            this.setState({
                drawersNow: res.data
            }, () => {
                this.changeImg(res.data);
            });
        })
        // console.log(queryDrawers());
    }
    componentWillReceiveProps(nextProps) {
        // nextProps.drawers.data != this.state.drawersNow && nextProps.drawers.data && this.setState({
        //     drawersNow: nextProps.drawers.data
        // }, () => {
        //     this.changeImg(nextProps.drawers.data);
        // });
        // this.renderImg(nextProps.drawers.data);
    }
    renderImg() {
        return(
            <div className={style.charts} id="photos">
                {this.state.drawersNow.map((data) => <img key={data.id} src={data.src} onClick={() => {this.handleClick(data.src)}}/>)}
            </div>
        )
    }
    //将图片进行旋转
    changeImg(drawers) {

        let photos = '';
        const charts = document.getElementById('photos');
        if (this.state.drawers !== drawers && drawers && charts) {
            this.intialImg();
            let x = 0;
            const photosDom = document.getElementById('photos');
            console.log(photosDom.style.transform);
            setInterval(() => {
                photosDom.style.transform = "translateX(-50%) rotateX(-20deg) rotateY(" + (x++) * 0.2 + "deg)";
            }, 30);
            this.setState({
                drawers: drawers
            });
        }
    }
    
    handleClick(src) {
        this.setState({
            visible: true,
            clickSrc: src
        });
    }
    //点击叉叉
    cancelHandle() {
        this.setState({
            visible: false
        });
    }
    //初始化图片位置
    intialImg() {
        const photosDom = document.getElementById('photos');
        //获取图片数组
        const images = photosDom.getElementsByTagName('img');
        //获取图片数量
        const len = images.length;
        //计算每张图片按Y轴旋转的角度 
        const deg = Math.floor(360 / len);
        for (var i = 0; i < len; i++){
            images[i].style = 'transform : rotateY(' + deg * i + 'deg) translateZ(300px);'; //deg前面不要加空格
        }
    }
    render() {
        return (
            <div className={style.drawerContainer}>
                <div className={style.drawerTitle}>
                    MY WEB'S DRAWERS
                </div>
                {this.renderImg()}
                <Modal
                    title="Modal"
                    visible={this.state.visible}
                    onCancel={this.cancelHandle.bind(this)}
                    footer={null}
                    title="画作详情"
                >
                    <img src={this.state.clickSrc} style={{ width: '100%' }}/>
                </Modal>
            </div>
        )
    }
}

export default connect(({ app, routing }) => {
    return {
        ...app,
        routing
    }
})(Drawer)