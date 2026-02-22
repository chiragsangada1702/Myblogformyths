// Wait for the page to load completely
document.addEventListener('DOMContentLoaded', function() {
    
    // Get references to HTML elements
    const button = document.getElementById('clickMe');
    const message = document.getElementById('message');
    
    // Add a click event listener to the button
    button.addEventListener('click', function() {
        message.textContent = 'Hello! Thanks for clicking the button! 🎉';
        message.style.color = '#667eea';
        message.style.fontWeight = 'bold';
        
        // Make the button do a little animation
        button.style.transform = 'scale(0.95)';
        setTimeout(function() {
            button.style.transform = 'scale(1)';
        }, 200);
    });
    
    // Add current year to footer automatically
    const year = new Date().getFullYear();
    const footerParagraph = document.querySelector('footer p');
    if (footerParagraph) {
        footerParagraph.innerHTML = `&copy; ${year} My First Website. All rights reserved.`;
    }
    
    console.log('Website loaded successfully!');
});