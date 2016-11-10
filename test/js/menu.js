var WINDOW_WIDTH = 1024;
var WINDOW_HEIGHT = 768;
var R = 8;
var MARGIN_TOP = 60;
var MARGIN_LEFT = 30;
$(function() {
        var canvas = document.getElementById('clock')
        var context = canvas.getContext('2d');
        //2d绘图
        canvas.width = WINDOW_WIDTH;
        canvas.height = WINDOW_HEIGHT;
        setInterval(function() {
            // update(MARGIN_LEFT + 78 * (R + 1),MARGIN_TOP,context);
            // update(MARGIN_LEFT + 93 * (R + 1),MARGIN_TOP,context);
            update(context);
            render(context);
        }, 50);

    })
    // 时钟数字显示
var nn = 0;
var hours = 0;
var minutes = 0;
var seconds = 60;
var canvas = document.getElementById('clock')
var context = canvas.getContext('2d');
// 声明小球数组
var balls = [];
// 声明颜色数组
var ballcolors = ['#96CDCD', '#71C671', '#DB7093', '#FF4500', '#C1C1C1', '#AB82FF', '#9AC0CD']

function render(cxt) {
    if (seconds >= 0) {
        cxt.clearRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
        renderDigit(MARGIN_LEFT, MARGIN_TOP, parseInt(hours / 10), cxt);
        renderDigit(MARGIN_LEFT + 15 * (R + 1), MARGIN_TOP, parseInt(hours % 10), cxt);
        renderDigit(MARGIN_LEFT + 30 * (R + 1), MARGIN_TOP, parseInt(10), cxt);
        renderDigit(MARGIN_LEFT + 39 * (R + 1), MARGIN_TOP, parseInt(minutes / 10), cxt);
        renderDigit(MARGIN_LEFT + 54 * (R + 1), MARGIN_TOP, parseInt(minutes % 10), cxt);
        renderDigit(MARGIN_LEFT + 69 * (R + 1), MARGIN_TOP, parseInt(10), cxt);
        renderDigit(MARGIN_LEFT + 78 * (R + 1), MARGIN_TOP, parseInt(seconds / 10), cxt);
        renderDigit(MARGIN_LEFT + 93 * (R + 1), MARGIN_TOP, parseInt(seconds % 10), cxt);
        // 彩色小球的绘制
        for (var i = 0; i < balls.length; i++) {
            cxt.fillStyle = balls[i].color;
            cxt.beginPath();
            cxt.arc(balls[i].x, balls[i].y, R, 0, 2 * Math.PI);
            cxt.fill();
            cxt.closePath();
        }
        if (nn <= 20) {
            nn++;
        } else if (nn >= 20) {
            seconds--;
            nn = 0;
        }
    }
}
//彩色小球更新
function update(cxt) {
    for (var i = 0; i < balls.length; i++) {
        if (balls[i].y > 400 - R) {
            balls[i].vy = -balls[i].vy * 0.5;
        }
        balls[i].x += balls[i].vx;
        balls[i].y += balls[i].vy;
        balls[i].vy += balls[i].g;
    }
}
// 时钟数字绘制
function renderDigit(x, y, num, cxt) {
    cxt.fillStyle = "RGB(0,102,153)";
    for (var i = 0; i < digit[num].length; i++) {
        for (var j = 0; j < digit[num][i].length; j++) {
            if (digit[num][i][j] == 1) {
                // 数字的生成
                cxt.beginPath();
                cxt.arc(x + j * 2 * (R + 1) + (R + 1), y + i * 2 * (R + 1) + (R + 1), R, 0, 2 * Math.PI);
                cxt.closePath();
                cxt.fill();
                cxt.closePath();
                // 彩色小球的生成
                if (nn == 0) {
                    if (x > MARGIN_LEFT + 69 * (R + 1)) {
                        var aball = {
                            x: x + j * 2 * (R + 1) + (R + 1),
                            y: y + i * 2 * (R + 1) + (R + 1),
                            color: ballcolors[Math.floor(Math.random() * ballcolors.length)],
                            vx: Math.pow(-1, Math.floor(Math.random() * 100)) * 4,
                            vy: -6,
                            g: 1.5 + Math.random()
                        }
                        balls.push(aball);
                    }
                }
            }
        }
    }
}
