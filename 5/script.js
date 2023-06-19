//document.body.style.backgroundColor = 'blue';
const products = [
    {
      name: 'Product 1',
      price: 10.99,
    
    },

    {
      name: 'Product 2',
      price: 19.99,
     
    },
   
  ];
  function generateProductList() {
    const productListElement = document.getElementById('product-list');
  
    products.forEach(product => {
      const listItemElement = document.createElement('li');
      listItemElement.innerHTML = `
        <img src="${product.imageUrl}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>Price: $${product.price.toFixed(2)}</p>
      `;
  
      productListElement.appendChild(listItemElement);
    });
  }
  
  generateProductList();

let basket = JSON.parse(localStorage.getItem('basket')) || [];


function updateBasketDisplay() {
  const basketItemsElement = document.getElementById('basket-items');
  const totalPriceElement = document.getElementById('total-price');
  
  basketItemsElement.innerHTML = '';
  
  basket.forEach(item => {
    const basketItemElement = document.createElement('div');
    basketItemElement.classList.add('basket-item');
    
    const itemNameElement = document.createElement('span');
    itemNameElement.textContent = item.name;
    
    const itemPriceElement = document.createElement('span');
    itemPriceElement.textContent = `$${item.price}`;
    
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
      removeFromBasket(item);
    });
    
    basketItemElement.appendChild(itemNameElement);
    basketItemElement.appendChild(itemPriceElement);
    basketItemElement.appendChild(removeButton);
    
    basketItemsElement.appendChild(basketItemElement);
  });
  

  const totalPrice = basket.reduce((total, item) => total + item.price, 0);
  totalPriceElement.textContent = `$${totalPrice}`;
}


function addToBasket(item) {
  basket.push(item);
  
  
  localStorage.setItem('basket', JSON.stringify(basket));
  
  
  updateBasketDisplay();
}
function removeFromBasket(item) {
  basket = basket.filter(i => i !== item);
  
  
  localStorage.setItem('basket', JSON.stringify(basket));
  
  
  updateBasketDisplay();
}


updateBasketDisplay();
