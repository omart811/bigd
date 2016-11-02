// 百度地图API功能 第一个地图，在各个点之间跳转
var map = new BMap.Map("gisPosition");
map.centerAndZoom(new BMap.Point(116.406261,39.956391),7); 
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

var point = new BMap.Point(116.406261,39.956391);
var marker = new BMap.Marker(point); // 创建标注
map.addOverlay(marker); // 将标注添加到地图中

var point1 = new BMap.Point(116.358021,39.892253);
var marker1 = new BMap.Marker(point1); // 创建标注
map.addOverlay(marker1); // 将标注添加到地图中

var point2 = new BMap.Point(114.530067,38.049377);
var marker2 = new BMap.Marker(point2); // 创建标注
map.addOverlay(marker2); // 将标注添加到地图中

var point3 = new BMap.Point(117.115467,36.66694);
var marker3 = new BMap.Marker(point3); // 创建标注
map.addOverlay(marker3); // 将标注添加到地图中

var point4 = new BMap.Point(112.578737,37.876797);
var marker4 = new BMap.Marker(point4); // 创建标注
map.addOverlay(marker4); // 将标注添加到地图中

var point5 = new BMap.Point(113.72515,34.777298);
var marker5 = new BMap.Marker(point5); // 创建标注
map.addOverlay(marker5); // 将标注添加到地图中

var point6 = new BMap.Point(113.176913,40.04323);
var marker6 = new BMap.Marker(point6); // 创建标注
map.addOverlay(marker6); // 将标注添加到地图中

var point7 = new BMap.Point(112.975821,36.447973);
var marker7 = new BMap.Marker(point7); // 创建标注
map.addOverlay(marker7); // 将标注添加到地图中

var point8 = new BMap.Point(112.909651,35.55175);
var marker8 = new BMap.Marker(point8); // 创建标注
map.addOverlay(marker8); // 将标注添加到地图中




//港口的位置点
var point9 = new BMap.Point(119.648202,39.935094);
var marker9 = new BMap.Marker(point9); // 创建标注
map.addOverlay(marker9); // 将标注添加到地图中

var point10 = new BMap.Point(118.846556,39.42651);
var marker10 = new BMap.Marker(point10); // 创建标注
map.addOverlay(marker10); // 将标注添加到地图中

var point11 = new BMap.Point(121.051159,40.822559);
var marker11 = new BMap.Marker(point11); // 创建标注
map.addOverlay(marker11); // 将标注添加到地图中

var point12 = new BMap.Point(117.290442,34.209719);
var marker12 = new BMap.Marker(point12); // 创建标注
map.addOverlay(marker12); // 将标注添加到地图中

var point13 = new BMap.Point(119.562259,35.386652);
var marker13 = new BMap.Marker(point13); // 创建标注
map.addOverlay(marker13); // 将标注添加到地图中

var point14 = new BMap.Point(120.824979,32.012635);
var marker14 = new BMap.Marker(point14); // 创建标注
map.addOverlay(marker14); // 将标注添加到地图中

var point15 = new BMap.Point(119.014399,39.228383);
var marker15 = new BMap.Marker(point15); // 创建标注
map.addOverlay(marker15); // 将标注添加到地图中

var point16 = new BMap.Point(119.226764,34.604164);
var marker16 = new BMap.Marker(point16); // 创建标注
map.addOverlay(marker16); // 将标注添加到地图中

var point17 = new BMap.Point(118.465317,39.090763);
var marker17 = new BMap.Marker(point17); // 创建标注
map.addOverlay(marker17); // 将标注添加到地图中

var point18 = new BMap.Point(117.779378,38.22794);
var marker18 = new BMap.Marker(point18); // 创建标注
map.addOverlay(marker18); // 将标注添加到地图中


//设置不同的移动的点，针对上面的三个按钮
var points = [point,point1,point2,point3,point4,point5,point6,point7,point8,point9,point10,point11,point12,point13,point14,point15,point16,point17,point18];

var markers = [marker,marker1,marker2,marker3,marker4,marker5,marker6,marker7,marker8,marker9,marker10,marker11,marker12,marker13,marker14,marker15,marker16,marker17,marker18];

var markersName = ['神华集团有限责任公司','山西焦煤集团有限责任公司','冀中能源集团有限责任公司','山东能源集团有限公司','晋能有限责任公司','河南能源化工集团有限公司','大同煤矿集团有限责任公司','山西潞安矿业（集团）有限责任公司','山西晋城无烟煤矿业集团有限责任公司','秦皇岛港','京唐港','锦州港','徐州港','日照港','南通港','唐山港','连云港','曹妃甸港','天津港 '];

var markersNameUrl = ['float-data2-pos1.1.html','float-data2-pos1.2.html','float-data2-pos1.3.html','float-data2-pos1.4.html','float-data2-pos1.5.html','float-data2-pos1.6.html','float-data2-pos1.7.html','float-data2.html-pos1.8','float-data2-pos1.9.html','float-data2-pos2.1.html','float-data2-pos2.2.html','float-data2-pos2.3.html','float-data2-pos2.4.html','float-data2-pos1.2.html','float-data2-pos1.2.html','float-data2-pos1.2.html','float-data2.html-pos2.8','float-data2-pos2.9.html','float-data2-pos2.10.html'];

for(var i = 0; i < 19 ; i++){
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


//在各个点之间切换的代码

function showposi(index,name){
    for(var i = 0; i < 19 ; i++){
        var marker = markers[i];
        if(i == index){
            marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
            map.panTo(points[i]); 
            var html = [];
            html.push('<strong>我的位置:</strong><br /><br />');
            html.push(name);
            var opts = {enableMessage:false,width:0, height: 0}
            var info_Window = new BMap.InfoWindow(html.join(""), opts);
            marker.openInfoWindow(info_Window);    
        }else{
            marker.setAnimation(""); //删除跳动的动画
        }
    }
}

