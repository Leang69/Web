var sort = () => {
  let str = document.getElementById("num").value;
  document.getElementById("before").innerHTML = "Before sort: " + str ;
  let arr = getElement(str);
  convertToNum(arr);
  quickSort(arr, 0, arr.length - 1);
  console.log(arr);
  document.getElementById("result").innerHTML = "After sort: " + arr ;
};

let getElement = (str) => {
  let tmp = "";
  let arr = [];
  for (i in str) {
    if (str.charAt(i) === ",") {
      arr.push(tmp);
      tmp = "";
    } else {
      tmp = tmp + str.charAt(i);
    }
  }
  arr.push(tmp);
  return arr;
};

let convertToNum = (arr) => {
  for (i of arr) {
    arr.push(parseFloat(arr.shift()));
  }
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
