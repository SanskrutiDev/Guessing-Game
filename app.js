const max = parseInt(prompt("Enter the max number"));
document.getElementById("max").textContent = max;

const random = Math.floor(Math.random() * max) + 1;

function checkGuess() {
    let guess = parseInt(document.getElementById("guessInput").value);

    if (isNaN(guess)) {
        setMessage("Please enter a valid number!");
        return;
    }

    if (guess == random) {
        setMessage(`You are right! Congrats! The random number was ${random}.`);
    } else if (guess < random) {
        setMessage("Your guess was too small, please try again.");
    } else {
        setMessage("Your guess was too large, please try again.");
    }
}

function quitGame() {
    setMessage("User Quit");
}

function setMessage(msg) {
    document.getElementById("message").textContent = msg;
}
