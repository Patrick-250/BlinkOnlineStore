// Cart array to store items
let cart = [];
let totalPrice = 0; // Variable to store the total price

// Add event listener to all "Add to cart" buttons
const addToCartButtons = document.querySelectorAll('.addToCart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCartAndUpdateTotal);
});

// Function to add item to cart and update total price
function addToCartAndUpdateTotal(event) {
    event.preventDefault();
    const name = event.target.dataset.name;
    const price = parseFloat(event.target.dataset.price);
    const item = { name, price };
    cart.push(item);
    totalPrice += price; // Update total price
    updateCartDisplay(); // Update the displayed cart items and total price
}

// Function to delete item from cart and update total price
function deleteItemAndUpdateTotal(event) {
    const indexToDelete = parseInt(event.target.dataset.index);
    const deletedItemPrice = cart[indexToDelete].price;
    cart.splice(indexToDelete, 1);
    totalPrice -= deletedItemPrice; // Update total price
    updateCartDisplay(); // Update the displayed cart items and total price
}

// Function to update the displayed cart items and total price
function updateCartDisplay() {
    const cartItemsElement = document.getElementById('cart-items');
    cartItemsElement.innerHTML = ''; // Clear existing cart items
    
    // Re-render cart items
    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;

        // Add delete button
        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn btn-outline-danger btn-sm float-end delete';
        deleteButton.textContent = 'Delete';
        deleteButton.dataset.index = index;

        deleteButton.addEventListener('click', deleteItemAndUpdateTotal);

        listItem.appendChild(deleteButton);
        cartItemsElement.appendChild(listItem);
    });

    // Update total price display
    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
}
