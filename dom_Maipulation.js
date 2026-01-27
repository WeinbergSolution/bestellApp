const contentSectionRef = document.getElementById("dishes");
const contentRef = document.getElementById("content_dishes");
const basektCardRef = document.getElementById("content_basket");
let totalPrice = 0;
let totalPricePlusDeleveryFee = 0;

function init() {
  getFromLocalStorage();
  renderSectionContent();
  renderBasketItem();
}

function addToLocalStorage(index) {
  const myJSON = JSON.stringify(costumOrder);
  localStorage.setItem("costumOrder", myJSON);
}

function getFromLocalStorage() {
  let myOrderArray = JSON.parse(localStorage.getItem("costumOrder"));
  if (myOrderArray !== null) {
    costumOrder = myOrderArray;
  }
}

function renderSectionContent() {
  contentSectionRef.innerHTML = templateOrangeStripePizza();
  for (let index = 0; index < myDishes.length; index++) {
    if (myDishes[index].category == "Pizza") {
      contentSectionRef.innerHTML += templateContentDishes(index);
    }
  }

  contentSectionRef.innerHTML += templateOrangeStripeBürger();
  for (let index = 0; index < myDishes.length; index++) {
    if (myDishes[index].category == "Bürger") {
      contentSectionRef.innerHTML += templateContentDishes(index);
    }
  }

  contentSectionRef.innerHTML += templateOrangeStripeSald();
  for (let index = 0; index < myDishes.length; index++) {
    if (myDishes[index].category == "Salat") {
      contentSectionRef.innerHTML += templateContentDishes(index);
    }
  }
  for (let i = 0; i < costumOrder.length; i++) {
    const mealBtnRef = document.getElementById(
      "meal_card_btn" + costumOrder[i].myDishesIndex,
    );
    mealBtnRef.innerHTML = changeMealBtn(i);
  }
}

function renderBasketItem() {
  calculateTotalPrice();
  const baskeItemsref = document.getElementById("basket_items");
  basektCardRef.innerHTML = "";
  baskeItemsref.innerHTML = "";
  for (let index = 0; index < costumOrder.length; index++) {
    basektCardRef.innerHTML += templateBasketItemCard(index);
  }

  console.log(localStorage.getItem("costumOrder"));

  baskeItemsref.innerHTML = tamplateBasketItems(
    totalPrice,
    totalPricePlusDeleveryFee,
  );
}

function addToCostumOrderArray(index) {
  let newDish = {
    "name": myDishes[index].name,
    "description": myDishes[index].description,
    "price": myDishes[index].price,
    "amount": myDishes[index].amount + 1,
    "combinePrice": myDishes[index].amount + 1 * myDishes[index].price,
    "inBusket": true,
    "myDishesIndex": index,
  };
  costumOrder.push(newDish);
}

function calculateTotalPrice() {
  totalPrice = 0;
  for (let index = 0; index < costumOrder.length; index++) {
    totalPrice += costumOrder[index].combinePrice;
    console.log(totalPrice);
  }
  totalPricePlusDeleveryFee = totalPrice + 4.99;
}

function deleteCardItemBasket(index) {
  costumOrder.splice(index, 1);
  addToLocalStorage(index);
  renderBasketItem();
  renderSectionContent();
}

function changeMealBtnOnClick(index) {
  const mealBtnRef = document.getElementById("meal_card_btn" + index);

  mealBtnRef.innerHTML = changeMealBtn();
  addToCostumOrderArray(index);
  addToLocalStorage(index);
  renderBasketItem();
  renderSectionContent();
}

function changeAmountBtnOnClick(index) {
  costumOrder[index].amount += +1;
  costumOrder[index].combinePrice =
    costumOrder[index].amount * costumOrder[index].price;
  inBasektRef = document.getElementById(`addOne-${index}`).innerHTML =
    "in Basket" + " " + costumOrder[index].amount;

  addToLocalStorage(index);
  renderBasketItem();
}

function lowerAmountBtnOnClick(index) {
  costumOrder[index].amount += -1;
  costumOrder[index].combinePrice =
    costumOrder[index].amount * costumOrder[index].price;
  inBasektRef = document.getElementById(`addOne-${index}`).innerHTML =
    "in Basket" + " " + costumOrder[index].amount;
  addToLocalStorage(index);
  renderBasketItem();
  if (costumOrder[index].amount == 0) {
    deleteCardItemBasket(index);
  }
}

function ChangeAmountContentSection(index) {
  addOneRef = document.getElementById(`addOne-${index}`);
  addOneRef.innerHTML = `in Basket ${costumOrder[index].amount}`;
}

function showBasketOnclick() {}
