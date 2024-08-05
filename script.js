document.addEventListener('DOMContentLoaded', () => {
    const productList = document.querySelector('.product-list');

    const products = [
        { name: 'Dark Chocolate', price: '$5', image: 'dark-chocolate.jpg' },
        { name: 'Milk Chocolate', price: '$4', image: 'milk-chocolate.jpg' },
        { name: 'White Chocolate', price: '$4.5', image: 'white-chocolate.jpg' },
        { name: 'Assorted Chocolates', price: '$10', image: 'assorted-chocolates.jpg' }
    ];

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');

        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: ${product.price}</p>
        `;

        productList.appendChild(productItem);
    });

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for contacting us!');
        this.reset();
    });
});
