document.addEventListener('DOMContentLoaded', function() {
    const restaurants = {
        'Mango Bravo': {
            title: 'Mango Bravo',
            description: 'Layers of crunchy wafers filled with chocolate mousse, cream and mango cubes.',
            address: 'Quezon City, Metro Manila',
            phone: '480 66 7890',
            hours: 'OPEN: 8AM to 10PM',
            price: 'PRICE: ₱1,685.00',
            
            image: 'image/Mango Bravo.jpg'
        },
        'Crinkle Cheesecake': {
            title: 'Crinkle Cheesecake',
            description: 'Homemade fudgy crinkle cake, layered with cheesecake & textured with cookie brittles. ',
            address: 'Quezon City, Metro Manila',
            phone: '480 66 7890',
            hours: 'OPEN: 8AM to 10PM',
            price: 'PRICE: ₱825.00',
            image: 'image/Crinkle Cheesecake.jpg'
        },
        'Sans Rival': {
            title: 'Sans Rival',
            description: 'Layers of chewy wafers filled with butter icing and cashew nuts.',
            address: 'Quezon City, Metro Manila',
            phone: '480 66 7890',
            hours: 'OPEN: 8AM to 10PM',
            price: 'PRICE: ₱995.00',
            image: 'image/Sans Rival.jpg'
        },
        'Turtle Pie': {
            title: 'Turtle Pie',
            description: 'Chocolate pie with salted caramel-walnut filling, rich chocolate cream, chunky brownie, and chocolate mallows, topped with walnuts, whipped cream, and chocolate drizzle.',
            address: 'Quezon City, Metro Manila',
            phone: '480 66 7890',
            hours: 'OPEN: 8AM to 11PM',
            price: 'PRICE: ₱1,385.00',
            image: 'image/Turtle Pie.jpg'
        }
    };

    
    const mainMenu = document.getElementById('mainMenu');
    const detailScreen = document.getElementById('detailScreen');
    const backButton = document.getElementById('backButton');
    const restaurantCards = document.querySelectorAll('.restaurant-card');
    const detailContent = document.getElementById('restaurantDetailContent');

    
    restaurantCards.forEach(card => {
        card.addEventListener('click', function() {
            const restaurantId = this.getAttribute('data-restaurant');
            showRestaurantDetails(restaurantId);
        });
    });

    
    backButton.addEventListener('click', function() {
        mainMenu.classList.remove('d-none');
        detailScreen.classList.add('d-none');
    });

    
    function showRestaurantDetails(restaurantId) {
        const restaurant = restaurants[restaurantId];
        
        detailContent.innerHTML = `
            <img src="${restaurant.image}" alt="${restaurant.title}" class="img-fluid mb-4">
            <h2 class="mb-3">${restaurant.title}</h2>
            <h3 class="mb-4">
             <p class="mb-3">${restaurant.description.split('\n\n')[0]}</p>
                <strong>${restaurant.hours}</strong> | 
                <strong>${restaurant.price}</strong>

            
            <p class="mb-4">
            <hr>
                ${restaurant.address}<br>
                ${restaurant.phone}<br>
            </p>
           
            <p>${restaurant.description.split('\n\n')[1] || ''}</p>
        `;

        mainMenu.classList.add('d-none');
        detailScreen.classList.remove('d-none');
    }
});