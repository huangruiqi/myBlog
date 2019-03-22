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
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        title: `Huang ruiqi ${i}`,
        tags: i
    });
}

class BackAward extends React.Component {
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
            title: '等级',
            key: 'tags',
            dataIndex: 'tags',
            align: 'center',
            render: tag => (
                <span>
                    <Tag color="blue" key={tag}>{tag}</Tag>
                </span>
            ),
        },{
            title: '操作',
            key: 'action',
            align: 'center',
            render: (text, record) => (
                <span>
                    <Button type="danger" onClick={() => { this.deleteArtical(record.key); this.props.deleteReportArtical(record.key); this.setState({ clickKey: record.key }) }}> 删除 </Button>
                </span>
            ),
        }];
        return (
            <Table
                columns={columns}
                dataSource={data}
                pagination={{ pageSize: 7 }}
                loading={this.state.loading}
            />
        )
    }
    render() {
        return (
            <div className={style.pickContainer}>
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
})(BackAward)