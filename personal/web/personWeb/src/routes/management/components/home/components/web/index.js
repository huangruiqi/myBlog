import React from 'react'
import { connect } from 'dva'
import {
    Table,
    Divider,
    Tag,
    Button,
    Modal
} from 'antd';

import style from './index.scss'

const data = [];
for (let i = 0; i < 3; i++) {
    data.push({
        key: i,
        title: `深圳市兴海物联有限公司`,
        value: 'http://hhhhhhhhhhhhhhdodv.com',
        intr: '该作品为在深圳市兴海物联有限公司实习期完成，此为售楼部演示系统。最核心部分则为户型的展示。第一张图为一个VR展示作品，可以直接模拟720度的观房，点击相关按钮、地图位置或箭头所指的门窗，会直接进入所对应的房间。第二张图为户型的展示，运用懒加载方法，将图片显示出来。第三张为后台管理页面，在相关页面上即改即看，此为一大创新。'
    });
}


class Web extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }
    addTable() {
        const columns = [{
            title: '所属公司',
            dataIndex: 'title',
            key: 'title',
            align: 'center'
        }, {
            title: '网页地址',
            key: 'value',
            dataIndex: 'value',
            align: 'center',
        }, {
            title: '相关介绍',
            key: 'intr',
            dataIndex: 'intr',
            align: 'center',
        }, {
            title: '操作',
            key: 'action',
            align: 'center',
            width: 200,
            render: (text, record) => (
                <span>
                    <Button type="primary" onClick={() => { this.deleteArtical(record.key); this.props.deleteReportArtical(record.key); this.setState({ clickKey: record.key }) }}> 修改 </Button>
                    <Divider type="vertical" />
                    <Button type="danger" onClick={() => { this.deleteArtical(record.key); this.props.deleteReportArtical(record.key); this.setState({ clickKey: record.key }) }}> 删除 </Button>
                </span>
            ),
        }];
        const display = false;
        return (
            <Table
                columns={columns}
                dataSource={data}
                pagination={display}
                loading={this.state.loading}
                bordered={!display}
                size='small'
            />
        )
    }
    render() {
        return (
            <div className={style.pickContainer}>
                <h1 style={{ color: '#1890FF' }}>WEB DISPLAY</h1>
                {this.addTable()}
            </div>
        )
    }
}

export default connect(({ app, routing }) => {
    return {
        ...app,
        routing
    }
})(Web)