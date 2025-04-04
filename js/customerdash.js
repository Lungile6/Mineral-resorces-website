import { cartService, wishlistService } from './services/api.service';

// Add loading states
function showLoading(containerId) {
    document.querySelector(containerId).innerHTML = '<div class="loading">Loading...</div>';
}

function showError(containerId, message) {
    document.querySelector(containerId).innerHTML = `<div class="error">${message}</div>`;
}

// Load customer data when dashboard loads
async function loadCustomerDashboard() {
    showLoading('#cart-items');
    showLoading('#wishlist-items');

    try {
        const [cart, wishlist] = await Promise.all([
            cartService.getCart(),
            wishlistService.getWishlist()
        ]);

        updateCartDisplay(cart);
        updateWishlistDisplay(wishlist);

    } catch (error) {
        showError('#cart-items', 'Failed to load cart items');
        showError('#wishlist-items', 'Failed to load wishlist items');
        console.error('Error loading dashboard:', error);
    }
}

// Update cart display
function updateCartDisplay(cart) {
    const cartContainer = document.querySelector('#cart-items');
    if (cart.items && cart.items.length > 0) {
        cartContainer.innerHTML = cart.items.map(item => `
            <div class="cart-item">
                <h3>${item.product.name}</h3>
                <p>Quantity: ${item.quantity}</p>
                <p>Price: $${item.price}</p>
            </div>
        `).join('');
    } else {
        cartContainer.innerHTML = '<p>Your cart is empty</p>';
    }
}

// Update wishlist display
function updateWishlistDisplay(wishlist) {
    const wishlistContainer = document.querySelector('#wishlist-items');
    if (wishlist.items && wishlist.items.length > 0) {
        wishlistContainer.innerHTML = wishlist.items.map(item => `
            <div class="wishlist-item">
                <h3>${item.name}</h3>
                <p>Price: $${item.price}</p>
                <button onclick="moveToCart('${item._id}')">Add to Cart</button>
            </div>
        `).join('');
    } else {
        wishlistContainer.innerHTML = '<p>Your wishlist is empty</p>';
    }
}

// Add event listeners
document.addEventListener('DOMContentLoaded', loadCustomerDashboard); 