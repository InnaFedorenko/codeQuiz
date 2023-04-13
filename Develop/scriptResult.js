console.log('New page!')
var currentWindow = window.document
var finalScore = localStorage.getItem('finalScore');
document.querySelector('#final-score-value').textContent=finalScore;
console.log(finalScore);