document.getElementById("passcode-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    console.log("Event listener triggered!");
    var enteredPasscode = document.getElementById("passcode-input").value;
    var expectedPasscode = "fortherealones"; // Replace with your actual passcode
  
    if (enteredPasscode === expectedPasscode) {
      window.location.href = "./journey.html"; // Redirect to the protected page
    } else {
      alert("Incorrect passcode. Please try again.");
    }
  });