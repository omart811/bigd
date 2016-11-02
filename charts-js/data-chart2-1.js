var option1 = {
    tooltip : {
        trigger: 'axis'
    },
    toolbox: {
        show : true,
        y: 'bottom',
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    legend: {
        data:['内蒙古','山西','新疆','陕西','山东','秦皇岛','辽宁','青岛','四川']
    },
    xAxis : [
        {
            type : 'category',
            splitLine : {show : false},
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value',
            position: 'right'
        }
    ],
    series : [
        {
            name:'内蒙古',
            type:'bar',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'山西',
            type:'bar',
            tooltip : {trigger: 'item'},
            stack: '广告',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'新疆',
            type:'bar',
            tooltip : {trigger: 'item'},
            stack: '广告',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'陕西',
            type:'bar',
            tooltip : {trigger: 'item'},
            stack: '广告',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'山东',
            type:'line',
            data:[862, 1018, 964, 1026, 1679, 1600, 1570]
        },

        {
            name:'秦皇岛',
            type:'pie',
            tooltip : {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            center: [160,130],
            radius : [0, 50],
            itemStyle :　{
                normal : {
                    labelLine : {
                        length : 20
                    }
                }
            },
            data:[
                {value:1048, name:'辽宁'},
                {value:251, name:'青岛'},
                {value:147, name:'四川'},
                {value:102, name:'其他'}
            ]
        }
    ]
};
     
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
var option3 = {
    title :{
        text : '全国销售数据',
        subtext : '纯属虚构'
    },
    tooltip : {
        trigger: 'axis',
        formatter: function (params){
            return params[0].name + ' : '
                   + (params[2].value - params[1].value > 0 ? '+' : '-') 
                   + params[0].value + '<br/>'
                   + params[2].seriesName + ' : ' + params[2].value + '<br/>'
                   + params[3].seriesName + ' : ' + params[3].value + '<br/>'
        }
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
    legend: {
        data:['本周', '上周'],
        selectedMode:false
    },
    xAxis : [
        {
            type : 'category',
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value',
            min : 200,
            max : 450
        }
    ],
    series : [
        {
            name:'本周',
            type:'line',
            data:[400, 374, 251, 300, 420, 400, 440]
        },
        {
            name:'上周',
            type:'line',
            symbol:'none',
            itemStyle:{
                normal:{
                  lineStyle: {
                    width:1,
                    type:'dashed'
                  }
                }
            },
            data:[320, 332, 301, 334, 360, 330, 350]
        },
        {
            name:'上周2',
            type:'bar',
            stack: '1',
            barWidth: 6,
            itemStyle:{
                normal:{
                    color:'rgba(0,0,0,0)'
                },
                emphasis:{
                    color:'rgba(0,0,0,0)'
                }
            },
            data:[320, 332, 251, 300, 360, 330, 350]
        },
        {
            name:'变化',
            type:'bar',
            stack: '1',
            data:[
              80, 42, 
              {value : 50, itemStyle:{ normal:{color:'red'}}},
              {value : 34, itemStyle:{ normal:{color:'red'}}}, 
              60, 70, 90
            ]
        }
    ]
};
//
var option4 = {
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
            data: [12,21,10,4,12,5,6,5,25,23,7],
           
        }
    ]
};
////
var option5 = {
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


//使用第1个图表
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
        myChart = ec.init(document.getElementById('data-echart2-1'));
        // 过渡---------------------
        myChart.showLoading({
            text: '正在努力的读取数据中...', //loading话术
        });
        myChart.hideLoading();      

        // 为echarts对象加载数据 
        myChart.setOption(option1);
         
    }

);

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
        myChart2 = ec.init(document.getElementById('data-echart2-2'));
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
        myChart3 = ec.init(document.getElementById('data-echart2-3'));
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
require(
         [
         'echarts',
         'echarts/chart/bar', // 使用柱状图就加载bar模块，按需加载
         'echarts/chart/line',
          'echarts/chart/pie'
         ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        myChart4 = ec.init(document.getElementById('data-echart2-4'));
        // 过渡---------------------
        myChart4.showLoading({
            text: '正在努力的读取数据中...', //loading话术
        });
        myChart4.hideLoading();
        // 为echarts对象加载数据 
        myChart4.setOption(option4);
    }
);
//
//        //使用//使用使用第5个图表
require(
         [
         'echarts',
         'echarts/chart/bar', // 使用柱状图就加载bar模块，按需加载
         'echarts/chart/line',
          'echarts/chart/pie'
         ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        myChart5 = ec.init(document.getElementById('data-echart2-5'));
        // 过渡---------------------
        myChart5.showLoading({
            text: '正在努力的读取数据中...', //loading话术
        });
        myChart5.hideLoading();
        // 为echarts对象加载数据 
        myChart5.setOption(option5);
    }
);

setTimeout(function (){
    window.onresize = function () {
        myChart.resize();
        myChart2.resize();
        myChart3.resize();
        myChart4.resize();
        myChart5.resize();
    }
},200)

//图表的大小变化始终与浏览器的窗口一致  

//window.onresize = myChart.resize;

