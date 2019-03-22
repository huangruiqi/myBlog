import React from 'react'
import { connect } from 'dva'
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie'
import style from './index.scss'
import chartOption from './chart.js'

class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            skills: [],
            length: 0//数据个数
        }
    }
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({ type: 'app/getSkills' });
        // const chartOne = echarts.init(document.getElementsByClassName(style.chart)[0]);
        // chartOne.setOption(chartOption());
    }
    componentWillReceiveProps(nextProps) {
        if (this.state.skills !== nextProps.skills && this.state.length != nextProps.skills.length) {
            nextProps.skills && this.setState({
                skills: nextProps.skills,
                length: nextProps.skills.length
            }, () => {
                this.addSkills(nextProps.skills);
            });
        }
    }
    //增加技术
    addSkills(skills) {
        const skillContainer = document.getElementsByClassName(style.skillContainer)[0];
        let divAll = skillContainer.innerHTML;
        for (let i = 0; i < skills.length; i++) {
            divAll += '<div class=' + style.chart + '></div>';
        }
        skillContainer.innerHTML = divAll;
        skills.forEach((skill, i, all) => {
            const skillDiv = document.getElementsByClassName(style.chart);
            const chart = echarts.init(skillDiv[i]);
            chart.setOption(chartOption(skill.name, skill.value, skill.color));
        });
    }
    render() {
        return (
            <div className={style.skillContainer}>
                <div className={ style.skillTitle }>
                    MY WEB'S SKILLS
                </div>
            </div>
        )
    }
}

export default connect(({ app, routing }) => {
    return {
        ...app,
        routing
    }
})(Skills)