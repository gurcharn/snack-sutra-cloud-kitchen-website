function renderStaticIndexConfig() {
    const config = kitchenConfig;

    // --- Hero Section ---
    const heroContent = config.home;
    document.querySelector('.hero-tag').textContent = heroContent.heroTag;

    // Split title to preserve the HTML highlighting for 'Indian Street Food'
    const titleContainer = document.querySelector('.hero-title');
    if (titleContainer) {
        titleContainer.innerHTML = heroContent.heroTitle1
            + ' <span class="highlight-text">' + heroContent.heroTitle2 + ' </span>'
            + heroContent.heroTitle3;

        // titleContainer.innerHTML = `
        // ${heroContent.heroTitle.split('Indian Street Food')[0]}
        // <span class="highlight-text">Indian Street Food</span>
        // ${heroContent.heroTitle.split('Indian Street Food')[1] || ''}
        // `;
    }

    document.querySelector('.hero-description').textContent = heroContent.heroDescription;

    // Hero Image Link
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        heroImage.src = heroContent.heroImage;
        heroImage.alt = heroContent.heroImageAlt;
    }
}

// --- Execute the rendering function when the HTML structure is parsed ---
document.addEventListener('DOMContentLoaded', renderStaticIndexConfig);