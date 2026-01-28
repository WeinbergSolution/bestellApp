const contentSectionRef = document.getElementById("dishes");
const contentRef = document.getElementById("content_dishes");
const basektCardRef = document.getElementById("content_basket");

let totalPrice = 0;
let totalPricePlusDeleveryFee = 0;
let deleveryFee = 4.99;

function init() {
  getFromLocalStorage();
  renderSectionContent();
  renderBasketItem();
  renderBasketHead();
  ensureBasketOverlay();
}

function ensureBasketOverlay() {
  // Overlay nur einmal erzeugen
  let overlay = document.getElementById("basket_overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "basket_overlay";
    overlay.className = "basket_overlay";
    overlay.addEventListener("click", closeBasketModal);
    document.body.appendChild(overlay);
  }

  // ESC zum Schließen
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeBasketModal();
  });
}

function openBasketModal() {
  const basketWrapper = document.querySelector(".basket_wrapper");
  const overlay = document.getElementById("basket_overlay");
  if (!basketWrapper || !overlay) return;

  basketWrapper.classList.add("is-open");
  overlay.style.display = "block";
  document.body.classList.add("basket-modal-open");
}

function closeBasketModal() {
  const basketWrapper = document.querySelector(".basket_wrapper");
  const overlay = document.getElementById("basket_overlay");
  if (!basketWrapper || !overlay) return;

  basketWrapper.classList.remove("is-open");
  overlay.style.display = "none";
  document.body.classList.remove("basket-modal-open");
}

function toggleBasketModal() {
  const basketWrapper = document.querySelector(".basket_wrapper");
  if (!basketWrapper) return;

  if (basketWrapper.classList.contains("is-open")) {
    closeBasketModal();
  } else {
    openBasketModal();
  }
}

// Wird vom Bottom-Menü (Basket Icon) aufgerufen
function showBasketOnclick() {
  toggleBasketModal();
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

function renderBasketHead() {
  const basketHeadRef = document.getElementById("basket_head");
  basketHeadRef.innerHTML = "";
  if (costumOrder.length <= 0) {
    basketHeadRef.innerHTML = templateBasketHead();
  } else {
    basketHeadRef.innerHTML = templateBasketHeadNone();
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
  }
  totalPricePlusDeleveryFee = totalPrice + deleveryFee;
}

function deleteCardItemBasket(index) {
  costumOrder.splice(index, 1);
  addToLocalStorage(index);
  renderBasketHead();
  renderBasketItem();
  renderSectionContent();
}

function changeMealBtnOnClick(index) {
  const mealBtnRef = document.getElementById("meal_card_btn" + index);
  addToCostumOrderArray(index);
  const orderIndex = costumOrder.length - 1;
  mealBtnRef.innerHTML = changeMealBtn(orderIndex);
  addToLocalStorage(index);
  renderBasketHead();
  renderBasketItem();
  renderSectionContent();
}

function changeAmountBtnOnClick(index) {
  costumOrder[index].amount += +1;
  costumOrder[index].combinePrice =
    costumOrder[index].amount * costumOrder[index].price;

  document.getElementById(`addOne-${index}`).innerHTML =
    "in Basket" + " " + costumOrder[index].amount;

  addToLocalStorage(index);

  renderBasketItem();
}

function lowerAmountBtnOnClick(index) {
  costumOrder[index].amount += -1;
  costumOrder[index].combinePrice =
    costumOrder[index].amount * costumOrder[index].price;

  document.getElementById(`addOne-${index}`).innerHTML =
    "in Basket" + " " + costumOrder[index].amount;

  addToLocalStorage(index);

  renderBasketItem();

  if (costumOrder[index].amount == 0) {
    deleteCardItemBasket(index);
  }
}

function ChangeAmountContentSection(index) {
  const addOneRef = document.getElementById(`addOne-${index}`);
  addOneRef.innerHTML = `in Basket ${costumOrder[index].amount}`;
}

function changeDeliveryFee() {
  if (deleveryFee == 4.99) {
    deleveryFee = 0;
  } else {
    deleveryFee = 4.99;
  }
  renderBasketItem();
}

function openOrderDialog() {
  if (costumOrder.length <= 0) {
    if (!document.getElementById("order_dialog")) {
      document.body.insertAdjacentHTML("beforeend", templateOrderDeny());
    }
  } else {
    if (!document.getElementById("order_dialog")) {
      document.body.insertAdjacentHTML("beforeend", templateOrderAcepted());
      console.log(costumOrder);
      for (let index = 0; index < costumOrder.length; index++) {
        costumOrder.splice(index, 1);
        console.log(costumOrder);
      }
      addToLocalStorage();
      renderBasketHead();
      renderBasketItem();
      renderSectionContent();
    }
  }

  document.getElementById("order_dialog").showModal();
}

function closeOrderDialog() {
  const dialog = document.getElementById("order_dialog");
  dialog.close();
  dialog.remove();
}
