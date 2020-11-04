var option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    legend: {
        data: ['抗菌药物金额', '总药费金额', '抗菌药物使用强度'],
        left:0
    },
    xAxis: [
        {
            type: 'category',
            data: ['骨科', '心内科', '消化一科', '神经外科', '妇产科', '内分泌科', '眼科', '皮肤科', '耳鼻喉', '儿科', '急诊科', '皮肤科'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '元',
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
                formatter: '{value}'
            }
        },
        {
            type: 'value',
            name: '强度',
            min: 0,
            max: 100,
            interval: 10,
            axisLabel: {
                formatter: '{value} '
            }
        }
    ],
    series: [
        {
            name: '抗菌药物金额',
            type: 'bar',
            itemStyle:{
                color:'#50D4C8'
            },
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        },
        {
            name: '总药费金额',
            type: 'bar',
            itemStyle:{
                color:'#009CFF'
            },
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
            name: '抗菌药物使用强度',
            type: 'line',
            itemStyle:{
                color:'#FF8839'
            },
            yAxisIndex: 1,
            data: [8, 10, 13, 45, 63, 62, 88, 64, 65, 65, 30, 60]
        }
    ]
};
