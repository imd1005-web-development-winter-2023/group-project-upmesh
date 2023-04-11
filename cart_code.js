let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
const cartCountSpan = document.getElementById('cart-count');
const cartList = JSON.parse(localStorage.getItem('cartList')) || [];
const cartContainer = document.getElementById('cart-container');

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
});
