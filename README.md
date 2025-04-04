# Raw to Richies Africa
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Overview
Raw to Richies Africa is an innovative e-commerce platform dedicated to connecting African countries through the trade of natural resources and raw materials. Our mission is to promote sustainable practices, support local artisans, and enhance economic growth across the continent.

## Features
- **Diverse Product Categories:** Explore a wide range of products, including raw materials, natural resources, and handcrafted goods.
- **User-Friendly Interface:** Intuitive navigation and search functions to enhance the shopping experience.
- **Secure Transactions:** Multiple payment options with secure checkout processes.
- **Sustainability Focus:** Commitment to ethical sourcing and environmental responsibility.
- **Artisan Support:** Highlighting local artisans and their craftsmanship to preserve traditional practices.

## Product Categories
1. **Raw Materials**
    - Minerals (e.g., gold, copper)
    - Agricultural products (e.g., cocoa, grains)

2. **Natural Resources**
    - Timber (e.g., teak, mahogany)
    - Oils (e.g., palm oil, essential oils)

3. **Handcrafted Goods**
    - Textiles (e.g., Kente cloth, batik)
    - Jewelry (e.g., beaded pieces, silverwork)

## Local Development Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- Git

### Installation Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/Lungile6/Mineral-resorces-website.git
   cd Mineral-resorces-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   MONGODB_URI=mongodb://localhost:27017/mineral_resources
   PORT=5000
   JWT_SECRET=your_secure_secret_here
   ```
   Note: Replace `your_secure_secret_here` with a strong secret key for JWT authentication.

4. Start MongoDB:
   - Make sure MongoDB is running on your system
   - For macOS: `brew services start mongodb-community`
   - For Windows: Ensure MongoDB service is running
   - For Linux: `sudo systemctl start mongod`

5. Run the application:
   - For development (with hot-reload):
     ```bash
     npm run dev
     ```
   - For production:
     ```bash
     npm start
     ```

6. Access the application:
   - Frontend: Open `index.html` in your browser
   - Backend API: `http://localhost:5000`
   - API Health Check: `http://localhost:5000/api/health`

### Available API Endpoints
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user and get JWT token

### Testing the API
You can test the API endpoints using tools like Postman or curl:

Register a new user:
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"yourpassword"}'
```

Login:
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@example.com","password":"yourpassword"}'
```

## Getting Started (Production)
To begin exploring our offerings:
1. Visit our website: [Raw to Richies Africa](https://lungile6.github.io/Mineral-resorces-website/)
2. Browse through the product categories or use the search function to find specific items.
3. Create an account to manage your orders and track shipments.
4. Add items to your cart and proceed to checkout for a secure payment experience.

## Contact Us
For inquiries, partnerships, or customer support, please reach out to us:
- Email: support@rawtorichiesafrica.com
- Phone: +123-456-7890
- Follow us on social media: [Facebook](http://facebook.com/rawtorichiesafrica) | [Instagram](http://instagram.com/rawtorichiesafrica)

## Contributing
We welcome contributions and suggestions to improve our platform. Please reach out via email for collaboration opportunities.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Thank you for supporting Raw to Richies Africa and helping us connect Africa's natural wealth to the world!
