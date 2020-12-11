function displayItem() {
  for (i of Object.keys(localStorage)) {
    let row = document.createElement("div");
    row.setAttribute("class", "row m-0");
    row.setAttribute("id", i);

    let btnRemove = document.createElement("button");
    btnRemove.setAttribute("class", "btn btn-lg col-1 p-2 m-auto text-center");
    btnRemove.innerHTML = "Remove";
    btnRemove.setAttribute("onclick", "removeItem(this)");

    let Myimg = document.createElement("img");
    Myimg.setAttribute("src", JSON.parse(localStorage.getItem(i)).img);
    Myimg.setAttribute("class", "col-2");

    let title = document.createElement("h4");
    title.setAttribute("class", "m-auto col-2");
    title.innerHTML = JSON.parse(localStorage.getItem(i)).title;

    let price = document.createElement("h4");
    price.setAttribute("class", "m-auto col-2");
    price.innerHTML = JSON.parse(localStorage.getItem(i)).price;

    let quantity = document.createElement("div");
    quantity.setAttribute("class", "col-2 d-flex justify-content-around");

    let quantityInput = document.createElement("input");
    quantityInput.setAttribute("type", "number");
    quantityInput.setAttribute("min", "1");
    quantityInput.setAttribute("class", "my-auto w-50");
    quantityInput.setAttribute("oninput", "quantityUpdate(this)");
    quantityInput.value = JSON.parse(localStorage.getItem(i)).quantity;
    quantity.appendChild(quantityInput);

    let discount = document.createElement("div");
    discount.setAttribute("class", "col-2 d-flex justify-content-around");

    let discountInput = document.createElement("input");
    discountInput.setAttribute("type", "number");
    discountInput.setAttribute("min", "0");
    discountInput.setAttribute("max", "100");
    discountInput.setAttribute("step", "5");
    discountInput.setAttribute("oninput", "discountUpdate(this)");
    discountInput.setAttribute("class", "my-auto w-50");

    discountInput.value = JSON.parse(localStorage.getItem(i)).discount;
    discount.appendChild(discountInput);
    let simbol = document.createElement("h4");
    simbol.setAttribute("class", "my-auto");
    simbol.innerHTML = "%";
    discount.appendChild(simbol);

    let total = document.createElement("h5");
    total.setAttribute("class", "m-auto col-1 subTotal p-0");
    total.innerHTML = "0" + "$";

    row.appendChild(btnRemove);
    row.appendChild(Myimg);
    row.appendChild(title);
    row.appendChild(price);
    row.appendChild(quantity);
    row.appendChild(discount);
    row.appendChild(total);
    document.getElementById("list").appendChild(row);
    calculateSubTotal(i);
    totalItem();
    totalPrice();
  }
}

function removeItem(me) {
  let id = me.parentNode.id;
  localStorage.removeItem(id);
  document.querySelector('#'+id).remove();
  totalPrice();
  totalItem();
}

function calculateSubTotal(me) {
  let data = JSON.parse(localStorage.getItem(me));
  let total =
    parseInt(data.price) *
    parseInt(data.quantity) *
    (1 - parseInt(data.discount) / 100);
  total = total.toFixed(2);
  document.getElementById(me).lastChild.innerHTML = total + "$";
}

function discountUpdate(me) {
  let id = me.parentNode.parentNode.id;
  let data = JSON.parse(localStorage.getItem(id));
  data.discount = me.value;
  localStorage.setItem(id, JSON.stringify(data));
  calculateSubTotal(id);
  totalPrice();
}

function quantityUpdate(me) {
  let id = me.parentNode.parentNode.id;
  let data = JSON.parse(localStorage.getItem(id));
  data.quantity = me.value;
  localStorage.setItem(id, JSON.stringify(data));
  calculateSubTotal(id);
  totalItem();
  totalPrice();
}

function totalItem() {
  let totalItem = 0;
  for (i of Object.keys(localStorage)) {
    totalItem += parseInt(JSON.parse(localStorage.getItem(i)).quantity);
  }
  document.getElementById("item").innerHTML =
    "Item: " + totalItem + "&nbsp&nbsp";
}

function totalPrice() {
  let totalPrice = 0;
  let subTotal = document.getElementsByClassName("subTotal");
  for (i of subTotal) {
    totalPrice += parseInt(i.innerHTML);
  }
  document.getElementById("totalPrice").innerHTML =
    "Total Price: " + totalPrice + "$ ";
}

{
  /* <div id=1 class="row m-0">
          <button class="btn btn-lg col-1 p-2 m-auto text-center">
            Remove
          </button>
          <img src="img/a.jpeg" class="col-2" />
          <h4 class="m-auto col-2">JanSport Checkerboard blue</h4>
          <h4 class="m-auto col-2">45$</h4>()
          <div class="col-2 d-flex justify-content-around flex-nowrap"><input type="number" min="1" class="my-auto w-50" /></div>
          <div class="col-2 d-flex justify-content-around flex-nowrap">
            <input type="number" step="5" min="0" max="100" class="my-auto w-50" />
            <h4 class="my-auto">%</h4>
          </div>
          <h4 class="m-auto col-1">1000</h4>
        </div> */
}
