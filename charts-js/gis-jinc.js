var kcFlg = 'sh';


var tmpData = [
                {name: '北京',value:21.44},
                {name: '天津',value:23.36},
                {name: '上海',value:43.32},
                {name: '重庆',value:5},
                {name: '河北',value:88.71},
                {name: '河南',value:9.91},
                {name: '云南',value:0.17},
                {name: '辽宁',value:80.55},
                {name: '黑龙江',value:3.33},
                {name: '湖南',value:6.72},
                {name: '安徽',value:14.66},
                {name: '山东',value:120.35},
                {name: '新疆',value:0.81},
                {name: '江苏',value:123.58},
                {name: '浙江',value:133.25},
                {name: '江西',value:21.45},
                {name: '湖北',value:4.71},
                {name: '广西',value:225.88},
                {name: '甘肃',value:0},
                {name: '山西',value:14.07},
                {name: '内蒙古',value:99.98},
                {name: '陕西',value:0},
                {name: '吉林',value:15.24},
                {name: '福建',value:225.33},
                {name: '贵州',value:9.12},
                {name: '广东',value:347.82},
                {name: '青海',value:7.25},
                {name: '西藏',value:0},
                {name: '四川',value:16.81},
                {name: '宁夏',value:0},
                {name: '海南',value:50.41}
            ];
 
//分省进口
var fsJkData = [
                {name: '北京',value:21.44},
                {name: '天津',value:23.36},
                {name: '上海',value:43.32},
                {name: '重庆',value:5},
                {name: '河北',value:88.71},
                {name: '河南',value:9.91},
                {name: '云南',value:0.17},
                {name: '辽宁',value:80.55},
                {name: '黑龙江',value:3.33},
                {name: '湖南',value:6.72},
                {name: '安徽',value:14.66},
                {name: '山东',value:120.35},
                {name: '新疆',value:0.81},
                {name: '江苏',value:123.58},
                {name: '浙江',value:133.25},
                {name: '江西',value:21.45},
                {name: '湖北',value:4.71},
                {name: '广西',value:225.88},
                {name: '甘肃',value:0},
                {name: '山西',value:14.07},
                {name: '内蒙古',value:99.98},
                {name: '陕西',value:0},
                {name: '吉林',value:15.24},
                {name: '福建',value:225.33},
                {name: '贵州',value:9.12},
                {name: '广东',value:347.82},
                {name: '青海',value:7.25},
                {name: '西藏',value:0},
                {name: '四川',value:16.81},
                {name: '宁夏',value:0},
                {name: '海南',value:50.41}

            ];
//分省进口煤炭当月数量 mainChart
var optionFsJk = {
    title : {
        text: '分省进口煤炭当月数量(万吨)',
        x:'left'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['北京','天津','上海','重庆','河北','河南','云南','辽宁','黑龙江','湖南','安徽','山东','新疆','江苏','浙江','江西','湖北','广西','甘肃','山西','内蒙古','陕西','吉林','福建','贵州','广东','青海','西藏','四川','宁夏','海南',],
        x:20,
        y:40,
        itemGap:3,
        orient:'vertical'
    },
    calculable : true,
        formatter: function (params,ticket,callback) {
            var res = 'Function formatter : <br/>' + params[0].name;
            for (var i = 0, l = params.length; i < l; i++) {
                res += '<br/>' + params[i].seriesName + ' : ' + params[i].value;
            }
            return 'loading';
        },
    series : [
        {
            name:'',
            type:'pie',
            radius : ['70%', '90%'],
            center: ['65%', '52%'],
            itemStyle : {
                normal : {
                    label : {
                        show : false
                    },
                    labelLine : {
                        show : false
                    }
                },
                emphasis : {
                    label : {
                        show : true,
                        position : 'center',
                        formatter : "{b} {c}",
                        textStyle : {
                            fontSize : '30',
                            fontWeight : 'bold'
                        }
                    }
                }
            },
            data:[]
        }
    ]
};
//分国别进口煤炭 subcharts1
var fgbJkData = [6.417,9.561,11.833,20.321,41.9563,100.7970,115.9766,129.7425,535.2195,758.0414];
var qtymData = [0,0,0,0,0,4.04,72.1,0,363.43,173.673];//其它烟煤
var hmData = [0,0,0,0,41.953,0,0,0,0,492.68];//褐煤
var ljymData = [0,0,0,17.36,0,91.96,31.9,0,153.452,0];//炼焦烟煤
var wymData = [0,0,3.17,0,0,0,11.09,192.7,2.6,0];//无烟煤
var qtmData = [0,0,0,0,0,4.78,0,0,15.73,91.59];//其他煤

var meiZhongData = [fgbJkData,qtymData,hmData,ljymData,wymData,qtmData];
var fgbJkSeriesAll = [{name:'全部',type:'bar',stack: '总量',barCategoryGap:10,data:[]}];
var fgbJkSeries = [{name:'',type:'bar',stack: '总量',barCategoryGap:10,data:[]},
                    {name:'全部',type:'bar',stack: '总量',barCategoryGap:10,data:[]}
                    ];
var optionFgbJk = {
    title : {
        text: '分国别进口煤炭当月数量(万吨)'
    },
    tooltip : {
        trigger: 'item',
        formatter:'{a}:{c}万吨'
    },
    calculable : true,
    grid:{
    x:80,
    y:30,
    x2:20,
    y2:30
  	},
    xAxis : [
        {
            splitLine:{
                show:false
              },
            type : 'value',
            boundaryGap : [0, 0.01]
        }
    ],
    yAxis : [
        {
            splitLine:{
                show:false
              },
            type : 'category',
            data : ['罗马尼亚','老挝','越南','加拿大','菲律宾','蒙古','俄罗斯','朝鲜','澳大利亚','印度尼西亚']
        }
    ],
    series : []
};
//煤炭进口总量 subcharts2
var jkZlData = [2529.17,2710.29,2401.20,2301.83,2115.68,1525.60,1702.50];
var optionJkZl = {
    title : {
        text: '全国煤炭进口总量(万吨)'
    },
    tooltip : {
        trigger: 'item',
        formatter:'{b}<br/>{c}万吨'
    },
    calculable : true,
    grid:{
    x:40,
    y:35,
    x2:20,
    y2:30
  	},
    xAxis : [
        {
            splitLine:{
                show:false
              },
            type : 'category',
            boundaryGap : false,
            data : ['2014/11','2014/12','2015/1','2015/2','2015/3','2015/4','2015/5']
        }
    ],
    yAxis : [
        {
            splitLine:{
                show:false
              },
            type : 'value'
        }
    ],
    series : [
        {
            name:'',
            type:'line',
            smooth:true,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data:[]
        }
    ]
};

//煤种进口总量 subcharts3
var mzJkZlData = new Array();
var optionMzZl = {
    title : {
        text: '分煤种进口总量(万吨)'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['其它烟煤','褐煤','炼焦烟煤','无烟煤','其它煤'],
        x:'center',
        y:'bottom' 
    },
    grid:{
    x:40,
    y:50,
    x2:10,
    y2:90
  	},
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['2014/11','2014/12','2015/1','2015/2','2015/3','2015/4','2015/5']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'其它烟煤',
            type:'line',
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
            name:'褐煤',
            type:'line',
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
            name:'炼焦烟煤',
            type:'line',
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
            name:'无烟煤',
            type:'line',
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
            name:'其它煤',
            type:'line',
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

//煤种均价 subcharts4
var mzJjData = [79.92,54.35,117.12,82.09,64.47];
var mzJkJjData = new Array();
var optionMzJj = {
    title : {
        text: '分煤种进口煤炭均价(美元/吨)'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['其它烟煤','褐煤','炼焦烟煤','无烟煤','其它煤'],
        x:'center',
        y:'bottom' 
    },
    grid:{
    x:40,
    y:50,
    x2:10,
    y2:90
  	},
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['2014/11','2014/12','2015/1','2015/2','2015/3','2015/4','2015/5']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'其它烟煤',
            type:'line',
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
            name:'褐煤',
            type:'line',
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
            name:'炼焦烟煤',
            type:'line',
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
            name:'无烟煤',
            type:'line',
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
            name:'其它煤',
            type:'line',
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
};

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
//绘制进口数据图表
creatJkChart();

var mainChart,subcharts1,subcharts2,subcharts3,subcharts4,subcharts5;

function creatJkChart(){
    $("#jingkou").show();
    $("#chukou").hide();
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
            mainChart = ec.init(document.getElementById('chart_fsJk'),e_macarons);
            // 过渡---------------------
            mainChart.showLoading({
                text: '正在努力的读取数据中...', //loading话术
            });
            mainChart.hideLoading();      
            optionFsJk.series[0].data=fsJkData;
            // 为echarts对象加载数据 
            mainChart.setOption(optionFsJk);         


            mainChart.on('click', function(param){
                
                    var tmtFsZl = new Array();
                    for(var j = 0;j<7;j++){
                        tmtFsZl[j] = (param.value * Math.random()).toFixed(2);
                    }
                    optionJkZl.title.text = param.name + '煤炭进口总量(万吨)';
                    optionJkZl.series[0].data=tmtFsZl;
                    subcharts2.setOption(optionJkZl);  
                
                
                    var tmtMzZl;
                    for(var i = 0; i<5;i++){
                        var mzZlValue = 0;
                        for(var j = 0;j<10;j++){
                            mzZlValue = mzZlValue + meiZhongData[i + 1][j];
                        }
                        tmtMzZl = new Array();
                        for(var j = 0;j<7;j++){
                            tmtMzZl[j] = (mzZlValue / 5  * Math.random()).toFixed(2);
                        }
                        optionMzZl.series[i].data=tmtMzZl;
                    }
                    optionMzZl.title.text = param.name + '分煤种进口总量(万吨)';
                    subcharts3.setOption(optionMzZl); 
                
                
                    var tmtMzJj;
                    for(var i = 0; i<5;i++){
                        var mzJjValue = mzJjData[i];
                        tmtMzJj = new Array();
                        for(var j = 0;j<7;j++){
                            tmtMzJj[j] = (mzJjValue * (Math.random()*0.4+0.8)).toFixed(2);
                        }
                        optionMzJj.series[i].data=tmtMzJj;
                    }
                    optionMzJj.title.text = param.name + '分煤种进口煤炭均价(美元/吨)';
                    subcharts4.setOption(optionMzJj);  
                }
            );

            subcharts1 = ec.init(document.getElementById('chart_mzjk'),e_macarons);
            // 过渡---------------------
            subcharts1.showLoading({
                text: '正在努力的读取数据中...', //loading话术
            });
            subcharts1.hideLoading();   
            // 为echarts对象加载数据 
            optionFgbJk.series = fgbJkSeriesAll;
            optionFgbJk.series[0].data=fgbJkData;
            subcharts1.setOption(optionFgbJk);  



            subcharts2 = ec.init(document.getElementById('subcharts2'),e_macarons);
            // 过渡---------------------
            subcharts2.showLoading({
                text: '正在努力的读取数据中...', //loading话术
            });
            subcharts2.hideLoading();   
            // 为echarts对象加载数据 
            optionJkZl.series[0].data=jkZlData;
            subcharts2.setOption(optionJkZl);  
            
            subcharts3 = ec.init(document.getElementById('subcharts3'),e_macarons);
            // 过渡---------------------
            subcharts3.showLoading({
                text: '正在努力的读取数据中...', //loading话术
            });
            subcharts3.hideLoading();   
            // 为echarts对象加载数据 
            
            var tmtMzZl;
            for(var i = 0; i<5;i++){
                var mzZlValue = 0;
                for(var j = 0;j<10;j++){
                    mzZlValue = mzZlValue + meiZhongData[i + 1][j];
                }
                tmtMzZl = new Array();
                for(var j = 0;j<7;j++){
                    tmtMzZl[j] = (mzZlValue * Math.random()).toFixed(2);
                }
                optionMzZl.series[i].data=tmtMzZl;
                mzJkZlData.push(tmtMzZl);
            }
            subcharts3.setOption(optionMzZl);  
            
            
            subcharts4 = ec.init(document.getElementById('subcharts4'),e_macarons);
            // 过渡---------------------
            subcharts4.showLoading({
                text: '正在努力的读取数据中...', //loading话术
            });
            subcharts4.hideLoading();   
            // 为echarts对象加载数据 
            
            var tmtMzJj;
            for(var i = 0; i<5;i++){
                var mzJjValue = mzJjData[i];
                tmtMzJj = new Array();
                for(var j = 0;j<7;j++){
                    tmtMzJj[j] = (mzJjValue * (Math.random()*0.4+0.8)).toFixed(2);
                }
                optionMzJj.series[i].data=tmtMzJj;
                mzJkJjData.push(tmtMzJj);
            }
            subcharts4.setOption(optionMzJj);  
            
        }
    );
}

//煤种选择
var mzFlg  = 0;
function onMeiZhongBtnClick(id,name){
    $("#selDate").val(1);
    mzFlg = id;
    subcharts1.clear();
    if(id == 0){
        fgbJkSeriesAll[0].name=name;
        optionFgbJk.series = fgbJkSeriesAll;
        optionFgbJk.series[0].data=fgbJkData;
        optionFgbJk.title.text = '分国别进口煤炭当月数量(万吨)'
        subcharts1.setOption(optionFgbJk); 
    }else{
        var mzData = meiZhongData[id];
        fgbJkSeries[0].name=name;
        optionFgbJk.series = fgbJkSeries;
        optionFgbJk.series[0].data=mzData;
        optionFgbJk.series[1].data=fgbJkData;
        optionFgbJk.title.text = name  + ' 分国别进口当月数量(万吨)'
        subcharts1.setOption(optionFgbJk); 
    }
    
    optionJkZl.title.text='全国煤炭进口总量(万吨)';
     optionJkZl.series[0].data=jkZlData;
     subcharts2.setOption(optionJkZl);  
    
    for(var i = 0; i<5;i++){
        optionMzZl.series[i].data=mzJkZlData[i];
    }
    optionMzZl.title.text='分煤种进口总量(万吨)';
    subcharts3.setOption(optionMzZl); 
        
    for(var i = 0; i<5;i++){
        optionMzJj.series[i].data=mzJkJjData[i];
    }
    optionMzJj.title.text = '分煤种进口煤炭均价(美元/吨)';
    subcharts4.setOption(optionMzJj);  
}

function changeDate(){
    for(var i = 0;i<tmpData.length;i++){
        tmpData[i].value = (fsJkData[i].value  * Math.random()).toFixed(2);
    }
    optionFsJk.series[0].data=tmpData;
    mainChart.setOption(optionFsJk); 

    if(mzFlg == 0){
        var tmp = [];
        for(var i = 0;i<fgbJkData.length;i++){
            tmp[i] = (fgbJkData[i]  * Math.random()).toFixed(2);
        }
        optionFgbJk.series[0].data=tmp;
        subcharts1.setOption(optionFgbJk); 
    }else{
        var mzData = meiZhongData[mzFlg];
        var tmp = [];
        for(var i = 0;i<mzData.length;i++){
            tmp[i] = (mzData[i]  * Math.random()).toFixed(2);
        }
        var tmpall = [];
        for(var i = 0;i<fgbJkData.length;i++){
            tmpall[i] = (fgbJkData[i]  * Math.random()).toFixed(2);
        }
        optionFgbJk.series[0].data=tmp;
        optionFgbJk.series[1].data=tmpall;
        subcharts1.setOption(optionFgbJk); 
    }
}



//分国别出口煤炭当月数量
var tmpCkGbData = [
                {name:'乌克兰',value:4.53},
                {name:'伊朗',value:3.98},
                {name:'俄罗斯联邦',value:0.01},
                {name:'南非',value:3.3},
                {name:'印度',value:12.84},
                {name:'印度尼西亚',value:0.13},
                {name:'台湾',value:2.31},
                {name:'哈萨克斯坦',value:0.77},
                {name:'埃及',value:0},
                {name:'孟加拉国',value:0.1},
                {name:'巴基斯坦',value:0.02},
                {name:'巴西',value:7.06},
                {name:'新西兰',value:0.04},
                {name:'日本',value:26.25},
                {name:'朝鲜',value:0.65},
                {name:'格林纳达',value:0},
                {name:'沙特阿拉伯',value:0.08},
                {name:'泰国',value:0.08},
                {name:'澳大利亚',value:1.05},
                {name:'缅甸',value:0.07},
                {name:'老挝',value:0.12},
                {name:'西班牙',value:4.95},
                {name:'越南',value:1.73},
                {name:'阿尔及利亚',value:4.95},
                {name:'阿曼',value:2.06},
                {name:'阿联酋',value:0.05},
                {name:'韩国',value:19.02},
                {name:'马来西亚',value:1.47},
                {name:'马达加斯加',value:0.01}
            ];
var ckGbData = [
                {name:'乌克兰',value:4.53},
                {name:'伊朗',value:3.98},
                {name:'俄罗斯联邦',value:0.01},
                {name:'南非',value:3.3},
                {name:'印度',value:12.84},
                {name:'印度尼西亚',value:0.13},
                {name:'台湾',value:2.31},
                {name:'哈萨克斯坦',value:0.77},
                {name:'埃及',value:0},
                {name:'孟加拉国',value:0.1},
                {name:'巴基斯坦',value:0.02},
                {name:'巴西',value:7.06},
                {name:'新西兰',value:0.04},
                {name:'日本',value:26.25},
                {name:'朝鲜',value:0.65},
                {name:'格林纳达',value:0},
                {name:'沙特阿拉伯',value:0.08},
                {name:'泰国',value:0.08},
                {name:'澳大利亚',value:1.05},
                {name:'缅甸',value:0.07},
                {name:'老挝',value:0.12},
                {name:'西班牙',value:4.95},
                {name:'越南',value:1.73},
                {name:'阿尔及利亚',value:4.95},
                {name:'阿曼',value:2.06},
                {name:'阿联酋',value:0.05},
                {name:'韩国',value:19.02},
                {name:'马来西亚',value:1.47},
                {name:'马达加斯加',value:0.01}
            ];
var optionCkGb = {
    title : {
        text: '分国别出口煤炭当月数量(万吨)',
        x:'left'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{b}<br/>{c} ({d}%)",
    },
    legend: {
        x:20,
        y:40,
        itemGap:3,
        orient:'vertical',
        data:['乌克兰','伊朗','俄罗斯联邦','南非','印度','印度尼西亚','台湾','哈萨克斯坦','埃及','孟加拉国','巴基斯坦','巴西','新西兰','日本','朝鲜','格林纳达','沙特阿拉伯','泰国','澳大利亚','缅甸','老挝','西班牙','越南','阿尔及利亚','阿曼','阿联酋','韩国','马来西亚','马达加斯加'],
    },
    calculable : true,
    series : [
        {
            name:'访问来源',
            type:'pie',
            radius : '70%',
            center: ['70%', '50%'],
            itemStyle : {
                normal : {
                    label : {
                        show : false
                    },
                    labelLine : {
                        show : false
                    }
                }
            },
            data:[]
        }
    ]
};
//全国分煤种出口煤炭数量（万吨）
var mzCkData = [0,24.92,61.3,13.8,33.79];
var optionCkMz = {
    title : {
        text: '全国分煤种出口煤炭数量(万吨)'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['合计','其它烟煤','焦炭','炼焦烟煤','无烟煤'],
        x:'center',
        y:'bottom' 
    },
    grid:{
    x:40,
    y:50,
    x2:10,
    y2:90
  	},
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['2014/3','2014/4','2014/5','2014/6','2014/7','2014/8','2014/9','2014/10','2014/11','2014/12','2015/1','2015/2','2015/3','2015/4','2015/5']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'合计',
            type:'bar',
            barCategoryGap:20,
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
            name:'其它烟煤',
            type:'line',
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
            name:'焦炭',
            type:'line',
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
            name:'炼焦烟煤',
            type:'line',
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
            name:'无烟煤',
            type:'line',
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
};
//全国分煤种出口煤炭均价（美元/吨）
var mzCkJjData = [104.56,239.99,115.17,154.15];
var optionCkMzJj = {
    title : {
        text: '全国分煤种出口煤炭均价(美元/吨)'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['其它烟煤','焦炭','炼焦烟煤','无烟煤'],
        x:'center',
        y:'bottom' 
    },
    grid:{
    x:40,
    y:50,
    x2:10,
    y2:90
  	},
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['2014/3','2014/4','2014/5','2014/6','2014/7','2014/8','2014/9','2014/10','2014/11','2014/12','2015/1','2015/2','2015/3','2015/4','2015/5']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'其它烟煤',
            type:'line',
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
            name:'焦炭',
            type:'line',
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
            name:'炼焦烟煤',
            type:'line',
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
            name:'无烟煤',
            type:'line',
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
};
//中国煤炭出口前三国(万吨)
var ckTop3Data = [52.62,22.05,17.17];
var optionCkTop3 = {
    title : {
        text: '中国煤炭出口前三国(万吨)'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['日本','韩国','印度'],
        x:'center',
        y:'bottom' 
    },
    grid:{
    x:40,
    y:50,
    x2:10,
    y2:90
  	},
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : ['2014/3','2014/4','2014/5','2014/6','2014/7','2014/8','2014/9','2014/10','2014/11','2014/12','2015/1','2015/2','2015/3','2015/4','2015/5']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'日本',
            type:'line',
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
            name:'韩国',
            type:'line',
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
            name:'印度',
            type:'line',
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
};

var chartGbCk,chartMzCk,chartMzCkJj,chartCkTop3;
function creatCkChart(){
    $("#jingkou").hide();
    $("#chukou").show();
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
            chartGbCk = ec.init(document.getElementById('chart_gbCk'),e_macarons);
            // 过渡---------------------
            chartGbCk.showLoading({
                text: '正在努力的读取数据中...', //loading话术
            });
            chartGbCk.hideLoading();      
            // 为echarts对象加载数据 
            optionCkGb.series[0].data=ckGbData;
            chartGbCk.setOption(optionCkGb);      
            
            
            chartMzCk = ec.init(document.getElementById('chart_mzCk'),e_macarons);
            // 过渡---------------------
            chartMzCk.showLoading({
                text: '正在努力的读取数据中...', //loading话术
            });
            chartMzCk.hideLoading();      
            // 为echarts对象加载数据 
            
            for(var i = 1;i<5;i++){
                var tmpCkData = new Array();
                
                for(var j = 0;j<15;j++){
                    tmpCkData.push((mzCkData[i]  * (Math.random()*0.8+0.4)).toFixed(2));
                }
                optionCkMz.series[i].data=tmpCkData;
            }
            var total = new Array();
             for(var i = 0;i<15;i++){
                 var tmpValue = 0;
                  for(var j = 1;j<5;j++){
                      tmpValue = tmpValue + parseFloat(optionCkMz.series[j].data[i]);
                  }
                 total.push(tmpValue.toFixed(2));
             }
            optionCkMz.series[0].data=total;
            chartMzCk.setOption(optionCkMz);      


            chartMzCkJj = ec.init(document.getElementById('chart_mzCkJj'),e_macarons);
            // 过渡---------------------
            chartMzCkJj.showLoading({
                text: '正在努力的读取数据中...', //loading话术
            });
            chartMzCkJj.hideLoading();      
            // 为echarts对象加载数据 
            
            for(var i = 0;i<4;i++){
                var tmpCkJjData = new Array();
                
                for(var j = 0;j<15;j++){
                    tmpCkJjData.push((mzCkJjData[i]  * (Math.random()*0.4+0.8)).toFixed(2));
                }
                optionCkMzJj.series[i].data=tmpCkJjData;
            }
            chartMzCkJj.setOption(optionCkMzJj); 
            
            
            chartCkTop3 = ec.init(document.getElementById('chart_cktop3'),e_macarons);
            // 过渡---------------------
            chartCkTop3.showLoading({
                text: '正在努力的读取数据中...', //loading话术
            });
            chartCkTop3.hideLoading();      
            // 为echarts对象加载数据 
            
            for(var i = 0;i<3;i++){
                var tmpTop3Data = new Array();
                
                for(var j = 0;j<15;j++){
                    tmpTop3Data.push((ckTop3Data[i]  * (Math.random()*0.8+0.4)).toFixed(2));
                }
                optionCkTop3.series[i].data=tmpTop3Data;
            }
            chartCkTop3.setOption(optionCkTop3); 
        }
    );
}

function changeDate2(){
    for(var i=0;i<ckGbData.length;i++){
        tmpCkGbData[i].value = (ckGbData[i].value  * (Math.random()*0.8+0.4)).toFixed(2);
    }
    optionCkGb.series[0].data=tmpCkGbData;
    chartGbCk.clear();
    chartGbCk.setOption(optionCkGb);  
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
        if(chartGbCk != undefined){
            chartGbCk.resize();
        }
        if(chartMzCk != undefined){
            chartMzCk.resize();
        }
        if(chartMzCkJj != undefined){
            chartMzCkJj.resize();
        }
        if(chartCkTop3 != undefined){
            chartCkTop3.resize();
        }
    }
},200);

