import React from 'react'
import { connect } from 'dva'

import style from './index.scss'
class Technology extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blog: [],
            scrollTopLast: 0,
            evalCarValue: 0
        }

    }
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({ type: 'app/getTecBlog' });
    }
    componentWillReceiveProps(nextProps) {
        const firstTd = this.refs.firstTd;
        nextProps.tecBlog && nextProps.tecBlog.data ? this.setState({
            blog: nextProps.tecBlog.data
        }, () => {
            nextProps.tecBlog.data.length > 0 ? this.addBlog(nextProps.tecBlog.data[0], nextProps.tecBlog.data)  : "";
            this.showBlog(nextProps.tecBlog.data);
        }): "";
        // this.slideCar(nextProps, (nextProps) => {
        //         this.setState({
        //             scrollTopLast: nextProps.scrollTopNow
        //         });
        //     }
        // );
        this.slideCar(nextProps);
    }
    //字符串转dom
    parseDom(arg) {
        let objE = document.createElement("div");
        objE.innerHTML = arg;
        return objE.childNodes;
    }

    //dom转字符串

    nodeToString(node) {
        var tmpNode = document.createElement("div");
        tmpNode.appendChild(node.cloneNode(true));
        var str = tmpNode.innerHTML;
        tmpNode = node = null; // prevent memory leaks in IE  
        return str;
    } 
    //添加博客
    addBlog(dataOne, data) {
        //添加第一个博客
        this.addFirst(dataOne);
        //循环加入
        this.addEach(data);
    }


    //添加第一个博客
    addFirst(dataOne) {
        const firstBlog = '<div><img src=' + dataOne.cover + '/><h3 style="margin-bottom: 0">' + dataOne.name + '</h3><p style="margin-bottom: 0">' + dataOne.date + '</p><div>';
        this.refs.firstTd.innerHTML = firstBlog;
    }

    //循环加入
    addEach(data) {
        const tBody = document.querySelector('tbody');
        // console.log(data);
        const firstTr = this.nodeToString(this.refs.firstTr);
        const lastTr = this.nodeToString(this.refs.lastTr);
        let addBlog = '';
        data.map((data, i, dataAll) => {
            if (i != 0) {
                addBlog += '<tr><td rowSpan = "2" align = "center" ><div><div><img src=' + data.cover + '/><h3 style="margin-bottom: 0">' + data.name + '</h3><p style="margin-bottom: 0">' + data.date + '</p></div>></div></td></tr>';
          
            }
        });
        tBody.innerHTML = firstTr + addBlog + lastTr;
    }
    
    // //小车滑行
    slideCar(nextProps) {
        const evalCar = nextProps.scrollTopNow;
        const car = this.refs.car;
        if (evalCar == 0) {
            car.style.position = 'fixed';
            car.style.top = '21%';
            car.style.transform = 'translateX(-50%)';
        } else {
            car.style.position = 'fixed';
            car.style.top = '50%';
            car.style.transform = 'translate(-50%, -50%)';
        }
    }

    //点击某个blog跳转
    showBlog(data) {
        const tdAll = document.querySelectorAll('td');
        let tdTwo = [];
        tdAll.forEach((td) => {
            td.getAttribute('rowSpan') == 2 && tdTwo.push(td);
        });
        data.map((data, i) => {
            
            if (tdTwo[i]) {
                tdTwo[i].onclick = () => {
                    window.open(data.blogContent);
                }
            }
        });
    }
    render() {
        return (
            <div className= {style.tecContainer} >
                <div className={ style.tecContent }>
                    <span>TEC-BLOG</span>
                    <hr/>
                    <div className={ style.blogList }>
                    
                        <table cellPadding = '0' cellSpacing = '0'>
                            <tbody>
                                <tr ref='firstTr'>
                                    <td rowSpan='2' align='center' id={style.firstTd}><div ref='firstTd'><h1>................................<br/>Loading</h1></div></td>
                                    <td id={ style.secondTd }></td>
                                </tr>
                                {/* <tr>
                                    <td rowSpan='2' align='center'><div>hh</div></td>
                                </tr> */}
    
                                <tr ref='lastTr'>
                                    <td></td>
                                </tr>

                            </tbody>
                        </table>
                        <img src='public/img/car.png' ref='car'/>
                    </div>
                    
                </div>
            </div>
        )
    }
}
// const mapStateToProps = (state) => {
//     console.log(state.app);
//     return {
//         tecBloga: state.app
//     };
// };

export default connect(({ app, routing }) => {
    return {
        ...app,
        routing
    }
})(Technology)
