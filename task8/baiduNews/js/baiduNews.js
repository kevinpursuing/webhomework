// 设置个人信息跳转功能
$(".back-container span").click(function() {
    $(".wraper").css("display", "block");
    $(".user-info").animate({
        left: "100%"
    }, 300, function() {
        $(".user-info").css("display", "none");
    })
    $(".wraper").animate({
        left: "0"
    }, 300)
})

$(".profile-icon").click(function() {
        $(".user-info").css("display", "block");
        $(".wraper").animate({
            left: "-100%"
        }, 300, function() {
            $(".wraper").css("display", "none");
        })
        $(".user-info").animate({
            left: "0"
        }, 300)
    })
    // 设置搜索及订阅跳转功能
$(".btn-back").click(function() {
    $(".wraper").css("display", "block");
    $(".search-news").animate({
        left: "100%"
    }, 300, function() {
        $(".search-news").css("display", "none");
    })
    $(".wraper").animate({
        left: "0"
    }, 300)
})

$(".search-icon,.subscribe-icon").click(function() {
        $(".search-news").css("display", "block");
        $(".wraper").animate({
            left: "-100%"
        }, 300, function() {
            $(".wraper").css("display", "none");
        })
        $(".search-news").animate({
            left: "0"
        }, 300)
    })
    // 导航栏点击事件
$(".clearfix li").click(function() {
    $(".clearfix li").removeClass("selected");
    $(this).addClass("selected");
    add1();
})

// jquery读取json数据
var obj1 = {
    'newstitle': '苹果发布新一代手机',
    'imgsrc1': 'C:/Users/MacheN1ke/Desktop/webhomework/task8/baiduNews/img/10.jpg',
    'imgsrc2': 'C:/Users/MacheN1ke/Desktop/webhomework/task8/baiduNews/img/4.jpg',
    'imgsrc3': 'C:/Users/MacheN1ke/Desktop/webhomework/task8/baiduNews/img/5.jpg',
    'addtime': '10分钟前'
};

function add1() {
    $(".newslist-container").append( "<div class='index-list-item' style='display: block;'>"+
                // '<a href="#">'+
                '<div class="index-list-main">'+
                    '<div class="index-list-main-text">'+
                        '<div class="index-list-main-title">'+obj1.newstitle+'</div>'+
                    '</div>'+
                    '<div class="index-list-album-container">'+
                        '<div class="index-list-album">'+
                            '<div class="index-list-album-wrapper"><img src="'+obj1.imgsrc1+'"></div>'+'</div>'+
                        '<div class="index-list-album">'+
                            '<div class="index-list-album-wrapper"><img src="'+obj1.imgsrc2+'"></div>'+'</div>'+
                        '<div class="index-list-album">'+
                            '<div class="index-list-album-wrapper"><img src="'+obj1.imgsrc3+'"></div>'+'</div>'+
                    '</div>'+
                    '<div class="index-list-bottom">'+
                        '<div class="index-list-main-time"><b class="tip-time">'+obj1.addtime+'</b><b class="tip-tag" id="tip-strokeblue">Facebook</b>'+
                    '</div>'+
                    '</div>'+
                '</div>'+
                // '</a>'+
            '</div>')
}
