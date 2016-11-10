var btn = document.getElementById('result-b');
var result;
btn.onclick = function() {
  var a1 = document.getElementById('x1').value;
  var operation = document.getElementById('operation').value;
  var a2 = document.getElementById('x2').value;
  re = document.getElementById('result-text');
  switch (true) {
    case isNaN(a1) || isNaN(a2) || a1 == "" || a2 == "":
      alert('请在操作数框中输入数字。')
      break;
    case a2 == 0:
      alert('除数不能为0，请重新输入。');
      break;
    case operation == '*':
      result = a1 * a2;
      re.innerHTML = a1 + "*" + a2 + "的结果为：" + result;
      break;
    case operation == '+':
      result = parseInt(a1) + parseInt(a2);
      re.innerHTML = a1 + "+" + a2 + "的结果为：" + result;
      break;
    case operation == '-':
      result = a1 - a2;
      re.innerHTML = a1 + "-" + a2 + "的结果为：" + result;
      break;
    case operation == '/':
      result = parseFloat((a1 / a2).toFixed(9));
      re.innerHTML = a1 + "/" + a2 + "的结果为：" + result;
      break;
  }

}
