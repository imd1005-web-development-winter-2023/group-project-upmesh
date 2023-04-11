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

let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
const cartCountSpan = document.getElementById('cart-count');

const addToCartButtons = document.querySelectorAll('.addToCart');
const cartList = [];

// Reset cartCount and cartList when page loads
window.addEventListener('load', () => {
  cartCount = 0;
  cartCountSpan.style.display = 'none';
  localStorage.removeItem('cartCount');
  localStorage.removeItem('cartList');
});

addToCartButtons.forEach((button, index) => {
  const parent = button.parentNode;
  const price = parent.querySelector('.Cost').textContent;
  const grandparent = button.parentNode.parentNode;
  //const bookTitle = grandparent.querySelector('.bookTitle').textContent;

  button.addEventListener('click', () => {
    cartCount++;
    cartCountSpan.textContent = cartCount;

    if (cartCount !== 0) {
      cartCountSpan.style.display = 'inline-block';
    } else {
      cartCountSpan.style.display = 'none';
    }

    cartList.push({index, price});
    localStorage.setItem('cartCount', cartCount);
    localStorage.setItem('cartList', JSON.stringify(cartList));

    console.log('Item added to cart:', {index, price});
  });
});