var kcFlg = 'sh';


var tmpData = [
                {name: '北京',value:129.08},
                {name: '天津',value:162.39},
                {name: '上海',value:207.75},
                {name: '重庆',value:262.5},
                {name: '河北',value:936.56},
                {name: '河南',value:1768.29},
                {name: '云南',value:230.17},
                {name: '辽宁',value:490.43},
                {name: '黑龙江',value:546.33},
                {name: '湖南',value:317.35},
                {name: '安徽',value:1001.37},
                {name: '山东',value:1773.23},
                {name: '新疆',value:847.81},
                {name: '江苏',value:1425.79},
                {name: '浙江',value:819.06},
                {name: '江西',value:282.68},
                {name: '湖北',value:368.43},
                {name: '广西',value:269.14},
                {name: '甘肃',value:758.65},
                {name: '山西',value:2182.25},
                {name: '内蒙古',value:1273.99},
                {name: '陕西',value:707.23},
                {name: '吉林',value:313.68},
                {name: '福建',value:411.76},
                {name: '贵州',value:538.58},
                {name: '广东',value:880.21},
                {name: '青海',value:52.29},
                {name: '西藏',value:5.13},
                {name: '四川',value:352.78},
                {name: '宁夏',value:833.25},
                {name: '海南',value:85.03},
                {name: '台湾',value:0},
                {name: '香港',value:0},
                {name: '澳门',value:0}
            ];
 

//运输库存
var shkcData = [
                {name: '北京',value:129.08},
                {name: '天津',value:162.39},
                {name: '上海',value:207.75},
                {name: '重庆',value:262.5},
                {name: '河北',value:936.56},
                {name: '河南',value:1768.29},
                {name: '云南',value:230.17},
                {name: '辽宁',value:490.43},
                {name: '黑龙江',value:546.33},
                {name: '湖南',value:317.35},
                {name: '安徽',value:1001.37},
                {name: '山东',value:1773.23},
                {name: '新疆',value:847.81},
                {name: '江苏',value:1425.79},
                {name: '浙江',value:819.06},
                {name: '江西',value:282.68},
                {name: '湖北',value:368.43},
                {name: '广西',value:269.14},
                {name: '甘肃',value:758.65},
                {name: '山西',value:2182.25},
                {name: '内蒙古',value:1273.99},
                {name: '陕西',value:707.23},
                {name: '吉林',value:313.68},
                {name: '福建',value:411.76},
                {name: '贵州',value:538.58},
                {name: '广东',value:880.21},
                {name: '青海',value:52.29},
                {name: '西藏',value:5.13},
                {name: '四川',value:352.78},
                {name: '宁夏',value:833.25},
                {name: '海南',value:85.03},
                {name: '台湾',value:0},
                {name: '香港',value:0},
                {name: '澳门',value:0}
            ];
var shkcZsData = [19797.24, 21807.22, 23548.32, 28438.54, 22207.34, 26208.80, 28999.73];
var optionShKucun = {
    title : {
        text: '运输库存(万吨)',
        x:'center'
    },
    tooltip : {
        trigger: 'item'
    },
   
    dataRange: {
        min: 0,
        max: 2500,
        x: 'left',
        y: 'bottom',
        text:['高','低'],           // 文本，默认为数值文本
        calculable : true
    },
    toolbox: {
        show: true,
        orient : 'vertical',
        x: 'right',
        y: 'center',
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    roamController: {
        show: true,
        x: 'right',
        mapTypeControl: {
            'china': true
        }
    },
    series : [
        {
            name: '运输库存',
            type: 'map',
            mapType: 'china',
            roam: false,
            itemStyle:{
                normal:{label:{show:true}},
                emphasis:{label:{show:true}}
            },
            data:[
            ]
        }
    ]
};  
var optionKucunZs = {
    title : {
        text: '运输库存(万吨)'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['运输库存'],
        x:'center',
        y:'bottom' 
    },
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    grid:{
    x:60,
    y:50,
    x2:10,
    y2:50
  	},
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['2015-04-20','2015-04-26','2015-05-04','2015-05-10','2015-05-15','2015-05-20','2015-05-26']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'运输库存',
            type:'line',
            stack: '总量',
            smooth:true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        shadowColor : 'rgba(0,0,0,0.8)'
                    }
                }
            },
            data:[]
        }
    ]
}
var optionKucunZl = {
    title : {
        text: '各环节主要煤炭库存(万吨)'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['运输库存','生产库存','消费库存'],
        x:'center',
        y:'bottom' 
    },
    calculable : true,
    grid:{
    x:40,
    y:50,
    x2:10,
    y2:50
  	},
    xAxis : [
        {
            type : 'category',
            data :  ['2015-04-20','2015-04-26','2015-05-04','2015-05-10','2015-05-15','2015-05-20','2015-05-26']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'运输库存',
            type:'bar',
            barCategoryGap:20,
            data:[19797.24, 21807.22, 23548.32, 28438.54, 22207.34, 26208.80, 28999.73]

        },
        {
            name:'生产库存',
            type:'bar',
            barCategoryGap:20,
            data:[5608.14, 5628.86, 4758.67, 5295.81, 6310.86, 6494.80, 5159.73]
        },
        {
            name:'消费库存',
            type:'bar',
            barCategoryGap:20,
            data:[17769.24, 16564.22, 17620.32, 17295.54, 15681.34, 17899.80, 17498.73]
        }
    ]
}
var optionKcGs = {
    title : {
        text: '',
        x:'left'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient : 'vertical',
        x : 'center',
        y:'bottom',
        data:["国有煤矿库存","消费库存"]
    },
    calculable : true,
    series : [
        {
            name:'',
            type:'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[]
        }
    ]
};

//生产库存
var sckcData = [
                {name: '北京',value:61.68},
                {name: '天津',value:0},
                {name: '上海',value:0},
                {name: '重庆',value:42.44},
                {name: '河北',value:167.01},
                {name: '河南',value:915.71},
                {name: '云南',value:6.77},
                {name: '辽宁',value:48.73},
                {name: '黑龙江',value:284.1},
                {name: '湖南',value:195.71},
                {name: '安徽',value:36.15},
                {name: '山东',value:273.52},
                {name: '新疆',value:254.39},
                {name: '江苏',value:36.15},
                {name: '浙江',value:0},
                {name: '江西',value:14.68},
                {name: '湖北',value:0},
                {name: '广西',value:0},
                {name: '甘肃',value:499.65},
                {name: '山西',value:1464.25},
                {name: '内蒙古',value:371.99},
                {name: '陕西',value:262.23},
                {name: '吉林',value:100.68},
                {name: '福建',value:41.76},
                {name: '贵州',value:100.58},
                {name: '广东',value:80.21},
                {name: '青海',value:0},
                {name: '西藏',value:0},
                {name: '四川',value:18.78},
                {name: '宁夏',value:576.25},
                {name: '海南',value:0},
                {name: '台湾',value:0},
                {name: '香港',value:0},
                {name: '澳门',value:0}
            ];
var sckcDataZdmeikuang = [5608.14,5829.61,5276.81,5159.84,4758.67,5295.81,5628.86];
var sckcDataMeiqi = [9500,10500,9600,10100,4808.07,8800,9000];
var sckcDataTop5 = [1259.31,750.94,662.62,346.06,346.15]
var optionScKucun = {
    title : {
        text: '生产库存(万吨)',
        x:'center'
    },
    tooltip : {
        trigger: 'item'
    },
   
    toolbox: {
        show: true,
        orient : 'vertical',
        x: 'right',
        y: 'center',
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    roamController: {
        show: true,
        x: 'right',
        mapTypeControl: {
            'china': true
        }
    },
    series : [
        {
            name: '生产库存(万吨)',
            type: 'map',
            mapType: 'china',
            roam: false,
            itemStyle:{
                normal:{label:{show:true}},
                emphasis:{label:{show:true}}
            },
            data:[]
        }
    ]
};
//重点煤矿库存及煤企库存
var optionKucunZsSc = {
    title : {
        text: '重点煤矿库存及煤企库存'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['重点煤矿库存','煤企库存'],
        x:'center',
        y:'bottom' 
    },
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    grid:{
    x:60,
    y:50,
    x2:10,
    y2:50
  	},
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['2015-04-20','2015-04-26','2015-05-04','2015-05-10','2015-05-15','2015-05-20','2015-05-26']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'重点煤矿库存',
            type:'line',
            stack: '总量',
            smooth:true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        shadowColor : 'rgba(0,0,0,0.8)'
                    }
                }
            },
            data:[]
        },
        {
            name:'煤企库存',
            type:'line',
            stack: '总量',
            smooth:true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        shadowColor : 'rgba(0,0,0,0.8)'
                    }
                }
            },
            data:[]
        }
    ]
}
var optionKucunZsTop5 = {
    title : {
        text: '国有重点煤矿库存前五省'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['山西','河南','宁夏','甘肃','安徽'],
        x:'center',
        y:'bottom' 
    },
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    grid:{
    x:60,
    y:50,
    x2:10,
    y2:50
  	},
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['2015-04-20','2015-04-26','2015-05-04','2015-05-10','2015-05-15','2015-05-20','2015-05-26']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'山西',
            type:'line',
            stack: '总量',
            smooth:true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        shadowColor : 'rgba(0,0,0,0.8)'
                    }
                }
            },
            data:[]
        },
        {
            name:'河南',
            type:'line',
            stack: '总量',
            smooth:true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        shadowColor : 'rgba(0,0,0,0.8)'
                    }
                }
            },
            data:[]
        },
        {
            name:'宁夏',
            type:'line',
            stack: '总量',
            smooth:true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        shadowColor : 'rgba(0,0,0,0.8)'
                    }
                }
            },
            data:[]
        },
        {
            name:'甘肃',
            type:'line',
            stack: '总量',
            smooth:true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        shadowColor : 'rgba(0,0,0,0.8)'
                    }
                }
            },
            data:[]
        },
        {
            name:'安徽',
            type:'line',
            stack: '总量',
            smooth:true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        shadowColor : 'rgba(0,0,0,0.8)'
                    }
                }
            },
            data:[]
        }
    ]
}
var optionKucunScGs = {
    title : {
        text: ''
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:[''],
        x:'center',
        y:'bottom' 
    },
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    grid:{
    x:60,
    y:50,
    x2:10,
    y2:50
  	},
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['2015-04-20','2015-04-26','2015-05-04','2015-05-10','2015-05-15','2015-05-20','2015-05-26']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'',
            type:'line',
            stack: '总量',
            smooth:true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        shadowColor : 'rgba(0,0,0,0.8)'
                    }
                }
            },
            data:[]
        }
    ]
}

//消费库存
var xfkcData = [
                {name: '北京',value:67.68},
                {name: '天津',value:162.39},
                {name: '上海',value:207.75},
                {name: '重庆',value:220.06},
                {name: '河北',value:796.01},
                {name: '河南',value:852.71},
                {name: '云南',value:223.77},
                {name: '辽宁',value:441.73},
                {name: '黑龙江',value:262.1},
                {name: '湖南',value:317.71},
                {name: '安徽',value:648.15},
                {name: '山东',value:1499.52},
                {name: '新疆',value:593.39},
                {name: '江苏',value:1389.15},
                {name: '浙江',value:819},
                {name: '江西',value:268.68},
                {name: '湖北',value:368.43},
                {name: '广西',value:296.14},
                {name: '甘肃',value:259.65},
                {name: '山西',value:717.25},
                {name: '内蒙古',value:956.99},
                {name: '陕西',value:444.23},
                {name: '吉林',value:212.68},
                {name: '福建',value:411.76},
                {name: '贵州',value:438.58},
                {name: '广东',value:880.21},
                {name: '青海',value:52.29},
                {name: '西藏',value:5.13},
                {name: '四川',value:334.78},
                {name: '宁夏',value:259.25},
                {name: '海南',value:85.3},
                {name: '台湾',value:0},
                {name: '香港',value:0},
                {name: '澳门',value:0}
            ];
var xfkcDataHy = [25.64,51.45,865.09,55.15]
var optionXfKuceun = {
    title : {
        text: '消费库存(万吨)',
        x:'center'
    },
    tooltip : {
        trigger: 'item'
    },
   
    dataRange: {
        min: 0,
        max: 2500,
        x: 'left',
        y: 'bottom',
        text:['高','低'],           // 文本，默认为数值文本
        calculable : true
    },
    toolbox: {
        show: true,
        orient : 'vertical',
        x: 'right',
        y: 'center',
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    roamController: {
        show: true,
        x: 'right',
        mapTypeControl: {
            'china': true
        }
    },
    series : [
        {
            name: '消费库存',
            type: 'map',
            mapType: 'china',
            roam: false,
            itemStyle:{
                normal:{label:{show:true}},
                emphasis:{label:{show:true}}
            },
            data:[]
        }
    ]
};
var optionXfKcHy = {
    title : {
        text: '全国煤炭消费总量(万吨)',
        x:'left'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['化工','建材','电力','钢铁'],
        x:'center',
        y:'bottom' 
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data :  ['2015-04-20','2015-04-26','2015-05-04','2015-05-10','2015-05-15','2015-05-20','2015-05-26']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    grid:{
    x:60,
    y:50,
    x2:10,
    y2:50
  	},
    series : [
        {
            name:'化工',
            type:'bar',
            barCategoryGap:10,
            stack: '消费',
            data:[]
        },
        {
            name:'建材',
            type:'bar',
            stack: '消费',
            data:[]
        },
        {
            name:'电力',
            type:'bar',
            stack: '消费',
            data:[]
        },
        {
            name:'钢铁',
            type:'bar',
            stack: '消费',
            data:[]
        }
    ]
};
var optionXfKcJg = {
    title : {
        text: '消费库存结构',
        x:'left'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        data:['化工','建材','电力','钢铁'],
        x:'center',
        y:'bottom' 
    },
    calculable : true,
    series : [
        {
            name:'',
            type:'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[]
        }
    ]
};
var optionXfKcGs = {
    title : {
        text: '',
        x:'left'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['化工','建材','电力','钢铁'],
        x:'center',
        y:'bottom' 
    },
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    grid:{
    x:60,
    y:50,
    x2:10,
    y2:50
  	},
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['2015-04-20','2015-04-26','2015-05-04','2015-05-10','2015-05-15','2015-05-20','2015-05-26']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'化工',
            type:'line',
            stack: '总量',
            smooth:true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        shadowColor : 'rgba(0,0,0,0.8)'
                    }
                }
            },
            data:[]
        },
        {
            name:'建材',
            type:'line',
            stack: '总量',
            smooth:true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        shadowColor : 'rgba(0,0,0,0.8)'
                    }
                }
            },
            data:[]
        },
        {
            name:'电力',
            type:'line',
            stack: '总量',
            smooth:true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        shadowColor : 'rgba(0,0,0,0.8)'
                    }
                }
            },
            data:[]
        },
        {
            name:'钢铁',
            type:'line',
            stack: '总量',
            smooth:true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        shadowColor : 'rgba(0,0,0,0.8)'
                    }
                }
            },
            data:[]
        }
    ]
}



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


var mainChart;
var subcharts1,subcharts2,subcharts3,subcharts4,subcharts5,subcharts6;
//使用第1个图表
require(
         [
         'echarts',
         'echarts/chart/bar', // 使用柱状图就加载bar模块，按需加载
         'echarts/chart/line',
          'echarts/chart/pie',
            'echarts/chart/scatter',
             'echarts/chart/map'
         ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        mainChart = ec.init(document.getElementById('download'));
        // 过渡---------------------
        mainChart.showLoading({
            text: '正在努力的读取数据中...', //loading话术
        });
        mainChart.hideLoading();      
        optionShKucun.series[0].data=shkcData;
        // 为echarts对象加载数据 
        mainChart.setOption(optionShKucun);         
                
        
        mainChart.on('click', function(param){
                if(kcFlg == 'sh'){//运输库存
                    var temSumKc = [7];
                    for(var i = 0 ; i< 7;i++){
                        temSumKc[i] = (param.value * (Math.random()*0.4+0.8)).toFixed(2);
                    }
                    optionKucunZs.title.text = param.name + "主要煤炭库存(万吨)";
                    optionKucunZs.legend.data = [param.name + "主要煤炭库存"];
                    optionKucunZs.series[0].name = param.name + "主要煤炭库存";
                    optionKucunZs.series[0].data=temSumKc;
                    subcharts1.setOption(optionKucunZs);  
                    
                    
                    optionKcGs.title.text = param.name + "主要煤炭库存(万吨)";
                    optionKcGs.series[0].name = param.name + "主要煤炭库存";
                    var tmData = [{value:335, name:'国有煤矿库存'},
                                        {value:310, name:'消费库存'}];
                    tmData[0].value = (param.value * Math.random()).toFixed(2);
                    tmData[1].value = (param.value-tmData[0].value).toFixed(2);
                    optionKcGs.series[0].data=tmData;
                    
                    subcharts2.clear();
                    subcharts2.setOption(optionKcGs);  
                }else if(kcFlg == 'sc'){
                    var temSumKc = [7];
                    for(var i = 0 ; i< 7;i++){
                        temSumKc[i] = (param.value * (Math.random()*0.4+0.8)).toFixed(2);
                    }
                    optionKucunScGs.title.text = param.name + "国有重点煤矿库存(万吨)";
                    optionKucunScGs.legend.data = [param.name];
                    optionKucunScGs.series[0].name = param.name;
                    optionKucunScGs.series[0].data=temSumKc;
                    subcharts3.clear();
                    subcharts3.setOption(optionKucunScGs);  
                }else if(kcFlg == 'xf'){
                    optionXfKcGs.title.text = param.name + "消费库存(万吨)";
                    
                    var tmpDataXf = new Array();
                    for(var i = 0; i < 4;i++){
                        var value;
                        switch(i)
                        {
                        case 0:
                           value = param.value * 0.2;
                          break;
                        case 1:
                           value = param.value * 0.3;
                          break;
                        case 2:
                           value = param.value * 0.4;
                          break;
                        case 3:
                           value = param.value * 0.1;
                          break;
                        }
                        tmpDataXf[i] = new Array();
                        for(var j = 0; j < 7;j++){
                            tmpDataXf[i][j] = (value * (Math.random()*0.7+0.2)).toFixed(2);
                        }
                        optionXfKcGs.series[i].data = tmpDataXf[i];
                    }
                    subcharts5.clear();
                    subcharts5.setOption(optionXfKcGs); 
                    
                    
                    
                    optionXfKcJg.title.text = param.name + "消费库存结构";
                    // 为echarts对象加载数据 
                     var tmData = [{value:0, name:'化工'},{value:0, name:'建材'}, {value:0, name:'电力'}, {value:0, name:'钢铁'}];
                     tmData[0].value = (param.value * 0.2 * (Math.random()*0.7+0.2)).toFixed(2);
                     tmData[1].value = (param.value * 0.3 * (Math.random()*0.7+0.2)).toFixed(2);
                     tmData[2].value = (param.value * 0.4 * (Math.random()*0.7+0.2)).toFixed(2);
                     tmData[3].value = (param.value * 0.1 * (Math.random()*0.7+0.2)).toFixed(2);
                    optionXfKcJg.series[0].data=tmData;
                    subcharts6.setOption(optionXfKcJg);  
                }
            }
        );
        
        subcharts1 = ec.init(document.getElementById('subcharts1'));
        // 过渡---------------------
        subcharts1.showLoading({
            text: '正在努力的读取数据中...', //loading话术
        });
        subcharts1.hideLoading();   
        // 为echarts对象加载数据 
        optionKucunZs.series[0].data=shkcZsData;
        subcharts1.setOption(optionKucunZs);  
        
        
                
        subcharts2 = ec.init(document.getElementById('subcharts2'));
        // 过渡---------------------
        subcharts2.showLoading({
            text: '正在努力的读取数据中...', //loading话术
        });
        subcharts2.hideLoading();   
        // 为echarts对象加载数据 
        subcharts2.setOption(optionKucunZl);  
        
    }
);



$('#myTab a').click(function (e) {
    e.preventDefault();
    $(this).tab('show');
    
    createCharts();
});

function changDate(){
    if(kcFlg == 'sh'){//运输库存
        for(var i = 0 ; i< shkcData.length;i++){
            tmpData[i].value = (shkcData[i].value * (Math.random()*0.4+0.8)).toFixed(2);
        }
        optionShKucun.series[0].data=tmpData;
        // 为echarts对象加载数据 
        mainChart.clear();
        mainChart.setOption(optionShKucun);  
        
        
        optionKucunZs.title.text = "运输库存(万吨)";
        optionKucunZs.legend.data = ["运输库存"];
        optionKucunZs.series[0].name = "运输库存";
        optionKucunZs.series[0].data=shkcZsData;
        subcharts1.setOption(optionKucunZs);  
        
        subcharts2.clear();
        subcharts2.setOption(optionKucunZl);  
    }else if(kcFlg == 'sc'){
        for(var i = 0 ; i< sckcData.length;i++){
            tmpData[i].value = (sckcData[i].value * (Math.random()*0.4+0.8)).toFixed(2);
        }
        optionScKucun.series[0].data=tmpData;
        // 为echarts对象加载数据 
        mainChart.setOption(optionScKucun);  
        
        optionKucunZsSc.series[0].data=sckcDataZdmeikuang;
        optionKucunZsSc.series[1].data=sckcDataMeiqi;
        subcharts3.setOption(optionKucunZsSc);
    }else if(kcFlg == 'xf'){
        for(var i = 0 ; i< xfkcData.length;i++){
            tmpData[i].value = (xfkcData[i].value * (Math.random()*0.4+0.8)).toFixed(2);
        }
        optionXfKuceun.series[0].data=tmpData;
        // 为echarts对象加载数据 
        mainChart.clear();
        mainChart.setOption(optionXfKuceun);
        
        subcharts5.clear();
        subcharts5.setOption(optionXfKcHy);  
        
        
        // 为echarts对象加载数据 
        optionXfKcJg.title.text = "消费库存结构";
         var tmData = [{value:0, name:'化工'},{value:0, name:'建材'}, {value:0, name:'电力'}, {value:0, name:'钢铁'}];
         tmData[0].value = xfkcDataHy[0];
         tmData[1].value = xfkcDataHy[1];
         tmData[2].value = xfkcDataHy[2];
         tmData[3].value = xfkcDataHy[3];
        optionXfKcJg.series[0].data=tmData;
        subcharts6.setOption(optionXfKcJg);
    }
}


function changType(id){
    $("#selDate").val(1);
    if(id == 1){
        kcFlg = 'sh';
    }else if(id == 2){
        kcFlg = 'sc';
    }else if(id == 3){
        kcFlg = 'xf';
    }
    if(kcFlg == 'sh'){//运输库存
        optionShKucun.series[0].data=shkcData;
        // 为echarts对象加载数据 
        mainChart.clear();
        mainChart.setOption(optionShKucun);  
        
        optionKucunZs.title.text = "运输库存(万吨)";
        optionKucunZs.legend.data = ["运输库存"];
        optionKucunZs.series[0].name = "运输库存";
        optionKucunZs.series[0].data=shkcZsData;
        subcharts1.setOption(optionKucunZs);  
        
        subcharts2.clear();
        subcharts2.setOption(optionKucunZl);  
    }else if(kcFlg == 'sc'){
        optionScKucun.series[0].data=sckcData;
        // 为echarts对象加载数据 
        //mainChart.clear();
        mainChart.setOption(optionScKucun);
        
    }else if(kcFlg == 'xf'){
        optionXfKuceun.series[0].data=xfkcData;
        // 为echarts对象加载数据 
        mainChart.clear();
        mainChart.setOption(optionXfKuceun);
        
        var tmpDataXf = new Array();
        for(var i = 0; i < 4;i++){
            var value = xfkcDataHy[i];
            tmpDataXf[i] = new Array();
            for(var j = 0; j < 7;j++){
                tmpDataXf[i][j] = (value * (Math.random()*0.7+0.2)).toFixed(2);
            }
            optionXfKcHy.series[i].data = tmpDataXf[i];
        }
        subcharts5.setOption(optionXfKcHy);  
    }
}

function createCharts(){
    require(
         [
         'echarts',
         'echarts/chart/bar', // 使用柱状图就加载bar模块，按需加载
         'echarts/chart/line',
          'echarts/chart/pie',
            'echarts/chart/scatter',
             'echarts/chart/map'
         ],
    function (ec) {
        
        subcharts3 = ec.init(document.getElementById('subcharts3'));
        // 过渡---------------------
        subcharts3.showLoading({
            text: '正在努力的读取数据中...', //loading话术
        });
        subcharts3.hideLoading();   
        // 为echarts对象加载数据 
        optionKucunZsSc.series[0].data=sckcDataZdmeikuang;
        optionKucunZsSc.series[1].data=sckcDataMeiqi;
        subcharts3.setOption(optionKucunZsSc);  
        
        subcharts4 = ec.init(document.getElementById('subcharts4'));
        // 过渡---------------------
        subcharts4.showLoading({
            text: '正在努力的读取数据中...', //loading话术
        });
        subcharts4.hideLoading();   
        // 为echarts对象加载数据 
        
        
        
        var tmpDataSc = new Array();
        for(var i = 0; i < 5;i++){
            var value = sckcDataTop5[i];
            tmpDataSc[i] = new Array();
            for(var j = 0; j < 7;j++){
                tmpDataSc[i][j] = (value * (Math.random()*0.7+0.2)).toFixed(2);
            }
            optionKucunZsTop5.series[i].data = tmpDataSc[i];
        }
        subcharts4.setOption(optionKucunZsTop5);  
        
        
        
        subcharts5 = ec.init(document.getElementById('subcharts5'));
        // 过渡---------------------
        subcharts5.showLoading({
            text: '正在努力的读取数据中...', //loading话术
        });
        subcharts5.hideLoading();  
        // 为echarts对象加载数据 
        
        var tmpDataXf = new Array();
        for(var i = 0; i < 4;i++){
            var value = xfkcDataHy[i];
            tmpDataXf[i] = new Array();
            for(var j = 0; j < 7;j++){
                tmpDataXf[i][j] = (value * (Math.random()*0.7+0.2)).toFixed(2);
            }
            optionXfKcHy.series[i].data = tmpDataXf[i];
        }
        subcharts5.setOption(optionXfKcHy);  
        
        
        
        
        subcharts6 = ec.init(document.getElementById('subcharts6'));
        // 过渡---------------------
        subcharts6.showLoading({
            text: '正在努力的读取数据中...', //loading话术
        });
        subcharts6.hideLoading();  
        // 为echarts对象加载数据 
         var tmData = [{value:0, name:'化工'},{value:0, name:'建材'}, {value:0, name:'电力'}, {value:0, name:'钢铁'}];
         tmData[0].value = xfkcDataHy[0];
         tmData[1].value = xfkcDataHy[1];
         tmData[2].value = xfkcDataHy[2];
         tmData[3].value = xfkcDataHy[3];
        optionXfKcJg.series[0].data=tmData;
        subcharts6.setOption(optionXfKcJg);  
    }
);
}

setTimeout(function (){
    window.onresize = function () {
        if(mainChart != undefined){
            mainChart.resize();
        }
        if(subcharts1 != undefined){
            subcharts1.resize();
        }
        if(subcharts2 != undefined){
            subcharts2.resize();
        }
        if(subcharts3 != undefined){
            subcharts3.resize();
        }
        if(subcharts4 != undefined){
            subcharts4.resize();
        }
        if(subcharts5 != undefined){
            subcharts5.resize();
        }
        if(subcharts6 != undefined){
            subcharts6.resize();
        }
    }
},200);

