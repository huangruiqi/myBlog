import React from 'react';
import mditor from 'mditor';
import { connect } from 'dva'
import style from './index.scss';
import { Button} from 'antd';
class Write extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading1: false,
            loading2: false,
            loading3: false
        }
    }
    enterLoading1 = () => {
        this.setState({ loading1: true });
    }
    enterLoading2 = () => {
        this.setState({ loading2: true });
    }
    enterLoading3 = () => {
        this.setState({ loading3: true });
    }
    render() {
        return (
            <div className={style.writeContainer}>
                <Button type="danger" loading={this.state.loading1} onClick={this.enterLoading1}>
                    PUBLISH
                </Button>
                <Button loading={this.state.loading2} onClick={this.enterLoading2}>
                    SAVE 
                </Button>
                <Button type="primary" loading={this.state.loading3} onClick={this.enterLoading3}>
                    MANUSCRIPT
                </Button>
                {/* <button>hhh</button> */}
                <textarea name="editor" id="editor" style={{visibility: 'hidden'}}></textarea>
            </div>
        )
    }
    componentDidMount() {
        // const editorDiv = document.querySelector('.markdown-body');
        // var parser = new mditor.Parser();
        // var html = parser.parse("** Hello mditor! **");
        // console.log(editorDiv);
        // console.log(editorDiv.childNodes[1]);
        // var mditor = Mditor.fromTextarea(document.getElementById('editor'));

        // //获取或设置编辑器的值
        // mditor.on('ready', function () {
        //     console.log(mditor.value);
        //     mditor.value = '** hello **';
        // });
    }
}

export default connect(({ app, routing }) => {
    return {
        ...app,
        routing
    }
})(Write)