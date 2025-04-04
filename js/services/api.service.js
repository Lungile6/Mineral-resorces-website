import { config } from '../config';

// Authentication
export const authService = {
    login: async (credentials) => {
        const response = await fetch(`${config.apiUrl}/signin`, {
            method: 'POST',
            headers: config.headers,
            body: JSON.stringify(credentials)
        });
        return response.json();
    },
    
    register: async (userData) => {
        const response = await fetch(`${config.apiUrl}/signup`, {
            method: 'POST',
            headers: config.headers,
            body: JSON.stringify(userData)
        });
        return response.json();
    }
};

// Cart Management
export const cartService = {
    getCart: async () => {
        const response = await fetch(`${config.apiUrl}/cart`, {
            headers: {
                ...config.headers,
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.json();
    },

    addToCart: async (productData) => {
        const response = await fetch(`${config.apiUrl}/cart`, {
            method: 'POST',
            headers: {
                ...config.headers,
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(productData)
        });
        return response.json();
    }
};

// Wishlist Management
export const wishlistService = {
    getWishlist: async () => {
        const response = await fetch(`${config.apiUrl}/wishlist`, {
            headers: {
                ...config.headers,
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        return response.json();
    },

    addToWishlist: async (productId) => {
        const response = await fetch(`${config.apiUrl}/wishlist`, {
            method: 'PATCH',
            headers: {
                ...config.headers,
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ productId })
        });
        return response.json();
    }
}; 