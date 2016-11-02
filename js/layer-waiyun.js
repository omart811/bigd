$('#parentIframe').on('click', function(){

    layer.open({
        type: 2,
        title: '内蒙古数据外运量统计',
        maxmin: true,
        shadeClose: true, //点击遮罩关闭层
        area : ['800px' , '460px'],
        content: 'float-data.html'
    });

    
});
$('#parentIframe1').on('click', function(){

    layer.open({
        type: 2,
        title: '山西外运量统计',
        maxmin: true,
        shadeClose: true, //点击遮罩关闭层
        area : ['800px' , '460px'],
        content: 'float-data.html'
    });

    
});