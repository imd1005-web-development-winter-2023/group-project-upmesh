let cartCount = 0;
const cartCountSpan = document.getElementById('cart-count');

const addToCartButtons = document.querySelectorAll('.addToCart');

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    cartCount++;
    cartCountSpan.textContent = cartCount;

    if (cartCount !== 0) {
      cartCountSpan.style.display = 'inline-block';
    } else {
      cartCountSpan.style.display = 'none';
    }
  });
});