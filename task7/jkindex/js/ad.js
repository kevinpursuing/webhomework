$(function() {
    var a = 2;
    var b = 4;
    var animated = true;
    var animated1 = true;
    var animated3 = true;
    // 设置自动轮播效果
    function play() {
        timer = setTimeout(function() {
            animation11(-560, 1000);
            play();
        }, 3000);
    }
    play();

    function stop() {
        clearTimeout(timer);
    }
    $(".ad").mouseenter(function() {
        stop();
    })
    $(".ad").mouseleave(function() {
        play();
    })


    // 对头部导航栏设置子菜单hover显示事件
    $(".ul1").hover(function() {
        $(".navpanel").css("display", "block")
    }, function() {
        $(".navpanel").css("display", "none")
    })
    $(".navpanel").hover(function() {
            $(".navpanel").css("display", "block")
        }, function() {
            $(".navpanel").css("display", "none")
        })
        // 对侧边导航栏设置子菜单hover显示事件
    $(".side-nav ul li").hover(function() {
            $(this).children("div").css("display", "block");
        }, function() {
            $(this).children("div").css("display", "none");
        })
        //对焦点图片轮播侧边按钮设置点击事件
    $(".side-choose-left").click(function() {
        if (animated) {
            animation1(560, 1000);
            setTimeout(function() {
                animated = true;
            }, 1000);
        }
    })
    $(".side-choose-right").click(function() {
            if (animated) {
                animation1(-560, 1000);
                setTimeout(function() {
                    animated = true;
                }, 1000);
            }
        })
        // 对培训岗位轮播按钮设置点击事件
    $(".job-study-side-l").click(function() {
        if (animated1) {
            animation2(186.5, 300);
            setTimeout(function() {
                animated1 = true;
            }, 300);
        }
    })
    $(".job-study-side-r").click(function() {
            if (animated1) {
                animation2(-186.5, 300);
                setTimeout(function() {
                    animated1 = true;
                }, 300);
            }
        })
        // 对快速功能列表设置hover事件
    $(".rec").hover(function() {
            $(".rec-list1").toggle();
            $(".rec-list2").toggle();
        })
        // 焦点图片轮播动画
    function animation1(offset, speed) {
        animated = false;
        if (a == 7 && offset < 0) {
            $(".ad-pic").css("left", "-560px");
            x = -1120;
            $(".ad-pic").animate({
                    "left": x + "px"
                },
                speed);
            a = 2;
        } else if (a == 1 && offset > 0) {
            $(".ad-pic").css("left", "-3360px");
            x = -2800;
            $(".ad-pic").animate({
                    "left": x + "px"
                },
                speed);
            a = 7;
        } else {
            x = parseInt($(".ad-pic").css("left")) + offset;
            $(".ad-pic").animate({
                    "left": x + "px"
                },
                speed);
        }
        if (offset < 0) {
            a += 1;
        } else {
            a -= 1;
        }
        console.log(a);
        console.log($(".ad-pic").css("left"));
    }

    function animation11(offset, speed) {
        if (a == 7 && offset < 0) {
            $(".ad-pic").css("left", "-560px");
            x = -1120;
            $(".ad-pic").animate({
                    "left": x + "px"
                },
                speed);
            a = 2;
        } else if (a == 1 && offset > 0) {
            $(".ad-pic").css("left", "-3360px");
            x = -2800;
            $(".ad-pic").animate({
                    "left": x + "px"
                },
                speed);
            a = 7;
        } else {
            x = parseInt($(".ad-pic").css("left")) + offset;
            $(".ad-pic").animate({
                    "left": x + "px"
                },
                speed);
        }
        if (offset < 0) {
            a += 1;
        } else {
            a -= 1;
        }
        console.log(a);
        console.log($(".ad-pic").css("left"));
    }
    // 培训岗位轮播动画
    function animation2(offset, speed) {
        animated1 = false;
        if (b == 9 && offset < 0) {
            $(".job-c").css("left", "-559.5px");
            x = -746;
            $(".job-c").animate({
                    "left": x + "px"
                },
                speed);
            b = 4;
        } else if (b == 1 && offset > 0) {
            $(".job-c").css("left", "-1492px");
            x = -1305.5;
            $(".job-c").animate({
                    "left": x + "px"
                },
                speed);
            b = 10;
        } else {
            x = parseInt($(".job-c").css("left")) + offset;
            $(".job-c").animate({
                    "left": x + "px"
                },
                speed);
        }
        if (offset < 0) {
            b += 1;
        } else {
            b -= 1;
        }
        console.log(b);
        console.log($(".job-c").css("left"));
    }
})
