document.addEventListener('DOMContentLoaded', () => {
    // 1. Menu Data Structure (Same as before)
    const menuItems = kitchenConfig.menuItems;

    // 2. DOM Elements and State
    let cart = {}; 
    const cartSummary = document.getElementById('cart-summary');
    const itemCountElement = document.getElementById('item-count');
    const totalPriceElement = document.getElementById('total-price');
    const expandedCart = document.getElementById('expanded-cart');
    const cartItemList = document.getElementById('cart-item-list');
    const expandedTotalPrice = document.getElementById('expanded-total-price');
    const menuGrid = document.querySelector('.menu-grid');
    const whatsappNumber = kitchenConfig.business.whatsappNumber;

    // Delivery Detail Elements
    let customerDetails = {}; // NEW: Storage for name and address
    const customerNameInput = document.getElementById('customerName');
    const customerAddressInput = document.getElementById('customerAddress');
    const saveDetailsBtn = document.getElementById('saveDetailsBtn');
    const detailsStatus = document.getElementById('detailsStatus');

    // 3. Helper Functions

    function findItemById(itemId) {
        for (const category in menuItems) {
            const item = menuItems[category].find(i => i.id === itemId);
            if (item) return item;
        }
        return null;
    }

    // --- 4. DELIVERY DETAILS LOGIC (New Functions) ---

    function saveCustomerDetails() {
        const name = customerNameInput.value.trim();
        const address = customerAddressInput.value.trim();

        if (!name || !address) {
            detailsStatus.textContent = "! Please enter both Name and Address.";
            detailsStatus.style.color = '#e74c3c'; // ERROR Color -> Red
            return;
        }

        customerDetails = { name, address };
        
        detailsStatus.textContent = '✅ Delivery Details saved successfully!';
        detailsStatus.style.color = '#27ae60'; // Green
    }

    // --- Menu Rendering and Toggling ---

    function renderMenu() {
        for (const category in menuItems) {
            const categorySection = document.createElement('div');
            categorySection.classList.add('menu-category');

            // Category Header (Clickable for minimizing)
            const categoryHeader = document.createElement('div');
            categoryHeader.classList.add('category-header');
            categoryHeader.innerHTML = `
                <h3 class="category-heading">${category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                <span class="toggle-icon">▼</span>
            `;
            categoryHeader.addEventListener('click', toggleMenuSection);
            categorySection.appendChild(categoryHeader);

            const itemsContainer = document.createElement('div');
            itemsContainer.classList.add('category-items');

            menuItems[category].forEach(item => {
                const itemCard = createMenuItemCard(item);
                itemsContainer.appendChild(itemCard);
            });

            categorySection.appendChild(itemsContainer);
            menuGrid.appendChild(categorySection);
        }
    }

    function createMenuItemCard(item) {
        const itemCard = document.createElement('div');
        itemCard.classList.add('menu-card');
        itemCard.setAttribute('data-id', item.id);

        itemCard.innerHTML = `
            <div class="item-image-container">
                <img src="${item.image}" alt="${item.name}" class="item-image">
                <span class="item-price">€${item.price}</span>
            </div>
            <div class="item-content">
                <h4 class="item-name">${item.name}</h4>
                <p class="item-description">${item.description}</p>
                <div class="quantity-controls">
                    <div class="quantity-input-group">
                        <button class="qty-btn decrease-qty" data-id="${item.id}">-</button>
                        <span class="qty-display" id="qty-${item.id}">${cart[item.id] || 0}</span>
                        <button class="qty-btn increase-qty" data-id="${item.id}">+</button>
                    </div>
                </div>
            </div>
        `;
        return itemCard;
    }

    function toggleMenuSection(event) {
        const header = event.currentTarget;
        const itemsContainer = header.nextElementSibling;
        const icon = header.querySelector('.toggle-icon');

        itemsContainer.classList.toggle('collapsed');
        icon.textContent = itemsContainer.classList.contains('collapsed') ? '►' : '▼';
    }


    // --- Cart Management Functions ---

    function updateQtyDisplay(itemId, quantity) {
        // Update quantity display on the main menu cards
        const qtyDisplays = document.querySelectorAll(`#qty-${itemId}`);
        qtyDisplays.forEach(el => el.textContent = quantity);
    }

    function updateCartSummary() {
        let totalItems = 0;
        let totalPrice = 0;

        for (const itemId in cart) {
            if (cart[itemId] > 0) {
                const item = findItemById(itemId);
                totalItems += cart[itemId];
                totalPrice += cart[itemId] * item.price;
            }
        }

        itemCountElement.textContent = `${totalItems} Items`;
        totalPriceElement.textContent = `€${totalPrice}`;
        expandedTotalPrice.textContent = `€${totalPrice}`;

        // Show/hide the sticky cart summary
        cartSummary.classList.toggle('hidden', totalItems === 0);
        
        // Re-render expanded cart list whenever summary is updated
        renderExpandedCart();
    }

    function handleCartAction(event) {
        const button = event.target.closest('.qty-btn');
        if (!button) return;

        const itemId = button.getAttribute('data-id');
        let currentQty = cart[itemId] || 0;
        let change = button.classList.contains('increase-qty') ? 1 : -1;
        
        currentQty = Math.max(0, currentQty + change);

        if (currentQty > 0) {
            cart[itemId] = currentQty;
        } else {
            delete cart[itemId]; 
        }

        updateQtyDisplay(itemId, currentQty);
        updateCartSummary();
    }
    
    // --- Expanded Cart Functions ---
    
    window.toggleExpandedCart = function() {
        expandedCart.classList.toggle('hidden');
        if (!expandedCart.classList.contains('hidden')) {
            renderExpandedCart();
        }
    }

    function renderExpandedCart() {
        cartItemList.innerHTML = '';
        const itemsInCart = Object.keys(cart).filter(id => cart[id] > 0);

        if (itemsInCart.length === 0) {
            cartItemList.innerHTML = '<p class="empty-cart-message">Your cart is empty. Add some delicious food!</p>';
            return;
        }

        itemsInCart.forEach(itemId => {
            const item = findItemById(itemId);
            const quantity = cart[itemId];
            const subtotal = quantity * item.price;

            const cartItemEl = document.createElement('div');
            cartItemEl.classList.add('cart-item');
            cartItemEl.setAttribute('data-id', itemId);

            cartItemEl.innerHTML = `
                <div class="cart-item-details">
                    <p class="cart-item-name">${item.name}</p>
                    <p class="cart-item-price">€${item.price} each</p>
                </div>
                <div class="cart-item-controls">
                    <div class="quantity-input-group">
                        <button class="qty-btn decrease-qty" data-id="${item.id}">-</button>
                        <span class="qty-display" id="qty-${item.id}">${quantity}</span>
                        <button class="qty-btn increase-qty" data-id="${item.id}">+</button>
                    </div>
                    <span class="cart-item-subtotal" style="margin-left: 15px; width: 60px; text-align: right;">€${subtotal}</span>
                </div>
            `;
            cartItemList.appendChild(cartItemEl);
        });
        
        // Attach action listener to the newly rendered items
        cartItemList.removeEventListener('click', handleCartAction);
        cartItemList.addEventListener('click', handleCartAction);
    }
    
    window.clearCart = function() {
        if (confirm("Are you sure you want to clear your entire cart?")) {
            // Set all quantities on the main menu display to 0
            for (const itemId in cart) {
                updateQtyDisplay(itemId, 0);
            }
            
            cart = {};
            updateCartSummary();
            toggleExpandedCart(); // Close the cart after clearing
        }
    }

    window.generateWhatsAppOrder = function() {
        saveCustomerDetails(); // Ensure details are saved before proceeding

        // 1. Check if Details are saved (NEW CHECK)
        if (!customerDetails.name || !customerDetails.address) {
            alert("❗ Please enter Delivery Details abefore placing your order ❗");
            return; 
        }

        // 2. Check if Cart is empty
        const itemsInCart = Object.keys(cart).filter(id => cart[id] > 0);
        if (itemsInCart.length === 0) {
            alert("Your cart is empty! Please add items before placing an order.");
            return;
        }

        // 3. Prepend saved details (NEW CONTENT)
         
        let orderMessage = "Hello " + kitchenConfig.business.name + ",\n\nI would like to place an order for the following items:\n\n";
        orderMessage += "--- Delivery Details ---\n";
        orderMessage += `Customer Name: ${customerDetails.name}\n`;
        orderMessage += `Address: ${customerDetails.address}\n`;
        orderMessage += "\n--- Order Details ---\n\n";

        let totalPrice = 0;
        let itemCounter = 1;

        itemsInCart.forEach(itemId => {
            const quantity = cart[itemId];
            const item = findItemById(itemId);
            const subtotal = quantity * item.price;
            orderMessage += `${itemCounter}. ${item.name} (x${quantity}) - €${subtotal}\n`;
            totalPrice += subtotal;
            itemCounter++;
        });
        
        orderMessage += `\nTotal Price: €${totalPrice}\n\nPlease confirm the total and payment details. Thank you!`;
        orderMessage += `\n\n--- Powered By TechEireann ---`;
        orderMessage += `\n--- https://www.techeireann.com/ ---`;

        const encodedMessage = encodeURIComponent(orderMessage);
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        window.open(whatsappURL, '_blank');
    }

    // 4. Initialization
    renderMenu();
    updateCartSummary(); 

    // Attach event listener to the main menu grid
    menuGrid.addEventListener('click', handleCartAction);
    saveDetailsBtn.addEventListener('click', saveCustomerDetails);
});