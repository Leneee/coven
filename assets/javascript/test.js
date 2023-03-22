document.addEventListener('DOMContentLoaded', function() {
  const products = [
    { id: 1, name: 'Anillo de piedra lunar', price: 10, stock: 5 },
    { id: 2, name: 'Anillos de proteccion', price: 20, stock: 10 },
    { id: 3, name: 'Conjunto amatista', price: 30, stock: 35 },
    { id: 4, name: 'Amatista en bruto', price: 30, stock: 17 },
    { id: 5, name: 'Collar Amatista', price: 30, stock: 4 },
    { id: 6, name: 'Perfumero', price: 30, stock: 2 }
  ];

  const productsJSON = JSON.stringify(products);
  const parsedProducts = JSON.parse(productsJSON);
  const productsContainer = document.getElementById('products-container');
  let totalPrice = 0

  parsedProducts.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('col-md-4', 'col-12', 'mb-4', 'parent-card');

    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
    productElement.appendChild(cardElement);

    const cardCoverElement = document.createElement('div');
    cardCoverElement.classList.add('card-cover');
    cardElement.appendChild(cardCoverElement);

    const cardImageElement = document.createElement('img');
    cardImageElement.classList.add('card-image');
    cardImageElement.setAttribute('src', '/assets/images/anillos2.jpg');
    cardImageElement.setAttribute('alt', product.name);
    cardCoverElement.appendChild(cardImageElement);

    const cardContentElement = document.createElement('div');
    cardContentElement.classList.add('card-content');
    cardElement.appendChild(cardContentElement);

    const nameProductElement = document.createElement('h3');
    nameProductElement.classList.add('name-product');
    nameProductElement.textContent = product.name;
    cardContentElement.appendChild(nameProductElement);

    const btnViewElement = document.createElement('a');
    btnViewElement.classList.add('btn-view');
    btnViewElement.textContent = 'Adquirir';
    //btnViewElement.setAttribute('href', '/views/contacto.html');
    btnViewElement.setAttribute('id', product.id)
    cardContentElement.appendChild(btnViewElement);

    productsContainer.appendChild(productElement);

    btnViewElement.addEventListener('click', function() {
      addToCart()
    });
    

    function addToCart() {
      const productId = product.id;
      console.log(product.id)
      
      const cart = document.getElementById('cart');

      const nameSelect = document.createElement('div');
      nameSelect.classList.add('name-select', 'col-8');
      nameSelect.textContent = product.name;

      const priceSelect = document.createElement('div');
      priceSelect.classList.add('price-select', 'col-4');
      priceSelect.textContent = '$'+product.price;

      totalPrice += product.price

      const total = document.getElementById('totalPrice');
      total.textContent = `Total: $${totalPrice}`;
      
      cart.appendChild(nameSelect);
      cart.appendChild(priceSelect);
      

      //const quantity = parseInt(document.getElementById('quantity').value);
      //const product = products.find(item => item.id == productId);
    
      /*if (product.stock >= quantity) {
        product.stock -= quantity;
        const cartItem = cart.find(item => item.product.id == productId);
        if (cartItem) {
          cartItem.quantity += quantity;
        } else {
          cart.push({ product: product, quantity: quantity });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        showCart();
      } else {
        const alert = document.getElementById('alert');
      alert.innerHTML = "Stock insuficiente"
      }*/
    }
  });
})

/*let cart = JSON.parse(localStorage.getItem('parent-card')) || [];


function showCart() {
  const cartList = document.getElementById('cart');
  cartList.innerHTML = '';

  cart.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `${item.quantity} x ${item.product.name} - $${item.product.price}`;
    cartList.appendChild(listItem);
  });

  const cartTotal = document.createElement('li');
  cartTotal.innerHTML = `Total: $${getCartTotal()}`;
  cartList.appendChild(cartTotal);
}

function getCartTotal() {
  let total = 0;
  cart.forEach(item => {
    total += item.quantity * item.product.price;
  });
  return total;
}

showCart();*/
