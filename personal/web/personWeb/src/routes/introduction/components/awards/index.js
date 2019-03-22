import React from 'react'
import { connect } from 'dva'
import { queryAwards } from '../../../../services/example'
import style from './index.scss'

class Awards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            awards: []
        }
    }
    componentDidMount() {
        // const { dispatch } = this.props;
        // dispatch({ type: 'app/getAwards' });
        queryAwards().then((res) => {
        
            this.setState({
                awards: res.data
            }, () => {
                this.renderCanvas(res.data);
            });
        })
    }
    componentWillReceiveProps(nextProps) {
        // if (nextProps.awards != this.state.awards) {
        //     nextProps.awards && this.setState({
        //         awards: nextProps.awards
        //     }, () => {
        //         this.renderCanvas(nextProps.awards);
        //     });
        // }
    }
    //绘制我的canvas 
    renderCanvas(awards) {
        // 获取元素
        var canvasA = document.querySelector('#' + style.awards);
        // 获取上下文 绘图工具箱
        var contextA = canvasA.getContext('2d');
        var maxWidth = canvasA.width - 100;
        var maxHeight = canvasA.height - 100;
        var colors = ["#47885E", "#6E7E34", "#AED40C", "#CFD357", "#475806", "#6E7E34", "#47885E", "#6E7E34", "#AED40C", "#AED40C"]
        const fonts = ['800 30px Axure Handwriting', '700 25px Axure Handwriting', '600 20px Axure Handwriting', '500 15px Axure Handwriting', '400 10px Axure Handwriting'];
        //随机数
        function random(min, max) {
            return Math.floor(Math.random() * (max - min) + min)
        }

        //构造函数
        function Ball(i, name) {
            this.a = true;//控制x轴的坐标布尔值
            this.b = true;//控制y轴的坐标布尔值
            this.font = i;
            this.name = name;//这个盒子的文字内容
            this.ballColor = { color: colors[Math.floor(Math.random() * colors.length)] }
            this.vx = random(0, maxWidth - 30);
            this.vy = random(0, maxHeight - 30);
            this.ispeed = random(1, 5);
            this.ispeed2 = random(1, 5);
        }

        // 面向对象
        Ball.prototype.moveBall = function () {
            contextA.beginPath();
            if (this.a) {
                this.vx += this.ispeed;
                if (this.vx >= maxWidth - 40) {
                    this.a = false;
                }

            } else {
                this.vx -= this.ispeed;
                if (this.vx <= 0) {
                    this.a = true;
                }
            }

            if (this.b) {
                this.vy += this.ispeed2;
                if (this.vy >= maxHeight - 13) {
                    this.b = false;
                }

            } else {
                this.vy -= this.ispeed2;
                if (this.vy <= 20) {
                    this.b = true;
                }
            }

            contextA.fillStyle = this.ballColor.color;
            contextA.font = this.font;
            contextA.fillText(this.name, this.vx, this.vy);

        }

        var Aball = [];

        awards.forEach((award, i) => {
            Aball[i] = new Ball(fonts[award.class - 1], award.name);
        });

        setInterval(function () {
            contextA.clearRect(0, 0, canvasA.width, canvasA.height);
            awards.forEach((award, i) => {
                Aball[i].moveBall();
            });

        }, 30)
    }
    render() {
        return (
            <div className={style.awardsContainer}>
                <div className={style.awardsTitle}>
                    MY UNIVERSITY'S AWARDS
                </div>
                <canvas width="600" height="400" id={style.awards}></canvas>
                <img src='public/img/red.jpg' width="600" height="400"/>
            </div>
        )
    }
}


export default connect(({ app, routing }) => {
    return {
        ...app,
        routing
    }
})(Awards)