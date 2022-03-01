// GUESS THAT NUMBER
// Message to be used throughout the project/file
const enterNumText = `Please enter a number greater than zero`;
// For restarting the game
let restartGame = true;
// For storing the range of the number to be guessed
let rangeNum;
// For storing the number that the user will guess
let randomNum;
// For storing the number of attempts the user has left
let attempts;
// For storing the user's guess
let guess;
// For storing the user's response to play again or to not play again
let playAgain;

// Starting alert message
alert(`Welcome to "GUESS THAT NUMBER!" Please click "OK" to start the game`);

// Game restarts as long restartGame has a value of true
while (restartGame) {
    // Asks user to enter a number t set the upper bound for the random number that will be created
    rangeNum = prompt(`Please enter a maximum number for the range`);

    // Using parseInt to attempt to convert the user's response to a number value
    rangeNum = parseInt(rangeNum);

    // Verifies the user's entry for a range number is a number greater than zero (NOTE: Al numbers, positive or negative, have a default boolean value of true, except for zero which has a default boolean value of False. Also, NaN has a default boolean value of False as well.)
    while (!rangeNum || rangeNum < 1) {
        rangeNum = prompt(enterNumText);
        rangeNum = parseInt(rangeNum)
    }

    // Creates the random number using the range number entered by the user
    randomNum = Math.floor(Math.random() * rangeNum) + 1;

    // Prompts user to enter a number of attempts allowed (AKA The guesses that are allowed)
    attempts = parseInt(prompt(`Please enter the number of attempts allowed`));

    // Verifying the user's entry for a number of attempts allowed is a number of greater than zero and less than the range they already set
    while (!attempts || attempts < 1 || attempts >= rangeNum ) {
        attempts = parseInt(prompt(`Please enter a number from 1 up to ${rangeNum - 1}`));
    }

    // Asks user to enter a guess int he range they set
    guess = prompt(`Please enter a guess from 1 to ${rangeNum}. You have ${attempts} attempts left.`);

    // Continues looping until the user guesses the correct number or runs out of attempts (NOTE: Loops until a BREAK keyword is run)
    while (true) {
        // Tries to convert the user's guess into a number
        guess = parseInt(guess);

        // Verifies the user's guess is a number greater than zero and less than or equal to the range they set
        while (!guess || guess < 1 || guess > rangeNum) {
            guess = parseInt(prompt(`Please enter a number from 1 to ${rangeNum}.`));
        }

        // Removes an attempt
        attempts--;

        // Checks if user guessed correctly. If so, the game ends.
        if (guess === randomNum) {
            alert(`CONGRATULATIONS! YOU GUESSED THE CORRECT NUMBER: ${randomNum}`)
            break;

            // Checks if user has any attempts left. If not, then the game ends and the number is displayed to the user
        } else if (attempts === 0) {
            alert(`You have run out of attempts, loser. Git gud. >:) The correct number was ${randomNum}`);
            break;

            // Checks if suer's guess was too low and prompts user to guess again if so
        } else if (guess < randomNum) {
            guess = prompt(`Too low. You have ${attempts} attempt(s) left`);

            // The only other possibility was the user's guess was too high, so the user is prompted again
        } else {
            guess = prompt(`Too high. You have ${attempts} attempt(s) left`);
        }

        // break;
    }

    // Prompts user with option to play again
    playAgain = prompt(`Do you want to play again? Y for yes, N for no.`);

    // Loop until a valid response is given
    while (true) {
        // Checks if the user's answer is no (`N`) 
        if (playAgain.toUpperCase() === `N`) {
            // Alerts the user that the game is over and the game does NOT restart
            alert(`Thanks for  playing. You are pretty cool.`)
            restartGame = false;
            break;

            // Checks if the user's answer is ues (`Y`)
        } else if (playAgain.toUpperCase() === `Y`) {
            // The game restarts
            break;

            // Prompts the user to enter a valid response and starts the loop again
        } else {
            playAgain = prompt(`Please enter Y or N.`);
        }

        // break;
    }

    // break;
}