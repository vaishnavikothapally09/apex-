const products = [
  // Electronics
  { name: "Smartphone", category: "electronics", price: 15000, rating: 4.5, image: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-m33-1.jpg" },
  { name: "Laptop", category: "electronics", price: 55000, rating: 4.8, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDwOC6_XLG0gr4PCKqb1CzYd1SzD6yb39CkA&s" },
  { name: "Bluetooth Speaker", category: "electronics", price: 2200, rating: 4.4, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkzm330_QXVLpQJnT6jKW3ixSYYI9Vka9t6Q&s" },
  { name: "Smartwatch", category: "electronics", price: 4000, rating: 4.6, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH_LAKWe29DvMg2d_3LkTlllWQmWIbiZWokw&s" },
  { name: "Earbuds", category: "electronics", price: 1800, rating: 4.3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGJGa12nJjGiXLT4L1_jyBBMiPsBAAVIVOpw&s" },
  { name: "Tablet", category: "electronics", price: 30000, rating: 4.7, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1qb4GEm-xLi_4WQnZeBcumEq4tB3gj-dWsw&s" },

  // Clothing
  { name: "T-Shirt", category: "clothing", price: 800, rating: 4.0, image: "https://d2fy0k1bcbbnwr.cloudfront.net/Designs_Inners_and_Outers/Tshirts/Men/tshirt_hs_men_pat_d48_o.jpg" },
  { name: "Jeans", category: "clothing", price: 1200, rating: 4.2, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrF0m7ZSfgaN_gQj3FGdnsM7kb9458ErZjjA&s" },
  { name: "Hoodie", category: "clothing", price: 1600, rating: 4.5, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLMWLwmD91R2tKZiVP2otgO7sr7gk50XhdMA&s" },
  { name: "Jacket", category: "clothing", price: 2500, rating: 4.6, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt_Km-BBj2ErK9ni3t7NO1vzHsnmd3LQDkYg&s" },
  { name: "Shoes", category: "clothing", price: 2000, rating: 4.3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgJ3YCAJA4nxQpJuYwAsYo86XMwCLigQsIQg&s" },

  // Accessories
  { name: "Watch", category: "accessories", price: 3000, rating: 4.7, image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwb830e1d4/images/Titan/Catalog/1805QM04_1.jpg?sw=600&sh=600" },
  { name: "Sunglasses", category: "accessories", price: 1200, rating: 4.1, image: "https://cdn.aarp.net/content/dam/aarp/health/healthy-living/2019/04/1140-sunglasses.jpg" },
  { name: "Backpack", category: "accessories", price: 1800, rating: 4.3, image: "https://icon.in/cdn/shop/files/1_50b8664b-0c2b-477a-9d86-ed6fce060859.jpg?v=1756985540&width=1946" },
  { name: "Cap", category: "accessories", price: 500, rating: 4.0, image: "https://m.media-amazon.com/images/I/41zi2pa-j3L._UY1100_.jpg" },
  { name: "Belt", category: "accessories", price: 700, rating: 4.2, image: "https://m.media-amazon.com/images/I/71KCjw8zzlL._UY1100_.jpg" },

  // Home Appliances
  { name: "Mixer Grinder", category: "home", price: 3500, rating: 4.5, image: "https://myborosil.com/cdn/shop/files/my-borosil-mixer-grinders-borosil-infinity-mixer-grinder-4-jars-33776914006154.jpg?v=1710931641" },
  { name: "Air Fryer", category: "home", price: 8000, rating: 4.6, image: "https://m.media-amazon.com/images/I/81UnVRZkvbL._UF894,1000_QL80_.jpg" },
  { name: "Vacuum Cleaner", category: "home", price: 6000, rating: 4.4, image: "https://m.media-amazon.com/images/I/71dC1Q6EXiL._UF894,1000_QL80_.jpg" },
  { name: "Iron Box", category: "home", price: 1500, rating: 4.1, image: "https://oxygendigitalshop.com/media/catalog/product/1/_/1_366.jpg?width=2500&quality=90" },
  { name: "Microwave Oven", category: "home", price: 10000, rating: 4.7, image: "https://media.istockphoto.com/id/489937746/photo/microwave-stove-isolated.jpg?s=612x612&w=0&k=20&c=vUi8YaHdjDvVHJPXCcYHrWkELl1l8GLpGTg2hUl35V4=" }
];

const container = document.getElementById("productContainer");
const categoryFilter = document.getElementById("categoryFilter");
const sortOption = document.getElementById("sortOption");

function displayProducts(items) {
  container.innerHTML = "";
  items.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>Category: ${p.category}</p>
      <p class="price">Price: ₹${p.price}</p>
      <p class="rating">⭐ ${p.rating}</p>
    `;
    container.appendChild(card);
  });
}

function filterAndSort() {
  let filtered = [...products];
  const category = categoryFilter.value;
  const sort = sortOption.value;

  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  if (sort === "priceLow") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "priceHigh") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sort === "ratingHigh") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  displayProducts(filtered);
}

categoryFilter.addEventListener("change", filterAndSort);
sortOption.addEventListener("change", filterAndSort);

displayProducts(products);