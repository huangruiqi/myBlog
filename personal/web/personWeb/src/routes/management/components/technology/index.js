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
        title: `Edward King ${i}`,
        tags: ['前端'],
        pullTime: 'def'
    });
}

class BackTec extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }
    addTable() {
        const columns = [{
            title: '标题',
            dataIndex: 'title',
            key: 'title',
            align: 'center'
        }, {
            title: '标签',
            key: 'tags',
            dataIndex: 'tags',
            align: 'center',
            render: tags => (
                <span>
                    {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
                </span>
            ),
        }, {
            title: '发布时间',
            dataIndex: 'pullTime',
            key: 'pullTime',
            align: 'center'
        }, {
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
})(BackTec)