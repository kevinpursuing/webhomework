$(document).ready(function() {
    $(window).on("load", function() {
        imgLocation();
        var dataImg = { "data": [{ "src": "1.jpg" }, { "src": "2.jpg" }, { "src": "3.jpg" }, { "src": "4.jpg" }, { "src": "5.jpg" }, { "src": "6.jpg" }, { "src": "7.jpg" }, { "src": "8.jpg" }, { "src": "9.jpg" }, { "src": "10.jpg" }] };
        $(document).on("mousewheel DOMMouseScroll", function(e) {

            var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || // chrome & ie
                (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1)); // firefox


            if (delta < 0) {
                // 向下滚
                if (scrollside()) {
                    $.each(dataImg.data, function(index, value) {
                        var box = $("<div>").addClass("box").appendTo($("#container"));
                        var content = $("<div>").addClass("content").appendTo(box);
                        //                    console.log("./img/"+$(value).attr("src"));
                        $("<img>").attr("src", "./img/" + $(value).attr("src")).appendTo(content);
                    });
                    imgLocation();
                }
            }
        });
    });
});


function scrollside() {
    var box = $(".box");
    // 获取最后一张图片中部距页面顶部的距离
    var lastboxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2);
    // 获取整个页面的高度
    var windowHeight = $(window).height();
    //获取页面滚动条距离顶部的垂直距离。
    var scrollHeight = $(window).scrollTop();
    console.log("documentHeight:" + windowHeight);
    console.log("lastboxHeight:" + lastboxHeight);
    return (lastboxHeight < windowHeight + scrollHeight) ? true : false;
}

function imgLocation() {
    var box = $(".box");
    // 得到图片的宽度
    var boxWidth = box.eq(0).width();
    // 计算每一行能排放图片的个数
    var num = Math.floor($(window).width() / boxWidth);
    var boxArr = [];
    // each() 方法规定为每个匹配元素规定运行的函数
    box.each(function(index, value) {
        // console.log(index+"--"+value);
        // 得到第index个div的高度
        var boxHeight = box.eq(index).height();
        // 在图片摆放没到一行的情况下将这一行每一个图片div的高度存入boxArr数组
        //若图片摆放达到一行，则在上一行最小高度的图片摆放这张图片
        if (index < num) {
            boxArr[index] = boxHeight;
            $(value).css({
                "opacity": "1"
            });
            //            console.log(boxHeight);
        } else {
            var minboxHeight = Math.min.apply(null, boxArr);
            //            console.log(minboxHeight);
            var minboxIndex = $.inArray(minboxHeight, boxArr);
            //            console.log(minboxIndex);
            //            console.log(value);
            $(value).css({
                "position": "absolute",
                "top": minboxHeight,
                "left": box.eq(minboxIndex).position().left,
                "opacity": "1"
            });
            // set$(value)
            boxArr[minboxIndex] += box.eq(index).height();
        }
    });
}
