let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
const cartCountSpan = document.getElementById('cart-count');
const cartList = JSON.parse(localStorage.getItem('cartList')) || [];
const cartContainer = document.getElementById('cart-container');
let totalPrice = 0;
let totalItems = 0;

cartCountSpan.textContent = cartCount;

if (cartCount !== 0) {
  cartCountSpan.style.display = 'inline-block';
} else {
  cartCountSpan.style.display = 'none';
}

cartList.forEach(item => {
  const itemTemplate = `
    <div class="cart-item">
      <span class="item-index">${item.index}</span>
      <span class="item-price">${item.price}</span>
    </div>
  `;
  cartContainer.insertAdjacentHTML('beforeend', itemTemplate);
  if (item.price) {
    const priceWithoutDollar = item.price.replace('$', '');
    const priceFloat = parseFloat(priceWithoutDollar);
    if (!isNaN(priceFloat)) {
      totalPrice += priceFloat;
      totalItems++;
    }
  }
});

const totalPriceElement = document.createElement('div');
totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)} (${totalItems} items)`;
cartContainer.insertAdjacentElement('beforeend', totalPriceElement);