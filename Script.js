const products = [
    { id: 1, name: "Wireless Headphones", price: 3500 },
    { id: 2, name: "Smart Watch", price: 4500 },
    { id: 3, name: "Running Shoes", price: 2800 },
    { id: 4, name: "Travel Backpack", price: 2200 },
    { id: 5, name: "Coffee Mug", price: 500 }
];

function displayProducts() {
    products.forEach(product => {
        console.log(
            product.id,
            product.name,
            "Rs. " + product.price
        );
    });
}

displayProducts();
