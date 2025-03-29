import { renderOrderSummary } from "./checkout/orderSummary.js"; 
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
// import "../data/cart-class.js";
// import "../data/backend-practice.js";
import { loadProducts , loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";

async function loadPage(){

  try{
    await loadProductsFetch();
  
    await new Promise((resolve) => {
      loadCart(() => {
        resolve();
      });
    })
    
  } catch(error) {
    console.log('Unexpected error. Please try again later')
  }

  document.querySelector('.js-return-to-home').innerHTML = 

  renderOrderSummary();
  renderPaymentSummary();
}



loadPage();

/*
Promise.all([
  //promise 1
  loadProductsFetch(),
  // promise 2
  new Promise((resolve) => {
    loadCart(() => {
      resolve('value 2');
    });
  })
]).then((values) => {
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary();
});
*/


//loading products and cart using promises one by one 
/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve('value 1');
  });
}).then((value) => { 
  return new Promise((resolve) => {
    console.log(value);
    loadCart(() => {
      resolve('value 2');
    });
  });
}).then((value) => {
  console.log(value);
  renderOrderSummary();
  renderPaymentSummary();
})
*/

//loading products and cart using callbacks
/*
loadProducts(() => {
  loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });
});
*/