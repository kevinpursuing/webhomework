$(function() {
    var animate = true;

    function fei(animate) {
        if (animate) {
            animate = false;
        } else {
            animate = true;
        }
    }
    // 导航栏的hover事件以及课程各版块切换
    $(".hot-class-nav li").hover(function() {
        $(".hot-class-nav li").removeClass("on");
        $(this).addClass("on");
    })
    $(".hot-class-nav li:eq(0)").hover(function() {
        $(".hot-class-content > div").css("display", "none");
        $(".hot0").css("display", "block");
    })
    $(".hot-class-nav li:eq(1)").hover(function() {
        $(".hot-class-content > div").css("display", "none");
        $(".hot1").css("display", "block");
    })
    $(".hot-class-nav li:eq(2)").hover(function() {
        $(".hot-class-content > div").css("display", "none");
        $(".hot2").css("display", "block");
    })
    $(".hot-class-nav li:eq(3)").hover(function() {
        $(".hot-class-content > div").css("display", "none");
        $(".hot3").css("display", "block");
    })
    $(".hot-class-nav li:eq(4)").hover(function() {
        $(".hot-class-content > div").css("display", "none");
        $(".hot4").css("display", "block");
    })
    $(".hot-class-nav li:eq(5)").hover(function() {
            $(".hot-class-content > div").css("display", "none");
            $(".hot5").css("display", "block");
        })
        // 课程推荐子模块的鼠标移入移出事件
    $(".hot li").mouseenter(function() {

        $(this).find(".class-img-background").fadeIn(300);
        $(this).find(".em-add").slideDown(300);

    })
    $(".hot li").mouseleave(function() {
        $(this).find(".class-img-background").fadeOut(300);
        $(this).find(".em-add").slideUp(300);
        console.log(animate);
    })
})
