document.addEventListener('DOMContentLoaded', function () {
    const initSwatches = () => {
        document.querySelectorAll('.bs-swatch').forEach(swatch => {
            // Avoid multiple listeners if scripts are loaded multiple times
            if (swatch.getAttribute('data-initialized')) return;

            swatch.addEventListener('click', function (e) {
                e.preventDefault();
                const imageUrl = this.getAttribute('data-variant-image');
                if (imageUrl && imageUrl !== '') {
                    const card = this.closest('.bs-card');
                    const mainImage = card.querySelector('.bs-card-image-link img');
                    if (mainImage) {
                        mainImage.src = imageUrl;
                        mainImage.srcset = imageUrl;
                    }
                }
            });

            swatch.setAttribute('data-initialized', 'true');
        });
    };

    initSwatches();

    // Re-initialize if Shopify Section is re-rendered in customizer
    document.addEventListener('shopify:section:load', initSwatches);
});
