// Render Orange Stripes

function templateOrangeStripeBürger() {
  return `
   <section>
    <div class="burger_section">
  <div class="orange_stripe">
    <img class="orange_stripe_img" src="./assets/icons/bürger_icon.svg" alt="bürger icon">
    <span class="orange_stripe_slogan" >Burger & Sandwiches</span>
  </div>
    `;
}

function templateOrangeStripeSald() {
  return `
   <section>
    <div class="salad_section">
  <div class="orange_stripe">
    <img class="orange_stripe_img" src="./assets/icons/Salad_icon.svg" alt="bürger icon">
    <span class="orange_stripe_slogan" >Salad&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
  </div>
</div>
    `;
}

function templateOrangeStripePizza() {
  return `
    <section>
        <div class="pizza_section">
            <div class="orange_stripe">
                <img class="orange_stripe_img" src="./assets/icons/Pizza_icon.svg" alt="bürger icon">
                <span class="orange_stripe_slogan" >Pizza  (30cm)
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            </div>
        </div>
        
    `;
}

function templateContentDishes(index) {
  return `
    <div class="content">
            <img class="meal_card_img" src="${myDishes[index].path}" alt="Bürger Bild Veggi">
            <div class="meal_card_content">
              <div class="meal_card_content_left">
                <h4>${myDishes[index].name}</h4>
                <span class="meal_card_content_left_span">${myDishes[index].description}</span>
                <div></div>
              </div>
              <div class="meal_card_content_right">
                <div class="meal_card_content_right_price">
                  <span>${myDishes[index].price} $</span>
                  </div>
                <div class="meal_card_content_btn" id="meal_card_btn${index}">
                   <button onclick="changeMealBtnOnClick(${index})"  class="btn_add_to_basket">Add to basket</button>
                  
                </div>
              </div>
            </div>
        </div>
      </section>
    `;
}

function templateBasketItemCard(index) {
  console.log(index);

  return `
           
          <div class="basked_text">
              <span>${costumOrder[index].amount} x ${costumOrder[index].name}</span>
            </div>
            <div class="basket_icon_price">
              <div class="basked_delet">
                <img src="./assets/icons/delete.svg" alt="delete button">
                <span>1</span>
                 <span>+</span>
              </div>
              <span>${costumOrder[index].price}</span>
            </div>
             <div id="basket_items">
          
         
          
    `;
}

function tamplateBasketItems(index) {
  return `
    
        <div class="busket_subtotal">
            <span>Subtotal</span>
            <span>${costumOrder[index].price}</span>
          </div>
          <div class="busket_delivery_fee">
          <span>Delivery free</span>
            <span>4.99$</span>
            </div>
            <hr class="line">
            <div class="busket_total_price">
              <span>Total</span>
              <span>${costumOrder[index].price + 4.99}</span>
            </div>
            <div class="busket_buy_now">
              <button class="btn_buy_now">Buy now (${costumOrder[index].price + 4.99})</button>
            </div>
          </div>
    `;
}

function changeMealBtn() {
  return `
    <button id="addOne" class="btn">Added 1</button>
                  <button class="btn_plus">+</button>
    `;
}
