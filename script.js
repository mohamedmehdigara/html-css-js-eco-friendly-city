// Example JavaScript
const buildings = document.querySelectorAll('.building');

buildings.forEach(building => {
    building.addEventListener('click', () => {
        // Show information pop-up for the clicked building
        console.log('Building clicked');
    });
});
