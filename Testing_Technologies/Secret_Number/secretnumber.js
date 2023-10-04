// Getting the computer to guess the number
function computerChoice() {
  return Math.floor(Math.random() * 10) + 1; // Generates a random number between 1 and 10
}

let attempts = 3; // Number of attempts the player has

// Displaying the results
const buttons = document.querySelectorAll("button");
const resultDiv = document.getElementById("result");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (attempts > 0) {
      const playerChoice = parseInt(button.id); // Parse the button's ID as an integer
      const computer = computerChoice();

      if (playerChoice === computer) {
        resultDiv.textContent = `That's right, you win! The correct answer was ${computer}.`;
      } else if (playerChoice < computer) {
        resultDiv.textContent = `You guessed too low! You have ${--attempts} attempts left.`;
      } else if (playerChoice > computer) {
        resultDiv.textContent = `You guessed too high! You have ${--attempts} attempts left.`;
      }

      if (attempts === 0 && playerChoice !== computer) {
        resultDiv.textContent = `You're out of attempts. The correct answer was ${computer}.`;
        buttons.forEach((btn) => {
          btn.disabled = true; // Disable buttons after 3 attempts
        });
      }
    }
  });
});
