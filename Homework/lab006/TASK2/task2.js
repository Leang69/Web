function palindromeCheck() {
  var num = document.getElementById("num").value;
  var isPanlindrome = true;
  for (let i = 0; i < (num.length/2); i++) {
    if(num.charAt(i) !== num.charAt(num.length-1-i))
    {
      isPanlindrome = false;
      break;
    }
  } 
  if(isPanlindrome){
    document.getElementById("result").innerHTML = "Panlindrome";
  }
  else{
    document.getElementById("result").innerHTML = "not Panlindrome";
  }
}
