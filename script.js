// script.js

document.addEventListener('DOMContentLoaded', () => {
    const houses = document.querySelectorAll('.house');
    const buildings = document.querySelectorAll('.building');
    const trees = document.querySelectorAll('.tree');
    const solarPanels = document.querySelectorAll('.solar-panel');
    const windTurbines = document.querySelectorAll('.wind-turbine');
    const electricCars = document.querySelectorAll('.electric-car');

    houses.forEach(house => {
        house.addEventListener('click', () => {
            alert('This is a sustainable home with energy-efficient design.');
            console.log('House clicked');
        });
    });

    buildings.forEach(building => {
        building.addEventListener('click', () => {
            alert('This commercial building utilizes green building materials and practices.');
            console.log('Building clicked');
        });
    });

    trees.forEach(tree => {
        tree.addEventListener('mouseover', () => {
            tree.style.transform = 'scale(1.1)';
            tree.style.transition = 'transform 0.3s ease-in-out';
        });
        tree.addEventListener('mouseout', () => {
            tree.style.transform = 'scale(1)';
            tree.style.transition = 'transform 0.3s ease-in-out';
        });
        tree.addEventListener('click', () => {
            alert('Trees are vital for clean air and a healthy ecosystem.');
            console.log('Tree clicked');
        });
    });

    solarPanels.forEach(panel => {
        panel.addEventListener('click', () => {
            alert('Solar panels convert sunlight into clean energy.');
            console.log('Solar Panel clicked');
            // Example of dynamic style change on click
            panel.style.filter = 'brightness(120%)';
            setTimeout(() => {
                panel.style.filter = 'brightness(100%)';
            }, 500);
        });
    });

    windTurbines.forEach(turbine => {
        let isRotating = false;
        turbine.addEventListener('click', () => {
            isRotating = !isRotating;
            if (isRotating) {
                turbine.style.animation = 'rotate 2s linear infinite';
                alert('Wind turbines harness the power of the wind.');
                console.log('Wind Turbine clicked - started rotating');
            } else {
                turbine.style.animation = 'none';
                console.log('Wind Turbine clicked - stopped rotating');
            }
        });
    });

    electricCars.forEach(car => {
        car.addEventListener('click', () => {
            alert('Electric vehicles reduce carbon emissions.');
            console.log('Electric Car clicked');
            // Example of simple animation on click
            car.style.transform = 'translateX(10px)';
            car.style.transition = 'transform 0.5s ease-in-out';
            setTimeout(() => {
                car.style.transform = 'translateX(0)';
            }, 500);
        });
    });

    // You can add similar event listeners for other elements like:
    // - .park-small (information about urban green spaces)
    // - .store (selling eco-friendly products)
    // - .office (sustainable business practices)
    // - .lake (water conservation)
    // - .bench (public spaces)
    // - .hydro-power (renewable water energy)
    // - .bike-lane (sustainable transport)
    // - .bus-stop (public transport)
});