//Collapsing navbar

const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  })
}

//cart

if (window.location.pathname === '/index.html') {
  localStorage.removeItem('cartCount');
  localStorage.removeItem('cartItems');
}

let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
const cartCountSpan = document.getElementById('cart-count');
const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

const addToCartButtons = document.querySelectorAll('.addToCart');

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const card = button.closest('.card');
    cartCount++;
    localStorage.setItem('cartCount', cartCount);
    cartCountSpan.textContent = cartCount;

    cartItems.push(card);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    if (cartCount !== 0) {
      cartCountSpan.style.display = 'inline-block';
    } else {
      cartCountSpan.style.display = 'none';
    }
  });
});

function displayCartItems() {
  const cartItemsElement = document.getElementById('cart-items');
  cartItemsElement.innerHTML = '';

  cartItems.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('cart-item');

    const itemName = item.querySelector('.card-title').textContent;
    const itemPrice = item.querySelector('.card-price').textContent;

    const nameElement = document.createElement('h2');
    nameElement.textContent = itemName;

    const priceElement = document.createElement('p');
    priceElement.textContent = itemPrice;

    itemElement.appendChild(nameElement);
    itemElement.appendChild(priceElement);

    cartItemsElement.appendChild(itemElement);
  });

  document.getElementById('cart-count').textContent = cartCount;
}

displayCartItems();
