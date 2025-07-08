const products = [
    { name: "Apples", price: "₹120/kg", image: "https://source.unsplash.com/240x180/?apple" },
    { name: "Milk", price: "₹50/ltr", image: "https://source.unsplash.com/240x180/?milk" },
    { name: "Bread", price: "₹30/loaf", image: "https://source.unsplash.com/240x180/?bread" },
    { name: "Tomatoes", price: "₹40/kg", image: "https://source.unsplash.com/240x180/?tomato" }
];

const container = document.getElementById("product-list");

products.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <div class="card-body">
      <h3>${product.name}</h3>
      <p class="price">${product.price}</p>
      <button class="btn" onclick="addToCart('${product.name}')">Add to Cart</button>
    </div>
  `;
    container.appendChild(card);
});

function addToCart(item) {
    alert(`${item} added to cart!`);
}
