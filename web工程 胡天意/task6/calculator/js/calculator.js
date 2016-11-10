// 初始化变量
var num = 0;
// 初始化结果为0
var result = 0;
// 作用一：重复判定。作用二：位置是否在等号之后。
var quit = 0;
var quit1 = 0;
// 若是带等号之后直接输入数字，则视为重新计算。创建等号标记
var eq = 0;
// 初始化运算符写入标记
var operate = 0;
// 初始化运算符参数
var calcu = 1;
// 数字参数获取函数
var str;

function command(num) {
    var str = document.getElementById('input').value;
    document.getElementById('input').style.cssText = "font-size:50px;color:black;"
        // 判定是否在等号之后直接输入数字。若是，则视为重新计算
    if (eq == 1) {
        quit = 0;
        operate = 0;
        calcu = 1;
        quit1 = 0;
        result = 0;
        str = "";
        eq = 0;
    }
    eq = 0;
    // 定制数字参数输入的规则
    if (operate != 1 && str != '0') {
        str += String(num);
    } else {
        str = "";
        str += String(num);
    }
    // 更新计算器显示屏
    document.getElementById('input').value = str;
    // 重置初始化标记
    quit = 0;
    operate = 0;
    eq = 0;
}
// 计算函数
function calculate() {
    var str = document.getElementById('input').value;
    quit1 == 0;
    eq = 0;
    document.getElementById('input').style.cssText = "font-size:50px;color:black;"
        // 判断运算符是否重复，若重复则不进行运算，判断运算符是否在等号之后，若是则不进行运算
    if (quit == 0) {
        switch (calcu) { //判断操作符
            case 1:
                result = parseFloat((result + Number(str)).toFixed(9));
                break;
            case 2:
                result = parseFloat((result - Number(str)).toFixed(9));
                break;
            case 3:
                result = parseFloat((result * Number(str)).toFixed(9));
                break;
            case 4:
                if (str == "0") {
                    document.getElementById('input').style.cssText = "font-size:30px;color:red;"
                    result = "除数不能为0，请重新输入！";
                } else { result = parseFloat((result / Number(str)).toFixed(9)); }
                break;
            case 5:
                result = Math.round(Math.sin(Number(str) / 180 * Math.PI) * 10000) / 10000;
                break;
            case 6:
                result = Math.round(Math.cos(Number(str) / 180 * Math.PI) * 10000) / 10000;
                break;
            case 7:
                result = Math.round(Math.tan(Number(str) / 180 * Math.PI) * 10000) / 10000;
                break;
        }
    }
    document.getElementById('input').value = result;
}
// 设置运算符函数
function plus() { //加法
    calculate();
    operate = 1;
    quit = 1;
    calcu = 1;
}

function minus() { //减法 
    calculate();
    operate = 1;
    quit = 1;
    calcu = 2;
}

function times() { //乘法 
    calculate();
    operate = 1;
    quit = 1;
    calcu = 3;
}

function divide() { //除法 
    calculate();
    operate = 1;
    quit = 1;
    calcu = 4;
}
// 三角函数
function sin() {
    calcu = 5;
    calculate();
    operate = 1;
    quit = 1;
    eq = 0;
}

function cos() {
    calcu = 6;
    calculate();
    operate = 1;
    quit = 1;
    eq = 0;
}

function tan() {
    calcu = 7;
    calculate();
    operate = 1;
    quit = 1;
    eq = 0;
}
// 结果输出函数
function equal() {
    calculate();
    document.getElementById('input').value = result;
    // 将前面的操作数置0
    operate = 1;
    str = "0";
    quit = 1;
    eq = 1;
}
//计算器重置函数
function clearscreen() {
    // 初始化变量
    num = 0;
    quit = 0;
    operate = 0;
    calcu = 1;
    quit1 = 0;
    str = "";
    document.getElementById('input').value = "0";
    result = 0;
    eq = 0;
}

function dot() {
    var str = document.getElementById('input').value;
    str = (str != "0") ? ((operate == 0) ? str : "") : ""; //如果当前值不是"0"，且状态为0，则返回当前值，否则返回"0"; 
    for (i = 0; i <= str.length; i++) { //判断是否已经有一个点号 
        if (str.substr(i, 1) == ".") return false; //如果有则不再插入 
    }
    str = str + ".";
    document.getElementById('input').value = str;
    operate = 0;
    quit = 0;
    eq = 0;
}
