btn_e = document.getElementById('btn')
btn_e.onclick = function() {
  // var Beginning = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"]; // 初始化并赋值原数组
  var content = document.getElementById('B-Array').value;
  var Beginning = content.split(",");
  var maxRepeatElement; //初始化最大重复次数的元素
  var maxRepeatEleS; //初始化最大重复次数的元素第一次出现的位置
  var count = 1; // 初始化重复个数为1
  repeatMax = 0; // 初始化最大重复次数为0
  var noRepeat = Beginning; // 创建存储没有重复元素的数组,初始化为原数组
  var frequency = []; // 创建元素频度二维数组
  var p = 20; // 设置一维长度
  var w = 20; // 设置二维长度
  var q = 0; //初始二维变量
  for (var k = 0; k < p; k++) {
    frequency[k] = new Array();
    for (var c = 0; c < w; c++) { //一维数组里面每个元素数组可以包含的数量p，p也是一个变量；
      frequency[k][c] = "";
    }
  }
  for (var i = 0; i < noRepeat.length; i++) { // 遍历数组并进行筛选
    frequency[i][q++] = i;
    for (var j = i + 1; j < noRepeat.length; j++) {
      if (noRepeat[j] == noRepeat[i]) { // 若是找到与第i个元素值相等的第j个元素，则删除第j个元素，避免重复筛选，造成错误的结果
        count++;
        frequency[i][q++] = j;
        // noRepeat.splice(j, 1); // 删除重复的元素
        // j--; // j--来重新对第j个元素进行判断
      }
      if (count > repeatMax) { // 如果该元素的重复次数大于前面元素的最大重复次数，则替换repeatMax
        repeatMax = count;
        maxRepeatElement = noRepeat[i]; //也要替换最大重复元素
        maxRepeatEleS = i; //替换最大重复元素第一次出现的位置
      }
    }
    q=0;//重置二维变量为0
    count = 1; //重置count
  }
  re = document.getElementById('result'); //通过id获取结果模块
  re.innerHTML = "该数组中出现次数最多的元素为：" + maxRepeatElement + "<br/>";
  re.innerHTML += maxRepeatElement + "出现的次数为" + repeatMax + "次" + "<br/>";
  for (i = 0; i < repeatMax; i++) {
    k = i + 1;
    w = frequency[maxRepeatEleS][i] + 1;
    re.innerHTML += maxRepeatElement + "第" + k + "次出现的位置为：第" + w + "个" + "<br/>";
  }
}
