let firstPressTime = null;
let firstTeam = null;

// When a buzzer is pressed
function handleBuzzerPress(teamName) {
  if (!firstPressTime) {  // Only register the first buzzer press
    firstPressTime = new Date();
    firstTeam = teamName;
    displayResult();
  }
}

// Display the result in the admin panel
function displayResult() {
  const resultText = `First team to buzz: ${firstTeam} at ${firstPressTime.toLocaleTimeString()}`;
  document.getElementById("first-press").innerText = resultText;
  document.querySelector(".admin-page").style.display = "block";
}

// Reset the buzzer system
function resetSystem() {
  firstPressTime = null;
  firstTeam = null;
  document.getElementById("first-press").innerText = "";
  document.querySelector(".admin-page").style.display = "none";
}

// Add event listeners to the team buttons
document.getElementById("team1").addEventListener("click", () => handleBuzzerPress('Team 1'));
document.getElementById("team2").addEventListener("click", () => handleBuzzerPress('Team 2'));
document.getElementById("team3").addEventListener("click", () => handleBuzzerPress('Team 3'));

// Add reset functionality
document.getElementById("reset").addEventListener("click", resetSystem);
