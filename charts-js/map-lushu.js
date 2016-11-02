var lushuMap = new Array();
var ispause = false;

var poi1=new Array(); 
poi1[0]="联邦大厦"; 
poi1[1]="华研物流"; 
poi1[2]="铁牛大酒店";
poi1[3]="东联中学";
poi1[4]="区政府";

var map = new BMap.Map('map_canvas');
	map.enableScrollWheelZoom();
	map.centerAndZoom(new BMap.Point(109.989255,39.827068), 13);
	var lushu;
	// 实例化一个驾车导航用来生成路线
	var drv = new BMap.DrivingRoute('鄂尔多斯市', {
		onSearchComplete: function(res) {
			if (drv.getStatus() == BMAP_STATUS_SUCCESS) {
				var arrPois = res.getPlan(0).getRoute(0).getPath();
				map.addOverlay(new BMap.Polyline(arrPois, {strokeColor: '#111'}));
				map.setViewport(arrPois);
				
				lushu = new BMapLib.LuShu(map,arrPois,{
				defaultContent:"内蒙古煤炭交易中心-营运车辆",
				autoView:true,//是否开启自动视野调整，如果开启那么路书在运动过程中会根据视野自动调整
				icon  : new BMap.Icon('images/car.png', new BMap.Size(52,26),{anchor : new BMap.Size(27, 13)}),
				speed: 1500,
				enableRotation:true,//是否设置marker随着道路的走向进行旋转
				landmarkPois: [
				   {lng:109.970997,lat:39.810892,html:'路过要停止',pauseTime:2},
				   {lng:116.315391,lat:39.964429,html:'高速公路收费<div><img src="http://map.baidu.com/img/logo-map.gif"/></div>',pauseTime:3},
				   {lng:116.381476,lat:39.974073,html:'肯德基早餐<div><img src="http://ishouji.baidu.com/resource/images/map/show_pic04.gif"/></div>',pauseTime:2}
				]
                });          
		          lushu.start();
                lushuMap.push(lushu);
			}
		}
	});
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

	//绑定事件
	$("run").onclick = function(){
            map.clearOverlays(); 
            if(lushuMap.length > 0){
                var lusutemp = lushuMap.pop();
                    lusutemp.stop();
            }
        var i = $("driving_way").value;
        if(i == 0){
            drv.search(poi1[0],poi1[1]);
          
        }else if(i == 1){
            drv.search(poi1[0],poi1[2]);
          
        }else if(i == 2){
            drv.search(poi1[0],poi1[3]);
           
        }else if(i == 3){
            drv.search(poi1[0],poi1[4]);

        }
            ispause = false;
	}
	$("stop").onclick = function(){
            if(lushuMap.length > 0){
                var lusutemp = lushuMap.pop();
                lusutemp.stop();
                ispause = false;
            }
	}
	$("pause").onclick = function(){
        if(ispause){
            if(lushuMap.length > 0){
                var lusutemp = lushuMap[0];
                    lusutemp.start();
                ispause = false;
                $("pause").innerHTML = "暂停";
            }
        }else{
            if(lushuMap.length > 0){
                var lusutemp = lushuMap[0];
                lusutemp.pause();
                ispause = true;
                $("pause").innerHTML = "继续";
            }
        }
	}
	$("hide").onclick = function(){
            if(lushuMap.length > 0){
                var lusutemp = lushuMap[0];
                lusutemp.hideInfoWindow();
            }
	}
	$("show").onclick = function(){
            if(lushuMap.length > 0){
                var lusutemp = lushuMap[0];
                lusutemp.showInfoWindow();
            }
	}
	function $(element){
		return document.getElementById(element);
	}