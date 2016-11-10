// 创建棋盘数组
var chessBoard = []
var over = false;
// 初始化棋盘每一个位置的状态为true，即可放置状态
for (var i = 0; i < 15; i++) {
    chessBoard[i] = []
    for (var j = 0; j < 15; j++) {
        chessBoard[i][j] = true;
    }
}
// 我方赢法数组
var wins1 = [];
for (var i = 0; i < 15; i++) {
    wins1[i] = [];
    for (var j = 0; j < 15; j++) {
        wins1[i][j] = [];
    }
}
// 电脑方赢法数组
var wins2 = [];
for (var i = 0; i < 15; i++) {
    wins2[i] = [];
    for (var j = 0; j < 15; j++) {
        wins2[i][j] = [];
    }
}
// 初始化赢法种类的索引
var count = 0;
// 横向排列赢法
for (var i = 0; i < 15; i++) {
    for (var j = 0; j < 11; j++) {
        for (var k = 0; k < 5; k++) {
            wins1[i][j + k][count] = true;
            wins2[i][j + k][count] = true;
        }
        count++;
    }
}
// 竖向排列赢法
for (var i = 0; i < 15; i++) {
    for (var j = 0; j < 11; j++) {
        for (var k = 0; k < 5; k++) {
            wins1[j + k][i][count] = true;
            wins2[j + k][i][count] = true;
        }
        count++;
    }
}
// 斜线排列赢法
for (var i = 0; i < 11; i++) {
    for (var j = 0; j < 11; j++) {
        for (var k = 0; k < 5; k++) {
            wins1[i + k][j + k][count] = true;
            wins2[i + k][j + k][count] = true;

        }
        count++;
    }
}
// 反斜线排列赢法
for (var i = 0; i < 11; i++) {
    for (var j = 14; j > 3; j--) {
        for (var k = 0; k < 5; k++) {
            wins1[i + k][j - k][count] = true;
            wins2[i + k][j - k][count] = true;
        }
        count++;
    }
}
// 赢法的统计数组
var myWin = [];
var computerWin = []
for (var i = 0; i < count; i++) {
    myWin[i] = 0;
    computerWin[i] = 0;
}
var chess = document.getElementById('chess-board');
var context = chess.getContext('2d');
context.strokeStyle = "#BFBFBF";
var me = true;
window.onload = function() {
        drawChessBoard();
    }
    // chess绑定inclick事件
chess.onclick = function(e) {
        if (over) {
            return;
        }
        var x = e.offsetX;
        var y = e.offsetY;
        var i = Math.floor(x / 36);
        var j = Math.floor(y / 36);
        if (chessBoard[i][j] == false) {
            return;
        }
        oneStep(i, j, me);
        // 消除赢法
        for (var z = 0; z < count; z++) {
            if (wins2[i][j][k]) {
                for (var m = 0; m < 15; m++) {
                    for (var n = 0; n < 15; n++) {
                        if (wins2[m][n][k]) {
                            wins2[m][n][k] = false;
                        }
                    }
                }
            }
        }
        // 判断胜负
        for (var k = 0; k < count; k++) {
            if (wins1[i][j][k]) {
                myWin[k]++;
                computerWin[k] = 6;
                if (myWin[k] == 5) {
                    alert("你赢了！");
                    over = true;
                }
            }
        }
        // 将我方换为电脑方
        me = !me
            // 计算机AI
        computerAI();
    }
    // 计算机AI函数
function computerAI() {
    if (over) {
        return;
    }
    var max = 0;
    var u = 0;
    var v = 0;
    // 我方分数
    var myScore = [];
    // 计算器分数
    var computerScore = [];
    // 初始化分数
    for (var i = 0; i < 15; i++) {
        myScore[i] = [];
        computerScore[i] = [];
        for (var j = 0; j < 15; j++) {
            myScore[i][j] = 0;
            computerScore[i][j] = 0;
        }
    }
    // 计算机判断在每个位置落子的价值，取最值得落子的位置
    for (var i = 0; i < 15; i++) {
        for (var j = 0; j < 15; j++) {
            if (chessBoard[i][j]) {
                for (var k = 0; k < count; k++) {
                    if (wins1[i][j][k] || wins2[i][j][k]) {
                        if (myWin[k] == 0) {
                            myScore[i][j] += 20;
                        } else if (myWin[k] == 1) {
                            myScore[i][j] += 120;
                        } else if (myWin[k] == 2) {
                            myScore[i][j] += 720;
                        } else if (myWin[k] == 3) {
                            myScore[i][j] += 4320;
                        } else if (myWin[k] == 4) {
                            myScore[i][j] += 50000;
                        }
                        if (computerWin[k] == 0) {
                            computerScore[i][j] += 25;
                        } else if (computerWin[k] == 1) {
                            computerScore[i][j] += 130;
                        } else if (computerWin[k] == 2) {
                            computerScore[i][j] += 820;
                        } else if (computerWin[k] == 3) {
                            computerScore[i][j] += 5320;
                        } else if (computerWin[k] == 4) {
                            computerScore[i][j] += 50000;
                        }
                        // 取最值得落子的位置
                        if (myScore[i][j] > max) {
                            max = myScore[i][j];
                            u = i;
                            v = j;
                        } else if (myScore[i][j] == max) {
                            if (computerScore[i][j] > computerScore[u][v]) {
                                u = i;
                                v = j;
                            }
                        }
                        if (computerScore[i][j] > max) {
                            max = computerScore[i][j];
                            u = i;
                            v = j;
                        } else if (computerScore[i][j] == max) {
                            if (myScore[i][j] > myScore[u][v]) {
                                u = i;
                                v = j;
                            }
                        }
                    }
                }
            }
        }
    }
    oneStep(u, v, me);
    // 消除赢法
    for (var z = 0; z < count; z++) {
        if (wins2[u][v][k]) {
            for (var m = 0; m < 15; m++) {
                for (var n = 0; n < 15; n++) {
                    if (wins2[m][n][k]) {
                        wins2[m][n][k] = false;
                    }
                }
            }
        }
    }
    // 判断胜负
    for (var k = 0; k < count; k++) {
        if (wins2[u][v][k]) {
            myWin[k] = 6;
            computerWin[k]++;
            if (computerWin[k] == 5) {
                alert("Kevin的Alpha哈士奇赢了！");
                over = true;
            }
        }
    }
    // 将我方换为电脑方
    me = !me
}
// 画棋盘
function drawChessBoard() {
    for (var i = 0; i < 16; i++) {
        context.moveTo(15 + i * 36, 15);
        context.lineTo(15 + i * 36, 555);
        context.stroke();
        context.moveTo(15, 15 + i * 36);
        context.lineTo(555, 15 + i * 36);
        context.stroke();
    }
}
// 落下棋子
var oneStep = function(i, j, me) {
    context.beginPath();
    context.arc(15 + i * 36, 15 + j * 36, 15, 0, 2 * Math.PI);
    context.closePath();
    var gradient = context.createRadialGradient(15 + i * 36 + 3, 15 + j * 36 - 3, 15, 15 + i * 36 + 3, 15 + j * 36 - 3, 0);
    if (me) {
        gradient.addColorStop(0, "#0A0A0A");
        gradient.addColorStop(1, "#636766");
    } else {
        gradient.addColorStop(0, "#D1D1D1");
        gradient.addColorStop(1, "#F9F9F9");
    }
    context.fillStyle = gradient;
    context.fill();
    chessBoard[i][j] = false;
}
