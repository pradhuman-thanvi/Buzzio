const socket = io();  // Connect to the server

// Handle real-time results update from all team pages
socket.on('updateResults', (buzzerPresses) => {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '<h3>Buzzer Presses:</h3>';  // Clear previous results
  
  buzzerPresses.forEach((press, index) => {
    const pressElement = document.createElement('p');
    pressElement.textContent = `Press #${index + 1}: ${press.teamName} at ${press.time}`;
    resultDiv.appendChild(pressElement);
  });
});

// Handle reset button click to reset results
document.getElementById("resetButton").addEventListener("click", () => {
  socket.emit('reset');  // Notify the server to reset the results
});
