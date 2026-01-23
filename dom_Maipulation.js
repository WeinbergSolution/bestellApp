const contentSectionRef = document.getElementById("dishes");
const contentRef = document.getElementById("content_dishes");

function init() {
  renderSectionContent();
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
}

function changeMealBtnOnClick(index) {
  const mealBtnRef = document.getElementById("meal_card_btn" + index);
  mealBtnRef.innerHTML = changeMealBtn();
  addToCostumOrderArray(index);
  addToLocalStorage(index);
  renderBasketItem(index);
}

function addToCostumOrderArray(index) {
  let newDish = {
    name: myDishes[index].name,
    description: myDishes[index].description,
    price: myDishes[index].price,
    amount: myDishes[index].amount + 1,
  };
  costumOrder.push(newDish);
  console.log(newDish);
}

function renderBasketItem(index) {
  const basektCardRef = document.getElementById("content_basket");
  const baskeItemsref = document.getElementById("basket_items");
  for (let i = index; i < costumOrder.length; i++) {
    basektCardRef.innerHTML += templateBasketItemCard(index);
    baskeItemsref.innerHTML = tamplateBasketItems(index);
  }
}

function addToLocalStorage(index) {
  const myJSON = JSON.stringify(costumOrder);
  localStorage.setItem("costumOrder", myJSON);
}
