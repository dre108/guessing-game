let min = 1; // Minimum range
let max = 10; // Maximum range

let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
let guess;
let guesses = 0;

console.log(`Random Number: ${randomNumber}`);

for (;;) {
  // Prompt the user to guess
  guess = parseInt(prompt("Guess a number between 1 and 10:"));
  console.log("🚀 ~ randomNumber:", randomNumber);

  // Validating input
  if (isNaN(guess)) {
    alert("This is not a valid input!");
    continue; // Skip the next iteration if input is invalid
  }

  guesses++; // Increment the number of attempts

  // Check the proximity before the standard feedback
  let numberDistance = Math.abs(guess - randomNumber);
  if (numberDistance <= 2) {
    alert("You're getting closer!");
  } else if (numberDistance <= 5) {
    alert("Not atoo far off");
  }
  // Logic of the game
  if (guess < randomNumber) {
    console.log("Too low! Random number:", randomNumber);
    alert("Too low!");
  } else if (guess > randomNumber) {
    console.log("Too high! Random number:", randomNumber);
    alert("Too high!");
  } else {
    alert(`Congratulations! You guessed the number in ${guesses} tries.`);
    break; // Exit the loop if the guess is correct
  }
}
