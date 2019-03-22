import React from 'react'

import style from "./index.scss";
import { Carousel } from "antd";


class ContentIntroduction extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        
    }
    render() {
        return (
            <div className={ style.contentContainer } style={{ display: this.props.display }}>
                <Carousel autoplay>
                    <div className={ style.smallContainer }>
                        <div className={ style.contentTitle }>
                            <p style={{ marginBottom: "0em" }}>コーポレートサイトのフルリニューアルで企業価値を最大化させる</p>
                            <p style={{marginBottom: "0em"}}>相关web前端作品</p>
                        </div>
                        <div className={ style.contentImg }>
                            <img src="public/img/show1.jpg"/>
                            <img src="public/img/show2.jpg"/>
                            <img src="public/img/show3.jpg"/>
                        </div>
                        <div className={ style.contentWords }>
                            <table cellPadding='0' cellSpacing='0' border='0'>
                                <tbody> 
                                    <tr>
                                        <td width='30%' >
                                            CLIENT:
                                        </td>
                                        <td>OVERVIEW</td>
                                    </tr>
                                    <tr>
                                        <td width='30%'>
                                            深圳市兴海物联有限公司
                                        </td>
                                        <td rowSpan="5">
                                        该作品为在深圳市兴海物联有限公司实习期完成，此为售楼部演示系统。最核心部分则为户型的展示。第一张图为一个VR展示作品，可以直接模拟720度的观房，点击相关按钮、地图位置或箭头所指的门窗，会直接进入所对应的房间。第二张图为户型的展示，运用懒加载方法，将图片显示出来。第三张为后台管理页面，在相关页面上即改即看，此为一大创新。
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width='30%'>
                                            
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width='30%'>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td width='30%'>
                                            Launch Site
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width='30%'>
                                            http://cqupt.xy-mind.com:8080/saleSystem/getCate.html
                                        </td>
                                    </tr>
                                </tbody> 
                            </table>
                        </div>
                    </div>
                    <div className={style.smallContainer}>
                        <div className={style.contentTitle}>
                            <p style={{ marginBottom: "0em" }}>コーポレートサイトのフルリニューアルで企業価値を最大化させる</p>
                            <p style={{ marginBottom: "0em" }}>相关web前端作品</p>
                        </div>
                        <div className={style.contentImg}>
                            <img src="public/img/show1.jpg" />
                            <img src="public/img/show2.jpg" />
                            <img src="public/img/show3.jpg" />
                        </div>
                        <div className={style.contentWords}>
                            <table cellPadding='0' cellSpacing='0' border='0'>
                                <tbody>
                                    <tr>
                                        <td width='30%' >
                                            CLIENT:
                                        </td>
                                        <td>OVERVIEW</td>
                                    </tr>
                                    <tr>
                                        <td width='30%'>
                                            深圳市兴海物联有限公司
                                        </td>
                                        <td rowSpan="5">
                                            该作品为在深圳市兴海物联有限公司实习期完成，此为售楼部演示系统。最核心部分则为户型的展示。第一张图为一个VR展示作品，可以直接模拟720度的观房，点击相关按钮、地图位置或箭头所指的门窗，会直接进入所对应的房间。第二张图为户型的展示，运用懒加载方法，将图片显示出来。第三张为后台管理页面，在相关页面上即改即看，此为一大创新。
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width='30%'>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td width='30%'>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td width='30%'>
                                            Launch Site
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width='30%'>
                                            http://cqupt.xy-mind.com:8080/saleSystem/getCate.html
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={style.smallContainer}>
                        <div className={style.contentTitle}>
                            <p style={{ marginBottom: "0em" }}>コーポレートサイトのフルリニューアルで企業価値を最大化させる</p>
                            <p style={{ marginBottom: "0em" }}>相关web前端作品</p>
                        </div>
                        <div className={style.contentImg}>
                            <img src="public/img/show1.jpg" />
                            <img src="public/img/show2.jpg" />
                            <img src="public/img/show3.jpg" />
                        </div>
                        <div className={style.contentWords}>
                            <table cellPadding='0' cellSpacing='0' border='0'>
                                <tbody>
                                    <tr>
                                        <td width='30%' >
                                            CLIENT:
                                        </td>
                                        <td>OVERVIEW</td>
                                    </tr>
                                    <tr>
                                        <td width='30%'>
                                            深圳市兴海物联有限公司
                                        </td>
                                        <td rowSpan="5">
                                            该作品为在深圳市兴海物联有限公司实习期完成，此为售楼部演示系统。最核心部分则为户型的展示。第一张图为一个VR展示作品，可以直接模拟720度的观房，点击相关按钮、地图位置或箭头所指的门窗，会直接进入所对应的房间。第二张图为户型的展示，运用懒加载方法，将图片显示出来。第三张为后台管理页面，在相关页面上即改即看，此为一大创新。
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width='30%'>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td width='30%'>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td width='30%'>
                                            Launch Site
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width='30%'>
                                            http://cqupt.xy-mind.com:8080/saleSystem/getCate.html
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Carousel>
            </div>
        )
    }
}

export default ContentIntroduction;