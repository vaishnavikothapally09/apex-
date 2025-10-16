const products = [
  { id: 1, name: "Wireless Headphones", price: 2499, rating: 4.5, img: "https://media.istockphoto.com/id/1372906882/photo/modern-blue-wireless-headphones-isolated-on-white-background-with-clipping-path.jpg?s=612x612&w=0&k=20&c=0k-2JFElEQ0QTvXsgtLx3i2JotQo_Eb8aEwyN-BOZjA=" },
  { id: 2, name: "Smart Watch", price: 4999, rating: 4.7, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH_LAKWe29DvMg2d_3LkTlllWQmWIbiZWokw&s" },
  { id: 3, name: "Bluetooth Speaker", price: 1799, rating: 4.3, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkzm330_QXVLpQJnT6jKW3ixSYYI9Vka9t6Q&s" },
  { id: 4, name: "Digital Camera", price: 18999, rating: 4.6, img: "https://in.canon/media/image/2018/11/19/b639ce271d2b450c974112ee3a7246ba_PowerShot-SX70-HS-Front-Slant.png" },
  { id: 5, name: "Laptop Stand", price: 899, rating: 4.2, img: "https://m.media-amazon.com/images/I/71cOnHXOg9L.jpg" },
  { id: 6, name: "Gaming Mouse", price: 1499, rating: 4.8, img: "https://m.media-amazon.com/images/I/61Ahjsi1iOL.jpg" },
  { id: 7, name: "Mechanical Keyboard", price: 3299, rating: 4.5, img: "https://m.media-amazon.com/images/I/41mPRcL0fbL._SY1000_.jpg" },
  { id: 8, name: "USB-C Hub", price: 1299, rating: 4.1, img: "https://m.media-amazon.com/images/I/71p2z8+KEsL.jpg" },
  { id: 9, name: "Portable Charger", price: 1099, rating: 4.4, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkamgBIsCHZz97isI5oZbSvUKfVRw8kncqGQ&s" },
  { id: 10, name: "Smartphone Gimbal", price: 7999, rating: 4.6, img: "https://m.media-amazon.com/images/I/61Byjkg0ZhL.jpg" },
  { id: 11, name: "Action Camera", price: 9999, rating: 4.5, img: "https://images.pexels.com/photos/34060598/pexels-photo-34060598/free-photo-of-compact-action-camera-on-tripod-outdoors.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" },
  { id: 12, name: "VR Headset", price: 14999, rating: 4.7, img: "https://cdn.thewirecutter.com/wp-content/media/2024/10/vrheadsets-2048px-08406.jpg" },
  { id: 13, name: "Noise Cancelling Earbuds", price: 3499, rating: 4.6, img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcThKOl2maNp4lVt811AjdggpQnn36S1bHgOxAZAHTUpZHWUhxCHIcAtaErbmmanG3Bj0EVdTEPC3hOZUlG4YpsiJoYLXt0VdWOzzUTOMDErGayC4JoKl_XiMgsT1-xR0MsE844Th-g&usqp=CAc" },
  { id: 14, name: "Smart Light Bulb", price: 599, rating: 4.2, img: "https://m.media-amazon.com/images/I/61vN5ySYjJL._UF350,350_QL80_.jpg" },
  { id: 15, name: "Fitness Tracker", price: 1999, rating: 4.3, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJOgQg27tWbpnNBHqQjzj0PtQOHpDJ22xztQ&s" },
  { id: 16, name: "Earbuds", price: 1800, rating: 4.3, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGJGa12nJjGiXLT4L1_jyBBMiPsBAAVIVOpw&s" },
  { id: 17, name: "Tablet", price: 30000, rating: 4.7, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1qb4GEm-xLi_4WQnZeBcumEq4tB3gj-dWsw&s" },
  { id: 18, name: "T-Shirt", price: 800, rating: 4.0, img: "https://d2fy0k1bcbbnwr.cloudfront.net/Designs_Inners_and_Outers/Tshirts/Men/tshirt_hs_men_pat_d48_o.jpg" },
  { id: 19, name: "Jeans",price: 1200, rating: 4.2, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrF0m7ZSfgaN_gQj3FGdnsM7kb9458ErZjjA&s" },
  { id: 20, name: "Hoodie", price: 1600, rating: 4.5, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLMWLwmD91R2tKZiVP2otgO7sr7gk50XhdMA&s" },
  { id: 21, name: "Jacket", price: 2500, rating: 4.6, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt_Km-BBj2ErK9ni3t7NO1vzHsnmd3LQDkYg&s" },
  { id: 22, name: "Shoes", price: 2000, rating: 4.3, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgJ3YCAJA4nxQpJuYwAsYo86XMwCLigQsIQg&s" },
  { id: 23, name: "Watch", price: 3000, rating: 4.7, img: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwb830e1d4/images/Titan/Catalog/1805QM04_1.jpg?sw=600&sh=600" },
  { id: 24, name: "Sunglasses", price: 1200, rating: 4.1, img: "https://cdn.aarp.net/content/dam/aarp/health/healthy-living/2019/04/1140-sunglasses.jpg" },
  { id: 25, name: "Backpack", price: 1800, rating: 4.3, img: "https://icon.in/cdn/shop/files/1_50b8664b-0c2b-477a-9d86-ed6fce060859.jpg?v=1756985540&width=1946" },
  { id: 26, name: "Cap", price: 500, rating: 4.0, img: "https://m.media-amazon.com/images/I/41zi2pa-j3L._UY1100_.jpg" },
  { id: 27, name: "Belt", price: 700, rating: 4.2, img: "https://m.media-amazon.com/images/I/71KCjw8zzlL._UY1100_.jpg" },
];

const productList = document.getElementById('product-list');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const total = document.getElementById('total');
const searchInput = document.getElementById('search');
const clearCartBtn = document.getElementById('clear-cart');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Render products dynamically
function displayProducts(filter = '') {
  const filtered = products.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()));
  productList.innerHTML = filtered.map(p => `
    <div class="product">
      <img src="${p.img}" loading="lazy" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>Price: ${p.price}</p>
      <p class="rating">Rating: ${p.rating} ⭐</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    </div>
  `).join('');
}

// Add item to cart
function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  saveCart();
  updateCart();
}

// Remove item from cart
function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  updateCart();
}

// Update cart display
function updateCart() {
  cartItems.innerHTML = cart.map((item, index) => `
    <li class="cart-item">
      ${item.name} - ${item.price} (${item.rating}⭐)
      <button onclick="removeFromCart(${index})">Remove</button>
    </li>
  `).join('');
  cartCount.textContent = cart.length;
  total.textContent = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
}

// Save cart to localStorage
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Clear cart completely
clearCartBtn.addEventListener('click', () => {
  cart = [];
  saveCart();
  updateCart();
});

// Search products dynamically
searchInput.addEventListener('input', (e) => displayProducts(e.target.value));

// Initialize app
displayProducts();
updateCart();
