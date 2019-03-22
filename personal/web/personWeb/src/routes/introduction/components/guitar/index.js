import React from 'react'
import { connect } from 'dva'
import { Carousel } from 'antd'

import style from './index.scss'

class Guitar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            autoplay: 1,
            videos: []
        }
    }
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({ type: 'app/getVideos' });
    }
    componentWillReceiveProps(nextProps) {
        this.state.videos !== nextProps.videos && this.setState({
            videos: nextProps.videos
        }, () => {
            const videoDiv = document.getElementsByClassName(style.videoDiv);
            const video = document.getElementsByTagName('video');
            for (let i = 0; i < videoDiv.length; i++) {
                videoDiv[i].style.display = 'flex';
            }
            //antd有坑
            const checkPLAY = setInterval(() => {
                let playTrue = 0;
                for (let i = 0; i < video.length; i++) {
                    // this.isPlay(video[i]);
                    video[i].paused && playTrue++;
                }
                // console.log(playTrue);
                if (playTrue == video.length) {
                    this.state.autoplay == false && this.setState({
                        autoplay: true
                    });
                } else {
                    this.setState({
                        autoplay: false
                    });
                }
            }, 1000);
        });
    }
    //渲染获取的视频走马灯
    renderVideos() {
        return (
            <div className={style.Carousel}>
            <Carousel autoplay={this.state.autoplay}>
                {this.state.videos.map((video, i, videos) => 
                {
                    if(i % 2 == 0 && videos[i + 1]) {
                        return (<div className={style.videoDiv} key={video.id}>
                            <video width="320" height="240" controls="controls" >
                                <source src={video.src} type="video/ogg"></source>
                            </video>
                            <video width="320" height="240" controls="controls" >
                                <source src={videos[i + 1].src} type="video/ogg"></source>
                            </video>

                        </div>)
                    } else if (i % 2 == 0 && videos[i + 1]) {
                        return (<div className={style.videoDiv} key={video.id}>
                            <video width="320" height="240" controls="controls" >
                                <source src={video.src} type="video/ogg"></source>
                            </video>
                        </div>)
                    } 
                }
             
                )}
            </Carousel>
            </div>
        )
    }
    render() {
        return (
            <div className={style.guitarContainer}>
                <div className={style.guitarTitle}>
                    MY GUITAR'S VIDEOS
                </div>
                {this.renderVideos()}
            </div>
        )
    }
}

export default connect(({ app, routing }) => {
    return {
        ...app,
        routing
    }
})(Guitar)