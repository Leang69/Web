function addToCart(me) {
  let parenetID = me.parentNode.id;
  let title = document.getElementById(parenetID).childNodes[3].innerHTML;
  let myitem;
  if (localStorage.getItem(parenetID)) {
    myitem = {
      img: document.getElementById(parenetID).childNodes[1].getAttribute("src"),
      title: document.getElementById(parenetID).childNodes[3].innerHTML,
      price: document.getElementById(parenetID).childNodes[5].innerHTML,
      discount: 0,
      quantity:
        parseInt(JSON.parse(localStorage.getItem(parenetID)).quantity) + 1,
    };
  } else {
    myitem = {
      img: document.getElementById(parenetID).childNodes[1].getAttribute("src"),
      title: document.getElementById(parenetID).childNodes[3].innerHTML,
      price: document.getElementById(parenetID).childNodes[5].innerHTML,
      discount: 0,
      quantity: 1,
    };
  }
  localStorage.setItem(parenetID, JSON.stringify(myitem));
  let totalItem = 0;
  for (i of Object.keys(localStorage)) {
    totalItem += parseInt(JSON.parse(localStorage.getItem(i)).quantity);
  }
  document.getElementById("item").innerHTML = "Item: " + totalItem;
}
