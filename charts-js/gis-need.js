// 百度地图API功能 第一个地图，在各个点之间跳转
var map = new BMap.Map("gisPosition");
map.centerAndZoom(new BMap.Point(112.598903,30.644338),6); 
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

//var point = new BMap.Point(109.92188196491,40.013043097592);
//var marker = new BMap.Marker(point); // 创建标注
//map.addOverlay(marker); // 将标注添加到地图中
//
//var point1 = new BMap.Point(110.04462696878,39.53947311941);
//var marker1 = new BMap.Marker(point1); // 创建标注
//map.addOverlay(marker1); // 将标注添加到地图中
//
//var point2 = new BMap.Point(127.9688,45.368);
//var marker2 = new BMap.Marker(point2); // 创建标注
//map.addOverlay(marker2); // 将标注添加到地图中
//
//var point3 = new BMap.Point(107.1826,34.3433);
//var marker3 = new BMap.Marker(point3); // 创建标注
//map.addOverlay(marker3); // 将标注添加到地图中
//
//var point4 = new BMap.Point(116.8286,38.2104);
//var marker4 = new BMap.Marker(point4); // 创建标注
//map.addOverlay(marker4); // 将标注添加到地图中
//
//var point5 = new BMap.Point(116.521,39.0509);
//var marker5 = new BMap.Marker(point5); // 创建标注
//map.addOverlay(marker5); // 将标注添加到地图中
//
//var point6 = new BMap.Point(120.3442,31.5527);
//var marker6 = new BMap.Marker(point6); // 创建标注
//map.addOverlay(marker6); // 将标注添加到地图中
//
//var point7 = new BMap.Point(112.135266,37.87025);
//var marker7 = new BMap.Marker(point7); // 创建标注
//map.addOverlay(marker7); // 将标注添加到地图中
//
//var point8 = new BMap.Point(121.4648,31.2891);
//var marker8 = new BMap.Marker(point8); // 创建标注
//map.addOverlay(marker8); // 将标注添加到地图中
//
//var point9 = new BMap.Point(121.1023,32.1625);
//var marker9 = new BMap.Marker(point9); // 创建标注
//map.addOverlay(marker9); // 将标注添加到地图中
//
//var point10 = new BMap.Point(108.9734,39.2487);
//var marker10 = new BMap.Marker(point10); // 创建标注
//map.addOverlay(marker10); // 将标注添加到地图中

var allmarkers = new Array();

////0

var markersNamehd = ['华东电网有限公司 ',
			'广东省粤电集团有限公司 ',
			'华电国际电力股份有限公司 ',
			'国网河北省电力公司',
			'中铝宁夏能源集团有限公司 ',
			'广东国华粤电台山发电有限公司 ',
			'国电山东电力有限公司 ',
			'霍州煤电集团有限责任公司 ',
			'国电建投内蒙古能源有限公司 ',
			'绥中发电有限责任公司 ',
			];

var markersNameUrlhd = ['float-data3.html',
			'float-data3.html',
			'float-data3.html',
			'float-data3.html',
			'float-data3.html',
			'float-data3.html',
			'float-data3.html',
			'float-data3.html',
			'float-data3.html',
			'float-data3.html'		
			];

var markersNamegt = ['首钢京唐钢铁联合有限责任公司 ',
				'酒泉钢铁（集团）有限责任公司 ',
				'攀枝花钢铁有限责任公司 ',
				'上海梅山钢铁股份有限公司 ',
				'云南永钢钢铁集团有限公司 ',
				'新疆八钢南疆钢铁拜城有限公司  ',
				'陕钢集团汉中钢铁有限责任公司  ',
				'湖南华菱钢铁股份有限公司  ',
				'云南永钢钢铁集团永昌钢铁有限公司 ',
				'北京首钢股份有限公司 '];

var markersNameUrlgt = ['float-data3.html',
			'float-data3.html',
			'float-data3.html',
			'float-data3.html',
			'float-data3.html',
			'float-data3.html',
			'float-data3.html',
			'float-data3.html',
			'float-data3.html',
			'float-data3.html'];


var markersNamejc = ['北方水泥有限公司 ',
			'葛洲坝集团水泥有限公司 ',
			'山东泉兴中联水泥有限公司 ',
			'四川西南水泥有限公司  ',
			'中材水泥有限责任公司 ',
			'山西山水水泥有限公司 ',
			'山东金晶科技股份有限公司 ',
			'新疆青松建材有限责任公司 ',
			'唐山冀东水泥股份有限公司 ',
			'吉林亚泰水泥有限公司 '];
			
var markersNameUrljc = ['float-data3.html',
			'float-data3.html',
			'float-data3.html',
			'float-data3.html',
			'float-data3.html',
			'float-data3.html',
			'float-data3.html',
			'float-data3.html',
			'float-data3.html',
			'float-data3.html'
                    ];


var markersNamehf = ['湖北宜化松滋肥业有限公司 ',
			'贵州西洋肥业有限公司 ',
			'新疆金圣胡杨化工有限公司',
			'邛崃市鸿丰钾矿肥有限责任公司 ',
			'安徽省司尔特肥业股份有限公司 ',
			'广西河池化工股份有限公司 ',
			'青海文通盐桥化肥有限公司 ',
			'宁夏丰友化工股份有限公司 ',
			'湖北三宁化工股份有限公司 ',
			'沧州大化股份有限公司 '];

var markersNameUrlhf = ['float-data3.html',
			'float-data3.html',
			'float-data3.html',
			'float-data3.html',
			'float-data3.html',
			'float-data3.html',
			'float-data3.html',
			'float-data3.html',
			'float-data3.html',
			'float-data3.html'];

var markersNamelj = ['云南曲靖麒麟煤化工有限公司 ',
				'河北永顺实业集团有限公司 ',
				'拜城县众泰煤焦化有限公司 ',
				'山东盛阳集团有限公司 ',
				'山西茂胜煤化集团有限公司 ',
				'阜康市晋泰实业有限公司 ',
				'柳林县联山煤化有限公司 ',
				'榆林市榆神工业区华航能源有限公司 ',
				'河津市太兴煤焦化工有限公司 ',
				'曲靖大为焦化制供气有限公司 '];

var markersNameUrllj = ['float-data3.html',
			'float-data3.html',
			'float-data3.html',
			'float-data3.html',
			'float-data3.html',
			'float-data3.html',
			'float-data3.html',
			'float-data3.html',
			'float-data3.html',
			'float-data3.html'];
//

//火电增加标注
function createMarkerHd(){
    var markershd = new Array();
    var bounds = map.getBounds();
	var sw = bounds.getSouthWest();
	var ne = bounds.getNorthEast();
	var lngSpan = Math.abs(sw.lng - ne.lng);
	var latSpan = Math.abs(ne.lat - sw.lat);
    for (var i = 0; i < 11; i ++) {
		var point = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.6), ne.lat - latSpan * (Math.random() * 0.6));
		
        var marker = new BMap.Marker(point); // 创建标注
        
         marker.markersNameUrl = markersNameUrlhd[i];
            marker.comname = markersNamehd[i];
        
            marker.addEventListener("click", function(e){    
                            layer.open({
                                type: 2,
                                title: '煤炭库存统计',
                                maxmin: true,
                                shadeClose: true, //点击遮罩关闭层
                                area : ['800px' , '460px'],
                                content: this.markersNameUrl
                        });
                });
        //放入钢铁企业标注的数组中
        markershd.push(marker);

        map.addOverlay(marker); // 将标注添加到地图中

	}

    //把钢铁企业标注的列表放到所有标注的数组中
    allmarkers.push(markershd);
    
}
//钢铁增加标注
function createMarkerGt(){
    var markersgt = new Array();
    var bounds = map.getBounds();
	var sw = bounds.getSouthWest();
	var ne = bounds.getNorthEast();
	var lngSpan = Math.abs(sw.lng - ne.lng);
	var latSpan = Math.abs(ne.lat - sw.lat);
    for (var i = 0; i < 11; i ++) {
		var point = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));
		
        var marker = new BMap.Marker(point); // 创建标注
        
         marker.markersNameUrl = markersNameUrlgt[i];
            marker.comname = markersNamegt[i];
        
            marker.addEventListener("click", function(e){    
                            layer.open({
                                type: 2,
                                title: '煤炭库存统计',
                                maxmin: true,
                                shadeClose: true, //点击遮罩关闭层
                                area : ['800px' , '460px'],
                                content: this.markersNameUrl
                        });
                });
        
        
        //放入电力企业标注的数组中
        markersgt.push(marker);

        map.addOverlay(marker); // 将标注添加到地图中

	}

    allmarkers.push(markersgt);
    
}

//建材增加标注
function createMarkerJc(){
    var markersjc = new Array();
    var bounds = map.getBounds();
	var sw = bounds.getSouthWest();
	var ne = bounds.getNorthEast();
	var lngSpan = Math.abs(sw.lng - ne.lng);
	var latSpan = Math.abs(ne.lat - sw.lat);
    for (var i = 0; i < 11; i ++) {
		var point = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));
        var marker = new BMap.Marker(point); // 创建标注
        
         marker.markersNameUrl = markersNameUrljc[i];
            marker.comname = markersNamejc[i];
        
            marker.addEventListener("click", function(e){    
                            layer.open({
                                type: 2,
                                title: '煤炭库存统计',
                                maxmin: true,
                                shadeClose: true, //点击遮罩关闭层
                                area : ['800px' , '460px'],
                                content: this.markersNameUrl
                        });
                });
        
        
        //放入电力企业标注的数组中
        markersjc.push(marker);

        map.addOverlay(marker); // 将标注添加到地图中
    }

    allmarkers.push(markersjc);
    
}

//建材增加标注
function createMarkerHf (){
    var markershf = new Array();
    var bounds = map.getBounds();
	var sw = bounds.getSouthWest();
	var ne = bounds.getNorthEast();
	var lngSpan = Math.abs(sw.lng - ne.lng);
	var latSpan = Math.abs(ne.lat - sw.lat);
    for (var i = 0; i < 11; i ++) {
		var point = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));
        var marker = new BMap.Marker(point); // 创建标注
        
         marker.markersNameUrl = markersNameUrlhf[i];
            marker.comname = markersNamehf[i];
        
            marker.addEventListener("click", function(e){    
                            layer.open({
                                type: 2,
                                title: '煤炭库存统计',
                                maxmin: true,
                                shadeClose: true, //点击遮罩关闭层
                                area : ['800px' , '460px'],
                                content: this.markersNameUrl
                        });
                });
        
        
        //放入电力企业标注的数组中
        markershf.push(marker);

        map.addOverlay(marker); // 将标注添加到地图中
    }

    allmarkers.push(markershf);
    
}

//建材增加标注
function createMarkerLj(){
    var markerslj = new Array();
    var bounds = map.getBounds();
	var sw = bounds.getSouthWest();
	var ne = bounds.getNorthEast();
	var lngSpan = Math.abs(sw.lng - ne.lng);
	var latSpan = Math.abs(ne.lat - sw.lat);
    for (var i = 0; i < 11; i ++) {
		var point = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));
        var marker = new BMap.Marker(point); // 创建标注
        
         marker.markersNameUrl = markersNameUrllj[i];
            marker.comname = markersNamelj[i];
        
            marker.addEventListener("click", function(e){    
                            layer.open({
                                type: 2,
                                title: '煤炭库存统计',
                                maxmin: true,
                                shadeClose: true, //点击遮罩关闭层
                                area : ['800px' , '460px'],
                                content: this.markersNameUrl
                        });
                });
        
        
        //放入电力企业标注的数组中
        markerslj.push(marker);

        map.addOverlay(marker); // 将标注添加到地图中
    }

    allmarkers.push(markerslj);
    
}





//使用上面的方法，创建地图上的标注
createMarkerHd();
createMarkerGt();
createMarkerJc();
createMarkerHf();
createMarkerLj();



//移动到下一个点的代码
var index = 0;
var re = true;
var mvmarkers;//当前正在移动的这一类标注
function moveto(id){
    //从所有的里面取出当前类别的标注列表，有多个点
    mvmarkers = allmarkers[id];
    //从当前类的标注列表里面取出当前移动到的标注
    var marker = mvmarkers[index];
    //取出当前标注的点坐标
    var point = marker.point;
    //移动到坐标打开窗口
    map.panTo(point);
            var html = [];
            html.push('<strong>我的位置:</strong><br />'+id+'<br />');
            html.push(marker.comname);
            var opts = {enableMessage:false,width : 0, height: 0}
            var info_Window = new BMap.InfoWindow(html.join(""), opts);
    setTimeout(function(){marker.openInfoWindow(info_Window);},20);
    index = index + 1;
    if(index == mvmarkers.length){
        index = 0;
    }
}
//几个控制移动的按钮
var MyInterval1;
var MyInterval2;
var MyInterval3;

function start1(){
    stop();
    removeAnimation();
    MyInterval1 = setInterval (function (){
         moveto(0);
     },2000);
    clearInterval(MyInterval2);
    clearInterval(MyInterval3);
}  

function start2(){
    stop();
    removeAnimation();
    MyInterval2 = setInterval (function (){
         moveto(1);
     },2000);
    clearInterval(MyInterval1);
    clearInterval(MyInterval3);
}  

function start3(){
    stop();
    removeAnimation();
    MyInterval3 = setInterval (function (){
         moveto(2);
     },2000);
    clearInterval(MyInterval1);
    clearInterval(MyInterval2);
}    

function stop(){    
    clearInterval(MyInterval1);
    clearInterval(MyInterval2);
    clearInterval(MyInterval3);
}    
 

var nowMarker;
function showposi(id,index){
    removeAnimation();
    var nowmarkers = allmarkers[id];
    for(var i = 0; i < nowmarkers.length ; i++){
        var marker = nowmarkers[i];
        if(i == index){
            marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
            var ponit = marker.point;
            map.panTo(ponit); 
            var html = [];
            html.push('<strong>我的位置:</strong><br />'+id+'<br />');
            html.push(marker.comname);

            var opts = {enableMessage:false,width : 0, height: 0}
            var info_Window = new BMap.InfoWindow(html.join(""), opts);
            marker.openInfoWindow(info_Window);    
            nowMarker = marker;
        }else{
            marker.setAnimation(""); //删除跳动的动画
        }
    }
}
function removeAnimation(){
    if(nowMarker != undefined){
            nowMarker.setAnimation(""); //删除跳动的动画
    }
}


