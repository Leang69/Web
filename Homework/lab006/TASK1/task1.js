function hello() {
  var num = document.getElementById("num").value;
  var str = "";
  for (i of num) {
    switch (i) {
      case "1":
        str = str + "one";
        break;
      case "2":
        str = str + "two";
        break;
      case "3":
        str = str + "three";
        break;
      case "4":
        str = str + "four";
        break;
      case "5":
        str = str + "five";
        break;
      case "6":
        str = str + "six";
        break;
      case "7":
        str = str + "seven";
        break;
      case "8":
        str = str + "eight";
        break;
      case "9":
        str = str + "nine";
        break;
      case "0":
        str = str + "zero";
        break;
    }
  }
  document.getElementById("result").innerHTML = str;
}
