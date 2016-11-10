// jquery 兼容的滚轮事件
$(document).on("mousewheel DOMMouseScroll", function(e) {

    var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || // chrome & ie
        (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1)); // firefox


    if (delta < 0) {
        // 向下滚
        console.log("wheeldown");
        $(".pc-login-message").css("height", "1204px");
    }
});
// 为更多产品模块绑定事件
$("#pc-product").hover(function() {
    $(".more-product").fadeIn(100);
})
$(".more-product").mouseleave(function() {
        $(".more-product").fadeOut(100);
    })
    // 为导航栏天气模块绑定事件
$("#pc-weather,#wea").hover(function() {
    $("#wea").fadeIn(100);
}, function() {
    $("#wea").fadeOut(100);
})

// 为导航栏用户名及设置设定hover事件
$(".user1,.menu1").hover(function() {
    $(".menu1").css("display", "block");
}, function() {
    $(".menu1").css("display", "none");
})

$(".setting1,.menu2").hover(function() {
        $(".menu2").css("display", "block");
    }, function() {
        $(".menu2").css("display", "none");
    })
    // 背景图片模块导航栏hover与click事件
$(".skin-nav").hover(function() {
    $(this).css("background", "#389cff");
    $(this).find(".skinnav-nav-name").css("color", "white");
}, function() {
    $(this).css("background", "white");
    $(this).find(".skinnav-nav-name").css("color", "#666");
})
for (var i = 0; i < 8; i++) {
    $(".s-skin-nav > li:eq(" + i + ")").click(
        (function(i) {
            return function() {
                console.log(i);
                $(".skin-nav").bind('mouseenter mouseleave');
                $(this).unbind('mouseenter mouseleave');
                $(".skin-nav").css("background", "white");
                $(".skin-nav .skinnav-nav-name").css("color", "#666");
                $(this).css("background", "#389cff");
                $(this).find(".skinnav-nav-name").css("color", "white");
                $(".s-skin-content > li:eq(" + i + ")").siblings("li").css("display", "none");
                $(".s-skin-content > li:eq(" + i + ")").css("display", "block");
            }
        })(i)
    );
}
// 背景图片显示事件
$("#face").click(function() {
        $(".s-skin-layer").animate({
                top: "0px",
                opacity: "1"
            },
            800);
    })
    // 背景图片模块收起事件
$(".s-skin-setting").click(function() {
        $(".s-skin-layer").animate({
                top: "-325px",
                opacity: "0"
            },
            800);
    })
    // 图片hover显示预览
$(".skin-img-item").mouseenter(function() {
        var imgsrc = $(this).find('img').attr("src");
        $(".preview-skin-view").attr("src", imgsrc);
    })
    // 图片click设置背景
$(".skin-img-item").click(function() {
        var storage = window.localStorage;
        var imgsrc = $(this).find('img').attr("src");
        $(".wraper-img").css("background-image", "url(" + imgsrc + "s)");
        storage.setItem("pageface", imgsrc);
    })
    // 信息切换事件
for (var i = 0; i < 5; i++) {
    $(".plm-nav > ul > li:eq(" + i + ")").click(
        (function(i) {
            return function() {
                console.log(i);
                $(".plm-nav > ul > li").bind('mouseenter mouseleave');
                $(this).unbind('mouseenter mouseleave');
                $(".plm-nav > ul > li").css("background", "white");
                $(".skin-nav .skinnav-nav-name").css("color", "#666");
                $(this).css("background", "#389cff");
                $(this).find(".skinnav-nav-name").css("color", "white");
                $(".pc-login-m:eq(" + i + ")").siblings("section").css("display", "none");
                $(".pc-login-m:eq(" + i + ")").css("display", "block");
            }
        })(i)
    );
}
// 返回顶部按钮
$(".top-feed").hover(function() {
    $(".icon-mask").css("display", "block");
}, function() {
    $(".icon-mask").css("display", "none");
})
$(".top-feed").click(function() {
    $(window).scrollTop(0);
})

$(function() {
    var storage = window.localStorage;
    var pageface;
    var imgsrc = localStorage.getItem("pageface");
    console.log(imgsrc);
    $(".wraper-img").css("background-image", "url(" + imgsrc + "s)");
})
