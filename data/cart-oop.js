function Cart(localStorageKey){
  const cart = {
    cartItems : undefined,
    
    loadFromStorage(){
      this.cartItems = JSON.parse(localStorage.getItem(localStorageKey)) 
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
    },
  
    saveToStorage(){
      localStorage.setItem(localStorageKey , JSON.stringify(this.cartItems));
    },
  
    addToCart(productId){
      let matchingProduct;
    
      this.cartItems.forEach((cartItem) => {
        if(cartItem.productId === productId){
          matchingProduct = cartItem;
        }
      });
    
      if(matchingProduct){
        matchingProduct.quantity += 1;
      }else{
        this.cartItems.push({
          productId : productId,
          quantity : 1,
          deliveryOptionId : '1'
        });
      }
      this.saveToStorage();
    },
  
    removeFromCart(productId){
      let newCart = [];
    
      this.cartItems.forEach((cartItem) => {
        if(cartItem.productId !== productId){
          newCart.push(cartItem);
        }
      });
    
      this.cartItems = newCart;
    
      this.saveToStorage();
    },
  
    updateDeliveryOption(productId, deliveryOptionId){
      let matchingProduct;
    
      this.cartItems.forEach((cartItem) => {
        if(cartItem.productId === productId){
          matchingProduct = cartItem;
        }
      });
    
      matchingProduct.deliveryOptionId = deliveryOptionId;
      this.saveToStorage();
    }
  
  };

  return cart;
}


export const cart = Cart('cart-oop');
const businessCart = Cart('businessCart');


cart.loadFromStorage();
businessCart.loadFromStorage();

console.log(cart);
console.log(businessCart);