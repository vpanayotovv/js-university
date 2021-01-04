function solve() {
   let addButtonBread = document.querySelector("body > div > div:nth-child(2) > div.product-add > button");
   addButtonBread.addEventListener('click',addBread);

   let textField =  document.querySelector("body > div > textarea");
   
   function addBread(){
      
      let productName = document.getElementsByClassName('product-title')[0];
      let productPrice = document.getElementsByClassName('product-line-price')[0];
      textField.value += productName.innerHTML + ' ' + productPrice.innerHTML + '\n';
   }

   let addButtonMilk = document.querySelector("body > div > div:nth-child(3) > div.product-add > button");
   addButtonMilk.addEventListener('click',addMilk);
   
   function addMilk(){
      
      let productName = document.getElementsByClassName('product-title')[1];
      let productPrice = document.getElementsByClassName('product-line-price')[1];
      textField.value += productName.innerHTML + ' ' + productPrice.innerHTML + '\n';
   }

   let addButtonTomatoes = document.querySelector("body > div > div:nth-child(4) > div.product-add > button");
   addButtonTomatoes.addEventListener('click',addTomatoes);
   
   function addTomatoes(){
      
      let productName = document.getElementsByClassName('product-title')[2];
      let productPrice = document.getElementsByClassName('product-line-price')[2];
      textField.value += productName.innerHTML + ' ' + productPrice.innerHTML + '\n';
   }

//Added {name} for {money} to the cart.\n
}