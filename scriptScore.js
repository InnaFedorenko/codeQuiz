// Select the back button element
var backButton = document.querySelector('#back');

// Add an event listener for the click event on the back button
backButton.addEventListener('click', function(event) {
  // Use the location object to navigate to the index.html page
  location.href = 'index.html';
});