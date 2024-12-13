// Initialize the carousel
let currentIndex = 0;

function moveCarousel(direction) {
    const items = document.querySelector('.carousel-items');
    const totalItems = document.querySelectorAll('.carousel-item').length;
    
    // Calculate the width of a single item (it must be consistent with your CSS)
    const itemWidth = document.querySelector('.carousel-item').offsetWidth + 20; // Including margin

    if (direction === 'next') {
        // Move to the next item
        currentIndex = (currentIndex + 1) % totalItems; // Loop back to the first item
    } else if (direction === 'prev') {
        // Move to the previous item
        currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Loop back to the last item
    }

    // Move the carousel by updating its transform property
    const offset = -currentIndex * itemWidth;
    items.style.transform = `translateX(${offset}px)`;
}
