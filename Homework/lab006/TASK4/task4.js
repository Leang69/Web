var sum = () => {
  let str = document.getElementById("num").value;
  let arr = getElement(str);
  let result = doSum(arr);
  document.getElementById("result").innerHTML = "Result: " + result;
};

let getElement = (
  str,
  convertToNum = (arr) => {
    let tmpArr = arr.filter((e) => e);
    for (i of tmpArr) {
      tmpArr.push(parseFloat(tmpArr.shift()));
    }
    return tmpArr;
  }
) => {
  let tmp = "";
  let arr = str.split(",");
  arr = convertToNum(arr);
  return arr;
};

let doSum = (arr) => {
  let result = 0;
  for (i of arr) {
    result += i;
  }
  return result;
};
