export const orders = JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder(order){
  orders.unshift(order); 
  console.log(typeof order);
  saveToStorage();
}

function saveToStorage(){
  localStorage.setItem('orders', JSON.stringify(orders));
}

export function renderOrders(){
  let html = '';

  orders.forEach( order => {
    console.log(typeof order);
  });
}

renderOrders();