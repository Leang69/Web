var sort = () => {
  let str = document.getElementById("num").value;

  let arr = getElement(str);
  document.getElementById("before").innerHTML = "Before sort: " + arr;
  quickSort(arr, 0, arr.length - 1);
  document.getElementById("result").innerHTML = "After sort: " + arr;
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

let quickSort = (arr, low, high) => {
  let partition = (arr, low, high) => {
    pivot = arr[high];
    let i = low - 1;
    for (j = low; j <= high - 1; j++) {
      if (arr[j] < pivot) {
        i++;
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
    let tmp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = tmp;
    return i + 1;
  };
  if (low < high) {
    pi = partition(arr, low, high);

    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
};
