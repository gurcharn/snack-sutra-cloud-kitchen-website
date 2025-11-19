[![Netlify Status](https://api.netlify.com/api/v1/badges/b154e607-27da-4631-8e77-cda6f641aece/deploy-status)](https://app.netlify.com/projects/cloud-kitchen-website/deploys)

# 🍽️ CloudKitchen - Home-Style Food Template
A static, responsive website template for a home-based food business, featuring centralized content management and a functional ordering system.

## ✨ Key Features
* **Single Source of Truth:** All business text, hours, and contact info are managed in **`config.js`**.
* **Dynamic UI:** Business details, Footer content, and Reviews are automatically injected across all pages.
* **Mobile-Ready Menu:** Includes a **fixed header** and a **hamburger menu** for mobile devices.
* **Client-Side Cart:** Functional menu and shopping cart (`menu.js`) that generates a pre-filled **WhatsApp Order** message.
* **Reviews:** Dynamic calculation and rendering of **Average Rating** from data in `config.js`.

---

## 🚀 Setup & Execution
The project is currently deployed and live.

**Live Deployment URL:** [https://cloud-kitchen.techeireann.com/](https://cloud-kitchen.techeireann.com/)

### Content Management
1.  **Business Data:** Edit all text content and business details in **`config.js`**.
2.  **Menu Items:** Modify menu items and prices in the `const menuItems` object within **`menu.js`**.

### Local Testing
Due to JavaScript's `fetch` requirements, you must run this project using a local web server (e.g., VS Code Live Server or Python's `http.server`).

---

## ⚙️ Core Files
| File | Purpose |
| :--- | :--- |
| `config.js` | **Content Layer:** Stores all data and renders Header/Footer on load. |
| `menu.js` | **App Logic:** Handles menu display, cart functionality, and ordering. |
| `feedback.js` | **App Logic:** Calculates average rating and renders reviews. |
| `menu.css` | Global styling and mobile responsiveness. |

**Deployed on:** [Netlify](https://www.netlify.com)  
**License:** GSS & TechEireann