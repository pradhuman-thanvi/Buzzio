const socket = io();  // Connect to the server

let buzzerPressed = false;

// Handle buzzer press event
document.getElementById("buzzer").addEventListener("click", function () {
  if (!buzzerPressed) {
    buzzerPressed = true;
    document.getElementById("status").textContent = "You pressed the buzzer!";
    document.getElementById("buzzer").disabled = true;  // Disable the buzzer button

    const currentTime = new Date().toLocaleTimeString();
    socket.emit('buzzerPress', 'Team 1', currentTime);  // Change 'Team 1' for each team
  } else {
    document.getElementById("status").textContent = "You already pressed the buzzer!";
  }
});

// Listen for reset event from the server
socket.on('resetAll', () => {
  buzzerPressed = false;
  document.getElementById("status").textContent = "Press the buzzer!";
  document.getElementById("buzzer").disabled = false;  // Re-enable the buzzer button
});
