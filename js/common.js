function renderStaticCommonConfig() {
    const config = kitchenConfig;

    // --- Header and General Elements ---
    document.querySelectorAll('.logo-name').forEach(el => {
        if (el) el.textContent = config.business.name;
    });
    const taglineEl = document.querySelector('.logo-tagline');
    if (taglineEl) taglineEl.textContent = config.business.tagline;

    // Logo Taglines
    document.querySelector('.logo-tagline').textContent = config.business.tagline;

    // --- Footer Section ---

    // Footer About
    const footerAboutEl = document.querySelector('.footer-block.about-us p');
    if (footerAboutEl) footerAboutEl.textContent = config.home.footerAbout;

    // Contact Information: **CRITICAL FIX HERE**
    const addressEl = document.querySelector('.footer-block.contact-us .contact-item:nth-child(2) p');
    const phoneEl = document.querySelector('.footer-block.contact-us .contact-item:nth-child(3) p');
    const emailEl = document.querySelector('.footer-block.contact-us .contact-item:nth-child(4) p');

    // Note: The index selection changes because nth-child(1) is the first .contact-item,
    // which contains the address. nth-child(2) contains the phone, etc.
    if (addressEl) addressEl.innerHTML = `${config.business.addressLine1}<br>${config.business.addressLine2}`;
    if (phoneEl) phoneEl.textContent = config.business.contactNumber;
    if (emailEl) emailEl.textContent = config.business.email;


    // Operating Hours
    const operatingLabelEl = document.querySelector('.operating-label');
    if (operatingLabelEl) operatingLabelEl.textContent = `🕑 ${config.operations.days}`;

    const operatingHoursEl = document.querySelector('.operating-hours p:nth-child(2)');
    if (operatingHoursEl) operatingHoursEl.textContent = config.operations.hours;

    const orderInfoEl = document.querySelector('.order-info');
    if (orderInfoEl) orderInfoEl.textContent = config.operations.orderInfo;

    const preOrderTextEl = document.querySelector('.pre-order-text');
    if (preOrderTextEl) preOrderTextEl.innerHTML = config.operations.preOrderText.replace(/\n/g, '<br>');

    // Copyright
    const copyrightEl = document.querySelector('.copyright p');
    if (copyrightEl) copyrightEl.textContent = config.home.copyright;

    // Social Media Links (Use simple querySelectorAll for robustness)
    const socialLinks = document.querySelectorAll('.social-links a');
    if (socialLinks.length >= 3) {
        socialLinks[0].href = config.social.facebook;
        socialLinks[1].href = config.social.instagram;
        socialLinks[2].href = config.social.twitter;
    }
}

document.addEventListener('DOMContentLoaded', renderStaticCommonConfig);

// --- Hamburger Menu Toggle Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            
            // Optional: Change the hamburger icon to an 'X'
            if (navMenu.classList.contains('open')) {
                menuToggle.innerHTML = '&#10005;'; // X symbol
                menuToggle.setAttribute('aria-expanded', 'true');
            } else {
                menuToggle.innerHTML = '&#9776;'; // Hamburger symbol
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });

        // Close the menu when a link is clicked (to navigate)
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                menuToggle.innerHTML = '&#9776;';
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
});
// ------------------------------------