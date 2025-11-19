/**
 * FEEDBACK RENDERER SCRIPT (feedback.js)
 * Dynamically renders reviews from kitchenConfig and calculates the average rating.
 * * NOTE: Requires config.js to be loaded BEFORE this script.
 */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Check for Config and Target Elements
    if (typeof kitchenConfig === 'undefined' || !kitchenConfig.reviews) {
        console.error("Error: kitchenConfig or reviews data not found. Check config.js link.");
        return;
    }

    const reviews = kitchenConfig.reviews;
    const reviewsGrid = document.querySelector('.reviews-grid');
    const templateCard = document.querySelector('.reviews-grid .review-card');

    if (!reviewsGrid || !templateCard) {
        // We allow the script to continue if the average rating element exists, 
        // even if the grid is missing (for modularity).
    }

    // --- Helper function to generate rating stars (★) ---
    function generateStars(rating) {
        const fullStar = '★'.repeat(Math.floor(rating));
        const emptyStar = '☆'.repeat(5 - Math.floor(rating));
        return fullStar + emptyStar;
    }

    // --- Core Rendering Logic ---

    if (reviewsGrid && templateCard) {
        // Clear the grid but keep the first card reference as a template
        reviewsGrid.innerHTML = '';

        // 3. Render Reviews List
        reviews.forEach(review => {
            // Clone the template card structure
            const newCard = templateCard.cloneNode(true);

            // Populate the elements with data from the configuration
            const starsEl = newCard.querySelector('.stars');
            const textEl = newCard.querySelector('.review-text');
            const nameEl = newCard.querySelector('.reviewer-name');
            const dateEl = newCard.querySelector('.review-date');

            if (starsEl) starsEl.textContent = generateStars(review.rating);
            if (textEl) textEl.textContent = `"${review.comment}"`;
            if (nameEl) nameEl.textContent = review.name;
            if (dateEl) dateEl.textContent = review.date;

            reviewsGrid.appendChild(newCard);
        });
    }

    // --- New Function: Calculate and Render Average ---
    function calculateAndRenderAverageRating() {
        // Element to display the average rating
        const ratingScoreElement = document.querySelector('.average-rating .rating-score');

        if (!ratingScoreElement) return;

        if (reviews.length === 0) {
            ratingScoreElement.textContent = 'N/A';
            return;
        }

        const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
        const average = totalRating / reviews.length;

        // Format to one decimal place
        ratingScoreElement.textContent = average.toFixed(1);
    }

    // Execute the new function
    calculateAndRenderAverageRating();
});