// Render Orange Stripes

function templateOrangeStripeBürger() {
  return `
   
    <div class="burger_section">
  <div class="orange_stripe ">
    <img class="orange_stripe_img_burger" src="./assets/img/banner_burger-removebg-preview.png" alt="bürger icon">
    <span class="orange_stripe_slogan" >Burger & Sandwiches</span>
  </div>
    `;
}

function templateOrangeStripeSald() {
  return `
   
    <div class="salad_section">
  <div class="orange_stripe">
    <img class="orange_stripe_img_sald" src="./assets/img/sald_banner-removebg-preview.png" alt="bürger icon">
    <span class="orange_stripe_slogan" >Salad
      
    </span>
  </div>
</div>
    `;
}

function templateOrangeStripePizza() {
  return `
    
        <div class="pizza_section">
            <div class="orange_stripe">
                <img class="orange_stripe_img" src="./assets/img/banner_pizza-removebg-preview.png" alt="bürger icon">
                <span class="orange_stripe_slogan" >Pizza  (30cm)
                </span>
            </div>
        </div>
        
    `;
}

function templateContentDishes(index) {
  return `
    <div class="content ">
            <img class="meal_card_img" src="${myDishes[index].path}" alt="Bürger Bild Veggi">
            <div class="meal_card_content ">
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
      
    `;
}

function templateBasketItemCard(index) {
  return `
           
          <div class="basked_text">
              <span>${costumOrder[index].amount} x ${costumOrder[index].name}</span>
            </div>
            <div class="basket_icon_price">
              <div class="basked_delet">
                <img onclick="deleteCardItemBasket(${index})" src="./assets/icons/delete.svg" alt="delete button">
                <span>${costumOrder[index].amount}</span>
                 <button  class="basked_Plus_btn" onclick="changeAmountBtnOnClick(${index})">+</button>
                 <button  class="basked_Minus_btn" onclick="lowerAmountBtnOnClick(${index})">-</button>
              </div>
              <span>${costumOrder[index].combinePrice}</span>
            </div>
             
          
         
          
    `;
}

function tamplateBasketItems(totalPrice, totalPricePlusDeleveryFee) {
  console.log(totalPrice);
  console.log(totalPricePlusDeleveryFee);

  return `
    <div id="basket_items">
        <div class="busket_subtotal">
            <span>Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div class="busket_delivery_fee">
          <span>Delivery free</span>
            <span>4.99$</span>
            </div>
            <hr class="line">
            <div class="busket_total_price">
              <span>Total</span>
              <span>${totalPricePlusDeleveryFee.toFixed(2)}</span>
            </div>
            <div class="busket_buy_now">
              <button class="btn_buy_now">Buy now (${totalPricePlusDeleveryFee.toFixed(2)})</button>
            </div>
          </div>
    `;
}

function changeMealBtn(i) {
  return `
    <button id="addOne-${i}" class="btn">in Basket 1</button>
                 <button onclick="changeAmountBtnOnClick(${i})"  class="btn_plus" >+</button>
            
    `;
}
