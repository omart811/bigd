var option2 = {
    tooltip : {
        trigger: 'axis'
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    dataRange: {
        min: 0,
        max: 100,
        orient: 'horizontal',
        y: 'top',
        //text:['高','低'],           // 文本，默认为数值文本
        color:['lightgreen','yellow'],
        splitNumber: 5
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : function (){
                var list = [];
                for (var i = 1; i <= 30; i++) {
                    list.push('2013-03-' + i);
                }
                return list;
            }()
        },
        {
            type : 'value',
            scale : true,
            splitNumber: 29,
            axisLabel: {show:false},
            splitLine: {show:false}
        }
    ],
    yAxis : [
        {
            type : 'value'
        },
        {
            type : 'value'
        }
    ],
    animation: false,
    series : [
        {
            name:'散点',
            type:'scatter',
            tooltip : {
                trigger: 'item',
                formatter : function (params) {
                    return '2013-03-' + params.value[0] + '<br/>'
                           + params.seriesName + ' : ' 
                           + params.value[1] + ', ' 
                           + params.value[2]; 
                }
            },
            yAxisIndex:1,
            xAxisIndex:1,
            symbol: 'circle',
            symbolSize: function (value){
                return Math.round(value[2]/10);
            },
            data: (function () {
                var d = [];
                var len = 200;
                var value;
                while (len--) {
                    d.push([
                        Math.round(Math.random()*29) + 1,
                        (Math.random()*30).toFixed(2) - 0,
                        (Math.random()*100).toFixed(2) - 0
                    ]);
                }
                return d;
            })()
        },
        {
            name:'折线',
            type:'line',
            data:function (){
                var list = [];
                for (var i = 1; i <= 30; i++) {
                    list.push(Math.round(Math.random()* 30));
                }
                return list;
            }()
        }
    ]
};
//
////
var option3 = {
    title: {
        x: 'center',
        text: '鄂尔多斯外运煤数量统计',
        subtext: '2014年11个月',
        link: 'http://echarts.baidu.com/doc/example.html'
    },
    tooltip: {
        trigger: 'item'
    },
    toolbox: {
        show: true,
        feature: {
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    calculable: true,
    grid: {
        borderWidth: 0,
        y: 80,
        y2: 60
    },
    xAxis: [
        {
            type: 'category',
            show: false,
            data: ['2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }
    ],
    yAxis: [
        {
            type: 'value',
            show: false
        }
    ],
    series: [
        {
            name: '鄂尔多斯外运煤数量统计',
            type: 'bar',
            itemStyle: {
                normal: {
                    color: function(params) {
                        // build a color map as your need.
                        var colorList = [
                          '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
                           '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
                           '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
                        ];
                        return colorList[params.dataIndex]
                    },
                    label: {
                        show: true,
                        position: 'top',
                        formatter: '{b}\n{c}'
                    }
                }
            },
            data: [15,18,20,8,16,7,5,10,20,18,3],
           
        }
    ]
};


// 路径配置只需要配置一次就可以
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

//使用使用第2个图表
require(
         [
         'echarts',
         'echarts/chart/bar', // 使用柱状图就加载bar模块，按需加载
         'echarts/chart/line',
          'echarts/chart/pie',
             'echarts/chart/scatter'
         ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        myChart2 = ec.init(document.getElementById('data-echart2-d2'));
        // 过渡---------------------
        myChart2.showLoading({
            text: '正在努力的读取数据中...', //loading话术
        });
        myChart2.hideLoading();
        // 为echarts对象加载数据 
        myChart2.setOption(option2);
    }
);
//////使用使用第3个图表
require(
         [
         'echarts',
         'echarts/chart/bar', // 使用柱状图就加载bar模块，按需加载
         'echarts/chart/line',
          'echarts/chart/pie'
         ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        myChart3 = ec.init(document.getElementById('data-echart2-d3'));
        // 过渡---------------------
        myChart3.showLoading({
            text: '正在努力的读取数据中...', //loading话术
        });
        myChart3.hideLoading();
        // 为echarts对象加载数据 
        myChart3.setOption(option3);
    }
);
//
//        //使用//使用使用第4个图表

setTimeout(function (){
    window.onresize = function () {
        myChart2.resize();
        myChart3.resize();
    }
},200)

//图表的大小变化始终与浏览器的窗口一致  

//window.onresize = myChart.resize;

