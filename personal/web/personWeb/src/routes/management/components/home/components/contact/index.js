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

data.push({
    key: 1,
    title: `如果你觉得对我感兴趣，想让我成为你公司下的一员，请联系QQ：1154846989，手机：18883196059`
});



class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }
    addTable() {
        const columns = [{
            title: '获奖内容',
            dataIndex: 'title',
            key: 'title',
            align: 'center'
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
            />
        )
    }
    render() {
        return (
            <div className={style.pickContainer}>
                <h1 style={{ color: '#1890FF' }}>CONTACT</h1>
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
})(Contact)