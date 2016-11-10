var btn = document.getElementById('judge');
btn.onclick = function() {
  //通过id获取分数 
  grade = document.getElementById('grade').value.trim();
  switch (true) {
    case grade == "":
      alert("你需要输入分数");
      break;
    case grade > 100 || grade < 0 || isNaN(grade):
      alert("输入错误，请重新输入。");
      break;
    case grade <= 100 && grade >= 90:
      alert("该生为一等生");
      break;
    case grade < 90 && grade >= 80:
      alert("该生为二等生");
      break;
    case grade < 80 && grade >= 70:
      alert("该生为三等生");
      break;
    case grade < 70 && grade >= 60:
      alert("该生为四等生");
      break;
    case grade < 60 && grade >= 50:
      alert("该生为五等生");
      break;
    case grade < 50 && grade >= 40:
      alert("该生为六等生");
      break;
    case grade < 40 && grade >= 30:
      alert("该生为七等生");
      break;
    case grade < 30 && grade >= 20:
      alert("该生为八等生");
      break;
    case grade < 20 && grade >= 10:
      alert("该生为九等生");
      break;
    case grade < 10 && grade >= 0:
      alert("该生为十等生");
      break;
  }
}
