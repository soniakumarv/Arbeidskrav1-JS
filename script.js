//alert("Velkommen");
//alert("Denne handlelisten gir deg en oversikt. Legg til, slett og beregn pris på det du trenger mer av");

var haveEnough = [];
var enoughList = document.getElementById("have-enough-list");

showEnoughItemList();

function showEnoughItemList() {
  enoughList.innerHTML = "";
  for (var i = 0; i < haveEnough.length; i++) {
    enoughList.innerHTML += `<li>${haveEnough[i]} <span onclick ="deleteEnoughItem(${i})">X</span></li>`;
  }
}
function addEnoughItem() {
  var enoughInput = document.getElementById("enough-input");
  haveEnough.push(enoughInput.value);
  showEnoughItemList();
}
function deleteEnoughItem(index) {
  var deleteEnoughItem = prompt(
    `Ønsker du å slette "${haveEnough[index]}"? Skriv ja eller nei.`
  );
  if (deleteEnoughItem == "ja") {
    alert(`${haveEnough[index]} er slettet.`);
    haveEnough.splice(i, 1);
    showEnoughItemList();
  } else {
    alert(`${haveEnough[index]} ble ikke slettet.`);
  }
}

var almostEmpty = [];
var almostList = document.getElementById("almost-empty-list");

showAlmostList();

function showAlmostList() {
  almostList.innerHTML = "";
  for (var i = 0; i < almostEmpty.length; i++) {
    almostList.innerHTML += `<li>${almostEmpty[i]} <span onclick ="deleteAlmostItem(${i})">X</span></li>`;
  }
}

function addAlmostItem() {
  var almostInput = document.getElementById("almost-input");
  almostEmpty.push(almostInput.value);
  showAlmostList();
}

function deleteAlmostItem(index) {
  var deleteAlmostItem = prompt(
    `Ønsker du å slette "${almostEmpty[index]}"? Skriv ja eller nei.`
  );
  if (deleteAlmostItem == "ja") {
    alert(`${almostEmpty[index]} er slettet.`);
    almostEmpty.splice(i, 1);
    showAlmostList();
  } else {
    alert(`${almostEmpty[index]} ble ikke slettet.`);
  }
}

var buyMore = [{ varenavn: "brød", pris: 2 }];
var moreList = document.getElementById("buy-more-list");

showBuyMoreList();

function showBuyMoreList() {
  var showPrice = 0;
  moreList.innerHTML = "";
  for (var i = 0; i < buyMore.length; i++) {
    moreList.innerHTML += `<li>${buyMore[i].varenavn} - ${buyMore[i].pris},- <span onclick ="deleteMoreItem(${i})">X</span></li>`;
    showPrice = showPrice + parseInt(buyMore[i].pris);
  }

  document.getElementById("priceSummary").innerHTML = showPrice;
}

function addMoreItem() {
  var moreInput = document.getElementById("more-input");
  var priceInput = document.getElementById("price-input");

  var price = parseInt(priceInput.value);
  if (!isNaN(price) && price > 0) {
    var newItem = { varenavn: moreInput.value, pris: priceInput.value };
    buyMore.push(newItem);
    showBuyMoreList();
  } else {
    alert("ERROR! Du kan ikke skrive 0 som pris");
  }
}

function deleteMoreItem(index) {
  var deleteMoreItem = prompt(
    `Ønsker du å slette varen "${buyMore[index]}"? Skriv ja eller nei.`
  );

  if (deleteMoreItem == "ja") {
    alert(`${buyMore[index]} er slettet.`);
    buyMore.splice(i, 1);
    showBuyMoreList();
  } else {
    alert(`${buyMore[index]} ble ikke slettet.`);
  }
}
