function solve() {
   let textField = document.querySelector("body > div > textarea");
   let productName = document.getElementsByClassName('product-title');
   let productPrice = document.getElementsByClassName('product-line-price');

   let productsList = [];
   let totalPrice = [];

   let addButtonBread = document.querySelector("body > div > div:nth-child(2) > div.product-add > button");
   addButtonBread.addEventListener('click', addBread);

   function addBread() {

      let name = productName[0].innerHTML;
      let price = productPrice[0].innerHTML;
      textField.value += `Added ${name} for ${price} to the cart.\n`;
      productsList.push(name);
      totalPrice.push(Number(price));
   }

   let addButtonMilk = document.querySelector("body > div > div:nth-child(3) > div.product-add > button");
   addButtonMilk.addEventListener('click', addMilk);

   function addMilk() {

      let name = productName[1].innerHTML;
      let price = productPrice[1].innerHTML;
      textField.value += `Added ${name} for ${price} to the cart.\n`;
      productsList.push(name);
      totalPrice.push(Number(price));
   }

   let addButtonTomatoes = document.querySelector("body > div > div:nth-child(4) > div.product-add > button");
   addButtonTomatoes.addEventListener('click', addTomatoes);

   function addTomatoes() {
      let name = productName[2].innerHTML;
      let price = productPrice[2].innerHTML;
      textField.value += `Added ${name} for ${price} to the cart.\n`;
      productsList.push(name);
      totalPrice.push(Number(price));
   }

   let checkoutButton = document.querySelector("body > div > button");
   checkoutButton.addEventListener('click', addListOfProducts)

   function addListOfProducts() {
      let uniqueProducts = [...new Set(productsList)]
      
      textField.value += `You bought ${uniqueProducts.join(', ')} for ${totalPrice.reduce((a, b) => a + b, 0).toFixed(2)}.`

      addButtonBread.removeEventListener('click', addBread);
      addButtonMilk.removeEventListener('click', addMilk);
      addButtonTomatoes.removeEventListener('click', addTomatoes);
      checkoutButton.removeEventListener('click', addListOfProducts)
   }
}