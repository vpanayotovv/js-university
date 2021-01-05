function solve() {
   let addButtonBread = document.querySelector("body > div > div:nth-child(2) > div.product-add > button");
   addButtonBread.addEventListener('click', addBread);

   let textField = document.querySelector("body > div > textarea");

   let productsList = [];
   let totalPrice = [];

   function addBread() {

      let productName = document.getElementsByClassName('product-title')[0];
      let productPrice = document.getElementsByClassName('product-line-price')[0];
      textField.value += `Added ${productName.innerHTML} for ${productPrice.innerHTML} to the cart.\n`;
      productsList.push(productName.innerHTML);
      totalPrice.push(Number(productPrice.innerHTML));
   }

   let addButtonMilk = document.querySelector("body > div > div:nth-child(3) > div.product-add > button");
   addButtonMilk.addEventListener('click', addMilk);

   function addMilk() {

      let productName = document.getElementsByClassName('product-title')[1];
      let productPrice = document.getElementsByClassName('product-line-price')[1];
      textField.value += `Added ${productName.innerHTML} for ${productPrice.innerHTML} to the cart.\n`;
      productsList.push(productName.innerHTML);
      totalPrice.push(Number(productPrice.innerHTML));
   }

   let addButtonTomatoes = document.querySelector("body > div > div:nth-child(4) > div.product-add > button");
   addButtonTomatoes.addEventListener('click', addTomatoes);

   function addTomatoes() {

      let productName = document.getElementsByClassName('product-title')[2];
      let productPrice = document.getElementsByClassName('product-line-price')[2];
      textField.value += `Added ${productName.innerHTML} for ${productPrice.innerHTML} to the cart.\n`;
      productsList.push(productName.innerHTML);
      totalPrice.push(Number(productPrice.innerHTML));
   }

   let checkoutButton = document.querySelector("body > div > button");
   checkoutButton.addEventListener('click', addListOfProducts)

   function addListOfProducts() {
      function onlyUnique(value, index, self) {
         return self.indexOf(value) === index;
      }
      let uniqueProducts = productsList.filter(onlyUnique);
      textField.value += `You bought ${uniqueProducts.join(', ')} for ${totalPrice.reduce((a, b) => a + b, 0).toFixed(2)}.`

      addButtonBread.removeEventListener('click', addBread);
      addButtonMilk.removeEventListener('click', addMilk);
      addButtonTomatoes.removeEventListener('click', addTomatoes);
      checkoutButton.removeEventListener('click', addListOfProducts)
   }
}