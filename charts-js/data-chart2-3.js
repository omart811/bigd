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
                    
                    

// 路径配置
        require.config({
            paths: {
                 "echarts":'echarts-2.2.1/echarts',
					"echarts/chart/map" : "echarts-2.2.1/chart/map",
					"echarts/chart/line": "echarts-2.2.1/chart/line",
					"echarts/chart/pie" : "echarts-2.2.1/chart/pie",
					"echarts/chart/bar" : "echarts-2.2.1/chart/bar"
            }
        });
 
        //使用
        require(
         [
         'echarts',
         'echarts/chart/bar', // 使用柱状图就加载bar模块，按需加载
         'echarts/chart/line',
          'echarts/chart/pie'   
         ],
         function(ec){
          // 基于准备好的dom，初始化echarts图表
                myChart = ec.init(document.getElementById('data-echart2-3')); 
                // 过渡---------------------
                myChart.showLoading({
                    text: '正在努力的读取数据中...',    //loading话术
                });
                myChart.hideLoading();

        window.onresize = myChart.resize; 
        // 为echarts对象加载数据 
        myChart.setOption(option3);
    }
);

//首先要遍历一个数据里面的每一个选项，然后让所有的选项都与windows.onresize 匹配，达到最终的效果
//window.onresize = function(){
//    log(_mychartsArray.length)
//    for (var i = 1; i < _mychartsArray.length; i++){
//        _mychartsArray[i].resize && _mychartsArray[i].resize();
//    }
//}




