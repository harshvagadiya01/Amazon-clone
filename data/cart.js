import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

export let cart = JSON.parse(localStorage.getItem('cart')) 
                                  ||
                  [{
                    productId : 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                    quantity : 2,
                    deliveryOptionId : '1'
                  } , {
                    productId : '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                    quantity : 1,
                    deliveryOptionId : '2'
                  }];


function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId){
  let matchingProduct;

  cart.forEach((cartItem) => {
    if(cartItem.productId === productId){
      matchingProduct = cartItem;
    }
  });

  if(matchingProduct){
    matchingProduct.quantity += 1;
  }else{
    cart.push({
      productId : productId,
      quantity : 1,
      deliveryOptionId : '1'
    });
  }

  saveToStorage();
}

export function removeFromCart(productId){
  let newCart = [];

  cart.forEach((cartItem) => {
    if(cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  });

  cart = newCart;

  saveToStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId){
  let matchingProduct;

  cart.forEach((cartItem) => {
    if(cartItem.productId === productId){
      matchingProduct = cartItem;
    }
  });

  matchingProduct.deliveryOptionId = deliveryOptionId;
  saveToStorage();
}

export function loadCart(fun){
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {

    console.log(xhr.response);
    
    fun();
  });

  xhr.open('GET', 'https://supersimplebackend.dev/cart');
  xhr.send();
}