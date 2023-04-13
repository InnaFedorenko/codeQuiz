// Select the back button element
// Get the scoresArray from local storage
var scoresArray = JSON.parse(localStorage.getItem('scoresArray'));

// Select the table body element
var tbody = document.querySelector('#score-table');

  // function to clear all table rows
  function clearTableRows() {
    let tableBody = document.querySelector('#score-table');
    while (tableBody.firstChild) {
      tableBody.removeChild(tableBody.firstChild);
    }
  }

// Loop through the scoresArray and add each id and score pair to the table
for (var i = 0; i < scoresArray.length; i++) {
  var scoreObj = scoresArray[i];
  var tr = document.createElement('tr');
  var tdId = document.createElement('td');
  tdId.textContent = scoreObj.initials;
  var tdScore = document.createElement('td');
  tdScore.textContent = scoreObj.score;
  tr.appendChild(tdId);
  tr.appendChild(tdScore);
  tbody.appendChild(tr);
}

// Select the back button element
var backButton = document.querySelector('#back');

// Add an event listener for the click event on the back button
backButton.addEventListener('click', function(event) {
  // Use the location object to navigate to the index.html page
  location.href = 'index.html';
});

//Clear local storage
document.getElementById("clear").addEventListener("click", function() {
  localStorage.removeItem("scoresArray");
  clearTableRows();
});