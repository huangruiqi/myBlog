export default function(name, value, color1) {
    const option = {
        backgroundColor: 'white',
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: '45%',
                data: [
                    { value: value, name: name, itemStyle: { color: color1} },
                    { value: 100 - value, name: '有待提高', itemStyle: { color: '#22362A' }},
                ],
                roseType: 'angle',
                label: {
                    normal: {
                        textStyle: {
                            color: 'rgba(0, 0, 0, 0.3)'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: 'rgba(0, 0, 0, 0.3)'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    }
    return option; 
}
