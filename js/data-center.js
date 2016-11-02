
	var ctx = '';

	$(document).ready(function() {
		$('.first-menu').removeClass('active');
		$('.second-menu').removeClass('active');
		$('a>span.selected').remove();
		var flag = $('body').attr('flag');
		var $curpage = $('.menu-' + flag);
		$curpage.addClass('active');
		if ($curpage.hasClass('second-menu')) {
			$curpage.parent().parent().addClass('active');
			$curpage.parent().parent().find('a:eq(0)').append('<span class="selected"></span>');
			return;
		}
		if($curpage.hasClass('first-menu')) {
			$curpage.find('a:eq(0)').append('<span class="selected"></span>');
		}
		
	});
var menuid = "";
		
		if(!menuid){
			menuid="2";
		}
		$(document).ready(function() {

			//默认展开第一个菜单组
			$('.sidebar-menu').children().trigger('click');
			if (menuid) {
				//默认选中上一次选中的二级菜单
				
				$('#menutab_' + menuid).trigger('click');
				$('#menu_' + menuid).addClass('active');
				$('#img_' + menuid).attr('src', ctx + 'images/dian_over.png');
				$('#menutab_' + menuid).css('background-color', '#fff').css('color', 'red');
			} else {
				//默认选中第一个菜单组中的第一个子菜单
				$('.sidebar-menu ul:first li:first a i img').attr('src', ctx + 'images/dian_over.png');
				$('.sidebar-menu ul:first li:first a').css('background-color', '#fff').css('color', 'red');
			}
			//注册二级菜单点击事件
			$('.sidebar-menu ul a').click(function() {
				//将上一次点击的二级菜单背景色复原
				if (menuid) {
					//如果menuid具备有效值，则直接通过menuid定位元素，恢复其背景色
					$('#menutab_' + menuid).css('background-color', '#f6f6f6').css('color', '#000');
					$('#img_' + menuid).attr('src', ctx + 'images/dian.png');
					menuid =null;
				} else {
					//如果menuid不具备有效值，则通过class="active"定位元素，恢复其背景色
					$($('.sidebar-menu ul li.active a')[0]).css('background-color', '#f6f6f6').css('color', '#000');
					$($('.sidebar-menu ul li.active a i img')[0]).attr('src', ctx + 'images/dian.png');
				}
				
				$('.sidebar-menu ul li.active').removeClass("active");
				//更改当前点击超链接的背景色为白色，更改字体颜色为红色，更改图表为红色
				$(this).addClass("active").css('background-color', '#fff').css('color', 'red');
				$($(this).children()[0].children[0]).attr('src', ctx + 'images/dian_over.png');
			})

		});

var bodydom = $("body");
	var bodyflag = $("body").attr("flag");
	var pageContent = $(".page-content");
	var footer1 = "";//不带导航栏
	var footer2 = "";
	
	$(document).ready(function(){
		
		footer2+="<div class='footer' >";
		footer2+="<div class='row'style='color: white' >";
		footer2+="<div class='col-md-12'style='text-align: center;' >";
		footer2+="&nbsp;&nbsp;&nbsp; <a href='http://www.miibeian.gov.cn' target='_blank' >蒙ICP备123456号</a>";
		footer2+="</div>"
		footer2+="</div></div>";
		bodydom.append(footer2);
		if(bodyflag=='dashboard'||bodyflag=='dataResource'||bodyflag=='price'||bodyflag=='market'){
			pageContent.append("<div id='marqueeContainer' style='margin-bottom: -10px;'></div>");
			createMarquee1();
			
		}else{
// 			footer1+="<div class='footer' style='padding: 8px 0px 5px 0px'>";
// 			footer1+="<div class='row' style='text-align: center;color: white'>";
// 			footer1+=" 2015 &copy; 无锡蓝河科技有限公司 ";
// 			footer1+="</div></div>";
// 			bodydom.append(footer1);
		}
	});
	function downloadFun(){
		window.location.href=ctx+"/aboutUs/download";
		$("#download").modal('hide'); 
		 
	}
