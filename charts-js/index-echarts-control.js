var option1 = {
    title : {
        text: '内蒙古煤炭价格指数近期变化',
        subtext: '来自网络'
    },
    tooltip : {
       // trigger: 'axis'
       trigger:'item'
    },
    legend: {
        data:['平均最高','平均最低']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false}, //数据视图
            magicType : {show: true, type: ['line', 'bar']}, //动态类型切换,柱状折现切换
            restore : {show: true}, //重置
            saveAsImage : {show: true} //保存为图片
        }
    },
    calculable : true, //是否启用拖拽重计算特性，默认false
    xAxis : [
        {
            type : 'category',
            boundaryGap : false, // 坐标轴两端空白策略
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel : {
                formatter: '{value}0'
            }
        }
    ],
    series : [
        {
            name:'平均最高',
            type:'line',
            data:[11, 11, 15, 13, 12, 13, 10],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'平均最低',
            type:'line',
            data:[1, -2, 2, 5, 3, 2, 0],
            markPoint : {
                data : [
                    {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            }
        }
    ]
};

var option2 = {
    title : {
        text: '内蒙古煤炭价格指数近期变化2',
        subtext: '来自网络'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['平均最高','平均最低']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel : {
                formatter: '{value}0'
            }
        }
    ],
    series : [
        {
            name:'平均最高',
            type:'line',
            data:[11, 11, 15, 13, 12, 13, 10],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'平均最低',
            type:'line',
            data:[4, -1, 2, 0, 8, 2, 0],
            markPoint : {
                data : [
                    {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name : '平均值'}
                ]
            }
        }
    ]
};

// 路径配置
        require.config({
            paths: {
                "echarts": 'echarts-2.2.1/echarts',
                "echarts/chart/map": "echarts-2.2.1/chart/map",
                "echarts/chart/line": "echarts-2.2.1/chart/line",
                "echarts/chart/pie": "echarts-2.2.1/chart/pie",
                "echarts/chart/bar": "echarts-2.2.1/chart/bar",
                "echarts/chart/scatter": "echarts-2.2.1/chart/scatter",
        }
        });
 
        //使用
        require(
         [
         'echarts',
         'echarts/chart/bar', // 使用柱状图就加载bar模块，按需加载
         'echarts/chart/line'
         ],
         function(ec){
          // 基于准备好的dom，初始化echarts图表
                myChart = ec.init(document.getElementById('echart-indexmap')); 
                // 过渡---------------------
                myChart.showLoading({
                    text: '正在努力的读取数据中...',    //loading话术
                });
                myChart.hideLoading();

        window.onresize = myChart.resize; 

        // 为echarts对象加载数据 
        myChart.setOption(option1);
    }
);


                    
function setOption1(){
    myChart.hideLoading();
    myChart.setOption(option2);
    
}

function setOption2(){
    myChart.hideLoading();
    myChart.setOption(option1);
    
}
