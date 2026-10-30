// Step 1: Select HTML elements
const loadingElement = document.getElementById('loading');
const errorElement = document.getElementById('error');
const productContainer = document.getElementById('product-container');

const apiURL = 'https://dummyjson.com/products';

// Step 2: Use Fetch API with GET request to fetch data
fetch(apiURL)
    .then(response => {
        // Log the response status code in the console
        console.log('Response Status Code:', response.status);

        // If response is not successful, throw an error to trigger .catch()
        if (!response.ok) {
            throw new Error('Failed to fetch data from the server. Status: ' + response.status);
        }

        // Convert response body to JSON
        return response.json();
    })
    .then(data => {
        // Access the products array
        const products = data.products;

        // Log the brand of the first product
        if (products.length > 0) {
            console.log('Brand of first product:', products[0].brand);
        }

        // Hide the loading message once data is received
        loadingElement.style.display = 'none';

        // Display products (looping through at least six items)
        products.forEach(product => {
            // Create a temporary card container
            const card = document.createElement('div');
            card.className = 'card';

            // Check if thumbnail is available, otherwise use a placeholder image
            const imageSrc = product.thumbnail ? product.thumbnail : 'https://placeholder.com';

            // Fill card with title, brand, price, and thumbnail image
            card.innerHTML = `
                <img src="${imageSrc}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p class="brand">Brand: ${product.brand || 'N/A'}</p>
                <p class="price">$${product.price}</p>
            `;

            // Append card element to the main container
            productContainer.appendChild(card);
        });
    })
    .catch(error => {
        
        console.error('Error encountered:', error);
        
        // Hide the loading spinner/text
        loadingElement.style.display = 'none';
        
        // Show an appropriate error message to the user
        errorElement.textContent = 'Oops! ' + error.message;
        errorElement.style.display = 'block';
    });
