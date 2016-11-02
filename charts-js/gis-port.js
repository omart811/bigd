//地图的初始化
var map = new BMap.Map("gisPosition");
map.centerAndZoom(new BMap.Point(119.648202,39.935094),7); 
map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
// 添加带有定位的导航控件
  var navigationControl = new BMap.NavigationControl({
    // 靠左上角位置
    anchor: BMAP_ANCHOR_TOP_LEFT,
    // LARGE类型
    type: BMAP_NAVIGATION_CONTROL_LARGE,
    // 启用显示定位
    enableGeolocation: true
  });
  map.addControl(navigationControl);

var point = new BMap.Point(119.648202,39.935094);
var marker = new BMap.Marker(point); // 创建标注
map.addOverlay(marker); // 将标注添加到地图中

var point1 = new BMap.Point(118.846556,39.42651);
var marker1 = new BMap.Marker(point1); // 创建标注
map.addOverlay(marker1); // 将标注添加到地图中

var point2 = new BMap.Point(121.051159,40.822559);
var marker2 = new BMap.Marker(point2); // 创建标注
map.addOverlay(marker2); // 将标注添加到地图中

var point3 = new BMap.Point(117.290442,34.209719);
var marker3 = new BMap.Marker(point3); // 创建标注
map.addOverlay(marker3); // 将标注添加到地图中

var point4 = new BMap.Point(119.562259,35.386652);
var marker4 = new BMap.Marker(point4); // 创建标注
map.addOverlay(marker4); // 将标注添加到地图中

var point5 = new BMap.Point(120.824979,32.012635);
var marker5 = new BMap.Marker(point5); // 创建标注
map.addOverlay(marker5); // 将标注添加到地图中

var point6 = new BMap.Point(119.014399,39.228383);
var marker6 = new BMap.Marker(point6); // 创建标注
map.addOverlay(marker6); // 将标注添加到地图中

var point7 = new BMap.Point(118.465317,39.090763);
var marker7 = new BMap.Marker(point7); // 创建标注
map.addOverlay(marker7); // 将标注添加到地图中

var point8 = new BMap.Point(117.779378,38.22794);
var marker8 = new BMap.Marker(point8); // 创建标注
map.addOverlay(marker8); // 将标注添加到地图中

var points = [point,point1,point2,point3,point4,point5,point6,point7,point8];
var markers = [marker,marker1,marker2,marker3,marker4,marker5,marker6,marker7,marker8];
var markersName = ['秦皇岛港','京唐港','锦州港','徐州港','日照港','南通港','唐山港','连云港','曹妃甸港','天津港'];

var markersNameUrl = ['float-data2-pos2.1.html','float-data2-pos2.2.html','float-data2-pos2.3.html','float-data2-pos2.4.html','float-data2-pos1.2.html','float-data2-pos1.2.html','float-data2-pos1.2.html','float-data2.html-pos2.8','float-data2-pos2.9.html','float-data2-pos2.10.html'];

var myCharts = new Array();
var markers = [marker,marker1,marker2,marker3,marker4,marker5,marker6,marker7,marker8];

for(var i = 0; i < 9 ; i++){
        var marker = markers[i];
        marker.name = markersNameUrl[i]
        marker.addEventListener("click", function(e){    
                        layer.open({
                            type: 2,
                            title: '外运量统计',
                            maxmin: true,
                            shadeClose: true, //点击遮罩关闭层
                            area : ['800px' , '460px'],
                            content: this.name
                    });
            });
    }
//移动到下一个点的代码

function getDataList(flg){
    if(flg == 1){
                var list = [];
                for (var i = 1; i <= 30; i++) {
                    list.push(Math.round(Math.random()* 30));
                }
                return list;        
    }else{
                var list = [];
                for (var i = 1; i <= 30; i++) {
                    list.push(Math.round(Math.random()* 10));
                }
                return list;        
    }
}

var data0 = [
    [[130, 133, 101, 134, 90, 330, 310],[330, 183, 191, 334, 390, 330, 310],[150, 333, 301, 154, 190, 330, 410]],
    [[150, 555, 505, 554, 90, 550, 550],[550, 585, 595, 554, 590, 550, 550],[550, 555, 505, 554, 590, 550, 450]],
    [[220, 222, 202, 224, 90, 220, 220],[220, 282, 292, 224, 290, 220, 220],[250, 222, 202, 254, 290, 220, 420]],
    [[550, 222, 202, 224, 90, 220, 220],[110, 181, 191, 114, 190, 110, 110],[150, 111, 101, 154, 190, 110, 410]],
    [[150, 111, 501, 114, 90, 150, 150],[150, 181, 191, 114, 190, 150, 150],[150, 111, 501, 154, 190, 150, 450]],
    [[130, 111, 301, 114, 90, 130, 130],[130, 181, 191, 114, 190, 130, 130],[150, 111, 301, 154, 190, 130, 430]],
    [[220, 221, 251, 224, 90, 220, 220],[220, 181, 191, 224, 190, 220, 220],[150, 221, 251, 154, 190, 220, 425]],
    [[120, 121, 251, 124, 90, 120, 120],[120, 181, 191, 124, 190, 120, 120],[150, 121, 251, 154, 190, 120, 425]],
    [[120, 181, 251, 184, 90, 180, 180],[180, 181, 191, 184, 190, 180, 180],[150, 181, 251, 154, 190, 180, 425]],
    [[200, 201, 251, 204, 90, 200, 200],[200, 181, 191, 204, 190, 200, 200],[150, 201, 251, 154, 190, 200, 425]],
    [[250, 251, 251, 254, 90, 250, 250],[250, 181, 191, 254, 190, 250, 250],[150, 251, 251, 154, 190, 250, 425]],
    [[125, 111, 251, 114, 90, 125, 125],[125, 181, 191, 114, 190, 125, 125],[150, 111, 251, 154, 190, 125, 475]],
    [[175, 111, 751, 114, 90, 175, 175],[175, 181, 191, 114, 190, 175, 175],[150, 111, 751, 154, 190, 175, 475]],
    [[140, 111, 401, 114, 90, 140, 140],[140, 181, 191, 114, 190, 140, 140],[150, 111, 401, 154, 190, 140, 460]],
    [[160, 111, 601, 114, 90, 160, 160],[160, 181, 191, 114, 190, 160, 160],[150, 111, 601, 154, 190, 160, 455]],
    [[155, 111, 551, 114, 90, 155, 155],[155, 181, 191, 114, 190, 155, 155],[150, 111, 551, 154, 190, 155, 455]],
    [[155, 111, 551, 114, 90, 155, 155],[155, 181, 191, 114, 190, 155, 155],[150, 111, 551, 154, 190, 155, 455]],
    [[140, 111, 401, 114, 90, 140, 140],[140, 181, 191, 114, 190, 140, 140],[150, 111, 401, 154, 190, 140, 410]]
];

var data1 = [
    [{value : [17, 42, 66, 94, 90, 66],name : '进入'},{value : [97, 32, 74, 95, 66, 92],name : '出港'}],
    [{value : [27, 42, 55, 94, 90, 56],name : '进入'},{value : [97, 32, 74, 95, 55, 92],name : '出港'}],
    [{value : [37, 42, 54, 94, 90, 46],name : '进入'},{value : [97, 32, 74, 95, 44, 92],name : '出港'}],
    [{value : [47, 42, 33, 94, 90, 36],name : '进入'},{value : [97, 32, 74, 95, 33, 92],name : '出港'}],
    [{value : [57, 42, 22, 94, 90, 26],name : '进入'},{value : [97, 32, 74, 95, 22, 92],name : '出港'}],
    [{value : [67, 42, 77, 94, 90, 76],name : '进入'},{value : [97, 32, 74, 95, 77, 92],name : '出港'}],
    [{value : [77, 42, 66, 94, 90, 66],name : '进入'},{value : [97, 32, 74, 95, 66, 92],name : '出港'}],
    [{value : [57, 42, 55, 94, 90, 56],name : '进入'},{value : [97, 32, 74, 95, 58, 92],name : '出港'}],
    [{value : [97, 42, 88, 94, 90, 86],name : '进入'},{value : [97, 32, 74, 95, 83, 92],name : '出港'}],
    [{value : [37, 42, 33, 94, 90, 36],name : '进入'},{value : [97, 32, 74, 95, 34, 92],name : '出港'}],
    [{value : [77, 42, 44, 94, 90, 46],name : '进入'},{value : [97, 32, 74, 95, 47, 92],name : '出港'}],
    [{value : [67, 42, 77, 94, 90, 76],name : '进入'},{value : [97, 32, 74, 95, 72, 92],name : '出港'}],
    [{value : [57, 42, 22, 94, 90, 26],name : '进入'},{value : [97, 32, 74, 95, 22, 92],name : '出港'}],
    [{value : [47, 42, 66, 94, 90, 66],name : '进入'},{value : [97, 32, 74, 95, 66, 92],name : '出港'}],
    [{value : [37, 42, 99, 94, 90, 96],name : '进入'},{value : [97, 32, 74, 95, 99, 92],name : '出港'}],
    [{value : [27, 42, 11, 94, 90, 16],name : '进入'},{value : [97, 32, 74, 95, 11, 92],name : '出港'}],
    [{value : [17, 42, 14, 94, 90, 46],name : '进入'},{value : [97, 32, 74, 95, 44, 92],name : '出港'}],
    [{value : [97, 42, 88, 94, 90, 86],name : '进入'},{value : [97, 32, 74, 95, 88, 92],name : '出港'}],
    
];


var dataTemp = [
    [{value: 30, name: '港存比例'}],
    [{value: 20, name: '港存比例'}],
    [{value: 34, name: '港存比例'}],
    [{value: 14, name: '港存比例'}],
    [{value: 23, name: '港存比例'}],
    [{value: 80, name: '港存比例'}],
    [{value: 50, name: '港存比例'}],
    [{value: 62, name: '港存比例'}],
    [{value: 40, name: '港存比例'}],
    [{value: 80, name: '港存比例'}],
    [{value: 60, name: '港存比例'}],
    [{value: 80, name: '港存比例'}],
    [{value: 10, name: '港存比例'}],
    [{value: 50, name: '港存比例'}],
    [{value: 70, name: '港存比例'}],
    [{value: 20, name: '港存比例'}],
    [{value: 80, name: '港存比例'}],
    [{value: 90, name: '港存比例'}],
                
                
    ];

function showPortInfo(s){
    var marker = markers[s];
                        layer.open({
                            type: 2,
                            title: '外运量统计',
                            maxmin: true,
                            shadeClose: true, //点击遮罩关闭层
                            area : ['800px' , '460px'],
                            content: marker.name
                    });
}
function showPort(s){   
    for(var i = 0 ; i < 9 ; i++){
        var marker = markers[i];
        if(i == s){
            marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
            map.panTo(points[i]); 
            var html = [];
            html.push('<strong>我的位置:</strong><br /><br />');
            html.push('<b>'+ markersName[i-1] +'</b>');
            var opts = {enableMessage:false,width:0, height:0}
            var info_Window = new BMap.InfoWindow(html.join(""), opts);
            marker.openInfoWindow(info_Window);    
        }else{
            marker.setAnimation(""); //删除跳动的动画
        }
    }
    
    for(var j = 0; j < 10,j < myCharts.length; j++){
               var myChart = myCharts[j];
                if(j == 2){
                   option6.series[0].data = data1[s-1];
                    myChart.setOption(option6);
                    j++;
                    myChart = myCharts[j];
                    var maxData = getDataList(1);
                    var minData = getDataList(2);
                    option2.series[0].data = maxData;
                    option2.series[1].data = minData;
                    myChart.setOption(option2);
                }else{
                    option5.series[0].data = dataTemp[s-1];
                    myChart.setOption(option5);
                    j++;
                    myChart = myCharts[j];
                    
                    var list1 = [];
                    for (var i = 1; i <= 30; i++) {
                        list1.push(Math.round(Math.random()*12));
                    }
                    var list2 = [];
                    for (var i = 1; i <= 30; i++) {
                        list2.push(Math.round(Math.random()*12));
                    }
                    option1.series[0].data = list1;
                    option1.series[1].data = list2;
                    myChart.setOption(option1);
                }
                
            }
}
function moveto(){
    map.panTo(point);
}

option6 = {
    title : {
        text: '港口出入',
        subtext: '煤港库存'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        x : 'center',
        data:['进','出']
    },
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    polar : [
        {
            indicator : [
                {text : '1号煤仓', max  : 100},
                {text : '2号煤仓', max  : 100},
                {text : '3号煤仓', max  : 100},
                {text : '4号煤仓', max  : 100},
                {text : '5号煤仓', max  : 100},
                {text : '6号煤仓', max  : 100}
            ],
            radius : 130
        }
    ],
    
    series : [
        {
            name: '进出数据',
            type: 'radar',
            itemStyle: {
                normal: {
                    areaStyle: {
                        type: 'default'
                    }
                }
            },
            data : [
                {
                    value : [97, 42, 88, 94, 90, 86],
                    name : '今日进入量'
                },
                {
                    value : [97, 32, 74, 95, 88, 92],
                    name : '昨日进入量'
                }
                
            ]
        }
    ]
};
         

//折线图图表部分
option1 = {
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['调入煤炭量','调出煤炭量']
    },
    grid:{
    x:1,
    y:1,
    x2:1,
    y2:1
  },
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataZoom : {show: true},
            dataView : {show: true},
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    dataZoom : {
        show : true,
        realtime : true,
        start : 20,
        end : 80
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            data : function (){
                var list = [];
                for (var i = 1; i <= 30; i++) {
                    list.push('2015-05-' + i);
                }
                return list;
            }()
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'调入煤炭量',
            type:'line',
            data:function (){
                var list = [];
                for (var i = 1; i <= 30; i++) {
                    list.push(Math.round(Math.random()* 12));
                }
                return list;
            }(),
            smooth:true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        shadowColor : 'rgba(0,0,0,0.8)'
                    }
                }
            }
        },
        {
            name:'调出煤炭量',
            type:'line',
            data:function (){
                var list = [];
                for (var i = 1; i <= 30; i++) {
                    list.push(Math.round(Math.random()* 10));
                }
                return list;
            }(),
            smooth:true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        shadowColor : 'rgba(0,0,0,0.8)'
                    }
                }
            }
        }
    ]
};
//图表开始的部分
//gauge图表部分
option5 = {
    tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    series : [
        {
            name:'业务指标',
            type:'gauge',
            detail : {formatter:'{value}%'},
            data:[{value: 50, name: '港存比例'}]
        }
    ]
};

//折线图图表部分
option2 = {
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['库存','最新','进港']
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
    x:1,
    y:1,
    x2:1,
    y2:1
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
            type : 'value'
        }
    ],
    
    series : [
        
        {
            name:'库存',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210],
            smooth:true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        shadowColor : 'rgba(0,0,0,0.8)'
                    }
                }
            }
        },
        {
            name:'最新',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310],
            smooth:true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        shadowColor : 'rgba(0,0,0,0.8)'
                    }
                }
            }
        },
        {
            name:'进港',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410],
            smooth:true,
            itemStyle: {
                normal: {
                    lineStyle: {
                        shadowColor : 'rgba(0,0,0,0.8)'
                    }
                }
            }
        }
        
    ]
};

//图表相关的内容
require.config({
    paths: {
        "echarts": 'echarts-2.2.1/echarts',
        "echarts/chart/map": "echarts-2.2.1/chart/map",
        "echarts/chart/line": "echarts-2.2.1/chart/line",
        "echarts/chart/pie": "echarts-2.2.1/chart/pie",
        "echarts/chart/bar": "echarts-2.2.1/chart/bar",
        "echarts/chart/scatter": "echarts-2.2.1/chart/scatter",
        "echarts/chart/gauge": "echarts-2.2.1/chart/gauge",
         "echarts/chart/stack": "echarts-2.2.1/chart/stack",
         "echarts/chart/tiled": "echarts-2.2.1/chart/tiled",
         "echarts/chart/radar": "echarts-2.2.1/chart/radar"
        
       
    }
});

require(
         [
         'echarts',
         'echarts/chart/bar', // 使用柱状图就加载bar模块，按需加载
         'echarts/chart/line',
          'echarts/chart/pie',
             'echarts/chart/scatter',
             'echarts/chart/gauge',
             'echarts/chart/radar',
             
         ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        myChart1 = ec.init(document.getElementById('charts1'));
        // 过渡---------------------
        myChart1.showLoading({
            text: '正在努力的读取数据中...', //loading话术
        });
        myChart1.hideLoading();
        // 为echarts对象加载数据 
        myChart1.setOption(option5);
        myCharts[0] = myChart1;
    }
);

require(
         [
         'echarts',
         'echarts/chart/bar', // 使用柱状图就加载bar模块，按需加载
         'echarts/chart/line',
          'echarts/chart/pie',
             'echarts/chart/scatter',
             'echarts/chart/gauge'
         ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        myChart2 = ec.init(document.getElementById('charts2'));
        // 过渡---------------------
        myChart2.showLoading({
            text: '正在努力的读取数据中...', //loading话术
        });
        myChart2.hideLoading();
        // 为echarts对象加载数据 
        myChart2.setOption(option1);
        myCharts[1] = myChart2;
    }
);

//使用使用第2个图表


$('#myTab a').mousemove(function (e) {
e.preventDefault();
$(this).tab('show');
showT1(); 
});
$('.dropdown-toggle').dropdown();

//第一个图表和第二个图表写了两遍，如果都写到SHOWT1函数当中，在最初刷新页面的时候就不显示，

function showT1(){
            require(
                 [
                 'echarts',
                 'echarts/chart/bar', // 使用柱状图就加载bar模块，按需加载
                 'echarts/chart/line',
                  'echarts/chart/pie',
                     'echarts/chart/scatter',
                     'echarts/chart/gauge'
                 ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                myChart3 = ec.init(document.getElementById('charts3'));
                // 过渡---------------------
                myChart3.showLoading({
                    text: '正在努力的读取数据中...', //loading话术
                });
                myChart3.hideLoading();
                // 为echarts对象加载数据 
                myChart3.setOption(option6);
                myCharts[2] = myChart3;
            }
        );
        require(
                 [
                 'echarts',
                 'echarts/chart/bar', // 使用柱状图就加载bar模块，按需加载
                 'echarts/chart/line',
                  'echarts/chart/pie',
                     'echarts/chart/scatter',
                     'echarts/chart/gauge'
                 ],
            function (ec) {
                // 基于准备好的dom，初始化echarts图表
                myChart4 = ec.init(document.getElementById('charts4'));
                // 过渡---------------------
                myChart4.showLoading({
                    text: '正在努力的读取数据中...', //loading话术
                });
                myChart4.hideLoading();
                // 为echarts对象加载数据 
                myChart4.setOption(option2);
                myCharts[3] = myChart4;
            }
        );
    
     require(
             [
             'echarts',
             'echarts/chart/bar', // 使用柱状图就加载bar模块，按需加载
             'echarts/chart/line',
              'echarts/chart/pie',
                 'echarts/chart/scatter',
                 'echarts/chart/gauge'
             ],
        function (ec) {
            // 基于准备好的dom，初始化echarts图表
            myChart5 = ec.init(document.getElementById('charts5'));
            // 过渡---------------------
            myChart5.showLoading({
                text: '正在努力的读取数据中...', //loading话术
            });
            myChart5.hideLoading();
            // 为echarts对象加载数据 
            myChart5.setOption(option5);
            myCharts[4] = myChart5;
        }
    );

    require(
             [
             'echarts',
             'echarts/chart/bar', // 使用柱状图就加载bar模块，按需加载
             'echarts/chart/line',
              'echarts/chart/pie',
                 'echarts/chart/scatter',
                 'echarts/chart/gauge'
             ],
        function (ec) {
            // 基于准备好的dom，初始化echarts图表
            myChart6 = ec.init(document.getElementById('charts6'));
            // 过渡---------------------
            myChart6.showLoading({
                text: '正在努力的读取数据中...', //loading话术
            });
            myChart6.hideLoading();
            // 为echarts对象加载数据 
            myChart6.setOption(option1);
            myCharts[5] = myChart6;
        }
    );   
    


    
  require(
         [
         'echarts',
         'echarts/chart/bar', // 使用柱状图就加载bar模块，按需加载
         'echarts/chart/line',
          'echarts/chart/pie',
             'echarts/chart/scatter',
             'echarts/chart/gauge'
         ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        myChart7 = ec.init(document.getElementById('charts7'));
        // 过渡---------------------
        myChart7.showLoading({
            text: '正在努力的读取数据中...', //loading话术
        });
        myChart7.hideLoading();
        // 为echarts对象加载数据 
        myChart7.setOption(option5);
        myCharts[6] = myChart7;
    }
);

require(
         [
         'echarts',
         'echarts/chart/bar', // 使用柱状图就加载bar模块，按需加载
         'echarts/chart/line',
          'echarts/chart/pie',
             'echarts/chart/scatter',
             'echarts/chart/gauge'
         ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        myChart8 = ec.init(document.getElementById('charts8'));
        // 过渡---------------------
        myChart8.showLoading({
            text: '正在努力的读取数据中...', //loading话术
        });
        myChart8.hideLoading();
        // 为echarts对象加载数据 
        myChart8.setOption(option1);
        myCharts[7] = myChart8;
    }
);
  


   
require(
         [
         'echarts',
         'echarts/chart/bar', // 使用柱状图就加载bar模块，按需加载
         'echarts/chart/line',
          'echarts/chart/pie',
             'echarts/chart/scatter',
             'echarts/chart/gauge'
         ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        myChart9 = ec.init(document.getElementById('charts9'));
        // 过渡---------------------
        myChart9.showLoading({
            text: '正在努力的读取数据中...', //loading话术
        });
        myChart9.hideLoading();
        // 为echarts对象加载数据 
        myChart9.setOption(option5);
        myCharts[8] = myChart9;
    }
);

require(
         [
         'echarts',
         'echarts/chart/bar', // 使用柱状图就加载bar模块，按需加载
         'echarts/chart/line',
          'echarts/chart/pie',
        'echarts/chart/scatter',
        'echarts/chart/gauge'
         ],
    function (ec) {
        // 基于准备好的dom，初始化echarts图表
        myChart10 = ec.init(document.getElementById('charts10'));
        // 过渡---------------------
        myChart10.showLoading({
            text: '正在努力的读取数据中...', //loading话术
        });
        myChart10.hideLoading();
        // 为echarts对象加载数据 
        myChart10.setOption(option1);
        myCharts[9] = myChart10;
    }
);
 
    


}


///使用使用第3个图表

//
//        //使用//使用使用第4个图表

setTimeout(function (){
    window.onresize = function () {
        myChart1.resize();
        myChart2.resize();
//        myChart3.resize();
//        myChart4.resize();
//        myChart5.resize();
//        myChart6.resize();
//        myChart7.resize();
//        myChart8.resize();
//        myChart9.resize();
//        myChart10.resize();        
    }
},200)

//图表的大小变化始终与浏览器的窗口一致  

