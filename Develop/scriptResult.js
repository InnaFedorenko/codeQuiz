// Get the final score value from the local storage
var finalScore = localStorage.getItem('finalScore');

// Check if the finalScore value exists in the local storage
if (finalScore !== null) {
  // Display the final score value on the page
  var finalScoreEl = document.querySelector('#final-score-value');
  finalScoreEl.textContent = finalScore;
}

// Get the form and add an event listener to it
var scoreForm = document.querySelector('#score-form');
scoreForm.addEventListener('submit', function(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the initials value from the input field
  var initialsInput = document.querySelector('#initials');
  var initialsValue = initialsInput.value.trim();

  // Check if the initials value is empty
  if (initialsValue === '') {
    alert('Please enter your initials');
    return;
  }

  // Create an object with the score and initials values
  var scoreObject = {
    score: finalScore,
    initials: initialsValue
  };

  // Get the existing scores from the local storage, or create an empty array
  var scoresArray = JSON.parse(localStorage.getItem('scoresArray')) || [];

  // Add the new score object to the array
  scoresArray.push(scoreObject);

  // Save the updated scores array to the local storage
  localStorage.setItem('scoresArray', JSON.stringify(scoresArray));

  // Redirect the user to the high scores page
  window.location.href = "highscores.html";
});