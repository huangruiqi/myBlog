import React from 'react'
import { connect } from 'dva'
import {
    Upload, 
    Button, 
    Icon 
} from 'antd'

import style from './index.scss'

const props = {
    action: 'https://5bbdec0b8be32700139e34c2.mockapi.io/video',
    onChange({ file, fileList }) {
        if (file.status !== 'uploading') {
            console.log(file, fileList);
        }
    },
    defaultFileList: [{
        uid: '1',
        name: 'xxx.png',
        status: 'done',
        response: 'Server Error 500', // custom error message to show
        url: 'http://www.baidu.com/xxx.png',
    }, {
        uid: '2',
        name: 'yyy.png',
        status: 'done',
        url: 'http://www.baidu.com/yyy.png',
    }, {
        uid: '3',
        name: 'zzz.png',
        status: 'error',
        response: 'Server Error 500', // custom error message to show
        url: 'http://www.baidu.com/zzz.png',
    }],
};


class BackVideo extends React.Component {

    render() {
        return (
            <div className={style.pickContainer}>
                <Upload {...props}>
                    <Button>
                        <Icon type="upload" /> Upload
                    </Button>
                </Upload>
            </div>
        )
    }
}

export default connect(({ app, routing }) => {
    return {
        ...app,
        routing
    }
})(BackVideo)