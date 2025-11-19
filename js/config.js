/**
 * CLOUD KITCHEN BUSINESS CONFIGURATION FILE (config.js)
 * Holds all static data and handles the rendering of common page elements.
 */
const kitchenConfig = {
    // --- Business Details ---
    business: {
        name: "SnackSutra",
        tagline: "Taste the Tradition",
        addressLine1: "Newbridge, Co. Kildare",
        addressLine2: "Ireland",
        contactNumber: "+353 89 944 2661",
        whatsappNumber: "+353899442661",
        email: "no-reply@email.com",
    },

    // --- Operations & Hours ---
    operations: {
        days: "Every Saturday",
        hours: "12:00 AM - 5:00 PM",
        orderInfo: "Order in advance for pickup/delivery.",
        preOrderText: "**Pre-order now for this Saturday!**\nWhatsapp orders accepted till Friday evening",
    },

    // --- Social Media Links ---
    social: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
        twitter: "https://x.com/",
    },

    // --- Homepage (index.html) Specific Content ---
    home: {
        heroTag: "Every Saturday • Fresh & Homemade",
        heroTitle1: "Authentic",
        heroTitle2: "Indian Street Food",
        heroTitle3: "Made with Love",
        heroDescription: "Experience the flavors of street food, prepared fresh every Saturday in our home kitchen.",
        heroImage: "assets/hero-image.png",
        heroImageAlt: "Chef Image",
        footerAbout: "Bringing authentic street food flavors to your doorstep, one Saturday at a time. Made with love in our home kitchen.",
        copyright: "© 2025 SnackSutra. Made with ❤️ by a passionate home chef. All rights reserved.",
    },

    // --- Menu Page (menu.html) Specific Content ---
    menuItems: {
        Deals: [
            { id: 'deal_vada_pav', name: '2 Box - Vada Pav', description: 'Mumbai\'s iconic spicy potato fritter in soft bun with chutneys', price: 10, image: 'assets/vada-pav.png' },
            { id: 'deal_dabeli', name: '2 Pieces - Dabeli', description: 'Kutchi specialty with spiced potatoes, sev, and peanuts', price: 12, image: 'assets/dabeli.png' },
        ],
        mains: [
            { id: 'vada_pav', name: 'Vada Pav', description: 'Mumbai\'s iconic spicy potato fritter in soft bun with chutneys', price: 6, image: 'assets/vada-pav.png' },
            { id: 'dabeli', name: 'Dabeli', description: 'Kutchi specialty with spiced potatoes, sev and peanuts', price: 7, image: 'assets/dabeli.png' },
        ],
        // desserts: [
        //     { id: 'gulab_jamun', name: 'Gulab Jamun (2 pcs)', description: 'Deep-fried milk solids soaked in sweet, rose-flavored syrup', price: 50, image: 'assets/vada-pav.jpg' },
        //     { id: 'rasgulla', name: 'Rasgulla (2 pcs)', description: 'Spongy cheese balls soaked in light sugar syrup', price: 50, image: 'assets/vada-pav.jpg' },
        // ],
        // sides: [
        //     { id: 'yogurt_dip', name: 'Mint Yogurt Dip', description: 'Cool and refreshing yogurt dip with fresh mint', price: 20, image: 'assets/vada-pav.jpg' },
        //     { id: 'spicy_chutney', name: 'Spicy Garlic Chutney', description: 'Extra hot and tangy chutney, great with Vada Pav', price: 10, image: 'assets/vada-pav.jpg' },
        // ]
    },

    reviews: [
        {
            name: "Aoife M.",
            rating: 5,
            date: "15/11/2025",
            comment: "The Vada Pav reminds me of Mumbai streets! Absolutely authentic and delicious. Can't wait for next Saturday!",
        },
        {
            name: "Conor O.",
            rating: 5,
            date: "08/11/2025",
            comment: "Best homemade Vada Pav I've had! The spices are perfectly balanced. You can taste the love in every bite.",
        }, {
            name: "Liam K.",
            rating: 5,
            date: "29/10/2025",
            comment: "Finally found authentic Dabeli! Takes me back to Gujarat. The lady makes it with so much care and passion.",
            source: "Website Feedback"
        },
        {
            name: "Niamh D.",
            rating: 4,
            date: "22/10/2025",
            comment: "Fresh, hygienic, and incredibly tasty! The Dabeli is restaurant quality. Highly recommend!",
            source: "Instagram DM"
        }
    ]
};
