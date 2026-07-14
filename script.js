// Get the button and message elements
const button = document.getElementById('myButton');
const messageDisplay = document.getElementById('message');

// Add a click event listener
button.addEventListener('click', function() {
    messageDisplay.textContent = 'You clicked the button! 🎉';
    messageDisplay.style.color = '#764ba2';
});